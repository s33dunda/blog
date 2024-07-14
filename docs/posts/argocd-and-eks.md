---
draft: true
date: 2024-07-14
categories:
  - Doc Failures
  - Kubernetes
  - ArgoCD
---

# Doc Failures: ArgoCD and EKS

Small Patch; Big Implications

I encountered an error that wound up really testing my understanding of K8s, containers, and ArgoCD:

```
# getting credentials: exec: executable argocd-k8s-auth failed with exit code 20 (Client.Timeout exceeded while awaiting headers)
```

This error hinted at credential issues and a timeout while awaiting headers. Initial checks on network configurations, IAM roles, and Kubernetes cluster accessibility didn't resolve the problem. It became clear that the issue was deeper, involving the security context of our Kubernetes deployment.

## Understanding Kubernetes Security Contexts

Kubernetes security contexts define privilege and access control settings for pods. They determine how a container runs and interacts with the underlying node and other resources. In our case, the default security context was preventing ArgoCD from accessing necessary IAM role tokens stored in `/var/run/secrets/eks.amazonaws.com/serviceaccount/` or `/var/run/secrets/pods.eks.amazonaws.com/serviceaccount/` if using [AWS New EKS Pod Identities](https://docs.aws.amazon.com/eks/latest/userguide/pod-identities.html)


[ArgoCD User ID Set as 999](https://github.com/argoproj/argo-cd/blob/master/Dockerfile#L43-L46)
## Crafting the Patch

The solution required adjusting the security context to enable ArgoCD to read these tokens. Specifically, the ArgoCD user group ID needed to be aligned with the group ID of the service account token files, which is 999. Here's the patch:

**patch.yaml:**
```yaml
- op: add
  path: /spec/template/spec/securityContext
  value: {}
- op: add
  path: /spec/template/spec/securityContext/fsGroup
  value: 999
```

The `securityContext` field was added to define the security settings for the pod. The `fsGroup` field was set to 999, ensuring that all processes running in the pod could access the token file, as both the ArgoCD user group and the service account token files are in this group.

## Integrating the Patch

The patch was integrated into our `kustomization.yaml` to apply it to both the ArgoCD deployment and the stateful set:

**kustomization.yaml:**
```yaml
# Enable argocd to read iam-role token from /var/run/secrets/eks.amazonaws.com/serviceaccount/token, etc
- path: patch.yaml
  target:
    kind: Deployment
    name: argocd-server
    namespace: argocd
- path: patch.yaml
  target:
    kind: StatefulSet
    name: argocd-application-controller
    namespace: argocd
```

## Applying the Solution

Applying these patches involved updating the security context to allow ArgoCD to read the IAM role tokens. The `fsGroup` ensures that the token file is accessible to the ArgoCD processes, addressing the core issue. After applying the patches, the error was resolved, and ArgoCD was back online.

## Technical Insights

This solution hinges on understanding Kubernetes security contexts and how they control pod interactions with the node and external resources. The `securityContext` configuration is crucial for managing permissions and ensuring that containers can access necessary files and resources securely. By setting the `fsGroup` to 999, we aligned the ArgoCD user group with the group ID of the service account token files, ensuring seamless access and resolving the credential timeout error.

This experience highlights the importance of deep technical knowledge in Kubernetes and secure environments. It's not just about deploying applications but understanding the underlying security mechanisms that ensure smooth and secure operations. Every challenge is a learning opportunity, and mastering these details makes a significant difference in maintaining robust and reliable systems.