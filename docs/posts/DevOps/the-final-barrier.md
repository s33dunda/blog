---
title: "DevOps with the App Code: The Final Boss"
date: 2025-04-01
authors:
  - cdunda
categories:
  - DevOps
  - Platform Engineering
tags:
  - devops
  - gitops
  - best-practices
draft: false
---

!!! question "What is DevOps?"

    I've been practicing "DevOps" for 12 years and I have my opinions but like the controversial GIF pronunciation...

??? failure "Hot Take"

    It's pronounced GIF! Fight me! :material-sword-cross:

I feel its important to include the originators of the term DevOps -- most notably [Patrick Debois](https://www.jedi.be/) -- to see what is said about it.

I found [this](https://www.linux.com/audience/enterprise/what-devops-patrick-debois-explains/) interview with Mr. Debois to be succinct.
And in true tl;dr; fashion -- (what isn't tl;dr; these days since the creation of Musical.ly? :musical_note: (What's Musical.ly? it's pronounced TikTok)) -- I've asked Claude to "Pull out the keys, mode of concepts, and threads of the interview."

And what did Claude gleam?

<!-- more -->

<div class="ai-content" markdown="1">
<div class="ai-header">
    <img src="../../../assets/images/ai.png" alt="AI Robot Icon" class="ai-icon">
    <span>AI Analysis</span>
</div>

### Keys

- **Collaboration** between development and operations
- **System-wide optimization** versus siloed efficiency
- **Cultural transformation** in organizational structure
- **Business competitiveness** and survival

### Mode

- Interview format with _explanatory responses_
- Experience-based perspective sharing
- Philosophical approach to practical problems
- Focus on belief systems and mindset changes

### Threads

```text
Collaboration/collaborative
System/whole system
Efficiency/efficient
Bottleneck
Silos
Believe/belief
Culture/cultural
Empathy/respect
Optimization
Thinking
Tools (with limitations)
Business value
```

### Overall Takeaway

!!! quote "TL;DR"

    The passage presents DevOps primarily as a cultural mindset shift that enables system-wide optimization through collaboration, rather than just a set of technical practices or tools.

</div>

## What "Moving Closer to the App Code" Really Means

If we take our the four keys mentioned by Debois:

- Collaboration between development and operations
- System-wide optimization versus siloed efficiency
- Cultural transformation in organizational structure
- Business competitiveness and survival

It stands to reason that moving closer to the app code is more than just Policy as Code, Infrastructure as Code, Configuration as Code, or even GitOps. Because even with all of those tools, we still run the risk of pulling a Fry:

<img src="../../../assets/images/whats-mine-is-not-yours.png" alt="Fry realizing its not yours">

So we need to stop siloing our app code. That's right. Stop siloing your app code.
You need a k8s deploy? Put it with your app code. You need metrics, traces, and monitors enabled? Put it with your app code. You need a database, message bus, or cache? Put it with your app code!

You need a VPC? What are you crazy? Don't put that with your app code.

I'll continue writing tutorials and blogs to help folks learn how to move closer to the app code.

Stay tuned and look out for more content including examples and actual code!
