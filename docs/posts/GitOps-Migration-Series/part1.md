---
title: "GitOps Migration Series: From X to GitOps with GitHub Actions and ArgoCD"
date: 2025-03-31
authors:
  - cdunda
categories:
  - GitOps
  - DevOps
  - Platform Engineering
tags:
  - gitops
  - argocd
  - github-actions
  - x
  - kubernetes
draft: false
---

# GitOps Migration Series: From X to GitOps with GitHub Actions and ArgoCD

## Blog Post 1: GitOps Evolution - Moving from X to ArgoCD

### Introduction

The evolution of deployment strategies: from CI/CD pipelines to GitOps workflows
Why GitOps: the benefits of declarative configuration and Git as the single source of truth
Overview of our journey migrating from X to ArgoCD with GitHub Actions

<!-- more -->

### Understanding the Current Architecture

X limitations we faced

- Managing yet another CI and or CD tool
- If you want to be Devops you move closer to the app code

Why we chose ArgoCD over alternatives

- ApplicationSets

- Highly Recommended

### Setting the Stage for Migration

The role of GitHub Actions in our new GitOps workflow

### Our GitOps Migration Goals

Improving developer experience with preview environments
Automating version management with Tagged Releases
Decentralizing configuration with a `gitops.yaml` approach
Managing secrets securely with External Secrets instead of at build time

### Setting the Stage for Migration

Planning your migration strategy
Identifying key components: application repos, Helm charts, GitHub Actions workflows
A glimpse at the end-state architecture

Code Sample: gitops.yaml Structure

```yaml
apps:
  - name: your-app-name
    clusterGroup: main
    clusterEnv: stg
    env: dev
    namespace: your-namespace
    releaseTag: 0.1.0
    repoPath: helm
    sharedValues: shared-values.yaml
    values: dev-values.yaml
    previewEnv:
      enabled: "true"
      baseIngress: dev.devops.2u.com
      imageKey: web-app.ecrTag
      hostKey: web-app.ingress.host
```
