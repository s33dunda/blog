---
title: "DevOps with the Code: The Final Boss"
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

I feel its important to include the creators of the term. Most notably [Patrick Debois](https://www.jedi.be/) to see what he has to say about it.

I found [this](https://www.linux.com/audience/enterprise/what-devops-patrick-debois-explains/) interview with the man himself.
And in true tl;dr; fashion, (what isn't tl;dr; these days since the creation of Musical.ly? :musical_note: (pronounced TikTok)), I've asked Claude to "Pull out the keys, mode of concepts, and threads of the interview."

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

## What "Moving Closer to the Code" Really Means

If we take our the four keys mentioned by Debois:

- Collaboration between development and operations
- System-wide optimization versus siloed efficiency
- Cultural transformation in organizational structure
- Business competitiveness and survival

It stands to reason that moving closer to the code is more than just Policy as Code, Infrastructure as Code, Configuration as Code, or even GitOps. Because even with all of those tools, we still run the risk of pulling a Fry:

<img src="../../../assets/images/whats-mine-is-not-yours.png" alt="Fry realizing its not yours">

So we need to stop siloing our codebase. That's right. Stop siloing your codebase.
You need a k8s deploy? Put it in your codebase. You need metrics, traces, and monitors enabled? Put it in your codebase. You need a database, message bus, or cache? Put it in your codebase!

You need a VPC? What are you crazy? Don't put that in your codebase.

I'll continue writing tutorials and blogs to help folks learn how to move closer to the code.

Stay tuned!
