---
title: "Platform Engineers NYC: Introducing Canyon: The AI for developer self-service"
date: 2025-04-16
authors:
  - s33d-innovations
categories:
  - DevOps
  - Platform Engineering
  - Local Development
tags:
  - devcontainers
  - devbox
  - nix-packages
  - local-development
  - kubernetes
draft: false
---

--8<-- "case-insensitive-abbreviations.md"


I attended a meetup with Sylvain Kalache and Kaspar Von Grünberg. It was a wide-ranging and forward-thinking discussion primarily around AI. The conversation oscillated between speakers ranging from skepticism and adoption to tips on avoiding hallucinations, eventually touching on Humanitec's Canyon<sub><a href="#ref1">[1]</a></sub> progress bringing AI in platform engineering and Rootly AI Labs'<sub><a href="#ref2">[2]</a></sub> Root Cause Analysis, and more.

It was all fascinating but I was hung up on the Machine Conversation Protocol (MCP) and its new complementary Agent2Agent Protocol (A2A). I was supposed to continue with my seminal work today... [Nerd Snipe](https://imgs.xkcd.com/comics/nerd_sniping.png) confirmed. Plus, who doesn't love a new [standard](https://imgs.xkcd.com/comics/standards.png)?

<!-- more -->

## MCP (Machine Conversation Protocol)

> "I think the latest, no longer latest, but almost latest is MCP which is a protocol that was pioneered by Entropic. And MCP is streamlining communication between an AI agent this AI agent can be on anything. So again, MCP is communicating with data sources And A2A is handling the communication between agents. So they are complementary."
>
> — Sylvain Kalache

### Google Fu: MCP

I know little about MCP but it's nothing a little Google Fu can't solve. 

Github is a good place to start. And awesome aggregators are rarely bad.  [Gappcypher/awesome-mcp-servers](https://github.com/appcypher/awesome-mcp-servers?tab=readme-ov-file) led me right to the Model Context Protocol (MCP) website.  [For Server Developers - Model Context Protocol](https://modelcontextprotocol.io/quickstart/server). Where they have a [tutorial for building your own MCP server](https://modelcontextprotocol.io/tutorials/building-mcp-with-llms).

I think I'll walk through this tutorial in my next post. Either that or this [github/github-mcp-server: GitHub's official MCP Server](https://github.com/github/github-mcp-server). I'm thinking a PR review assistant would be a good use case.

Let me know if that's something any of y'all are be interested in.

### Google Fu: A2A

- Comparison between MCP and traditional REST APIs:
  > "REST APIs are then design with AI agent in mind. They are one-to-one [...] it's an isolated call, [...] there is no context sharing. It's designed by human for humans"
  >
  > — Sylvain Kalache

- Adoption of MCP by major players:
  > "MCP was pioneered by Anthropic but is started to be widely adopted Including by the competition OpenAI."
  >
  > — Sylvain Kalache


## Is A2A a protocol or just a schema?

I thought that A2A was a sort of Schema for AI agents. But it's not. A2A (Agent2Agent) is a specific protocol with its own distinct purpose and categorization, Google Fu resulted in many musings within the last couple of days:

A2A is an open protocol developed by Google that "will allow AI agents to communicate with each other, securely exchange information, and coordinate actions on top of various enterprise platforms or applications." It was recently announced, about a week ago.
Announcing the Agent2Agent Protocol (A2A) - Google Developers Blog<sub><a href="#ref6">[6]</a></sub>

The Agent2Agent (A2A) protocol "facilitates communication between independent AI agents" and addresses "one of the biggest challenges in enterprise AI adoption is getting agents built on different frameworks and vendors to work together."
GitHub - google/A2A: An open protocol enabling communication and interoperability between opaque agentic applications.<sub><a href="#ref7">[7]</a></sub>

Interestingly, A2A is positioned as complementary to, rather than competing with, Anthropic's Model Context Protocol (MCP). While "MCP focuses on organizing what agents, tools, or users send into the model" "A2A focuses on coordination between intelligent agents."
Post | LinkedIn<sub><a href="#ref8">[8]</a></sub>

The key distinction is that "Anthropic's Model Context Protocol (MCP) focuses on standardizing how AI agents connect to and interact with external data sources and tools. A2A's emphasis lies in the interoperability layer, ensuring agents can securely discover one another and collaborate once models are ready to exchange data or coordinate tasks."
Google Introduces Agent2Agent (A2A): A New Open Protocol - MarkTechPost<sub><a href="#ref9">[9]</a></sub>

A2A facilitates communication between a "client" agent and a "remote" agent, where the client agent "is responsible for formulating and communicating tasks, while the remote agent is responsible for acting on those tasks" to provide information or take actions.
Announcing the Agent2Agent Protocol (A2A) - Google Developers Blog<sub><a href="#ref10">[10]</a></sub>

The technical implementation uses established web standards including "HTTP, SSE (Server-Sent Events), and JSON-RPC, which should simplify integration with current IT infrastructure."
Understanding Agent2Agent (A2A): A Protocol for LLM Communication<sub><a href="#ref11">[11]</a></sub>

A2A "acts as an abstraction layer, hiding the underlying implementation details of individual agents" and is designed with openness and interoperability as key principles, allowing "agents built with any framework (LangChain, CrewAI, Google ADK, Autogen, custom builds, etc.) or vendor platform to communicate."
What is The Agent2Agent Protocol (A2A) and Why You Must Learn It Now<sub><a href="#ref12">[12]</a></sub>

The core discovery mechanism uses "Agent Cards" - standardized metadata files that declare an agent's capabilities, allowing other agents to discover what services they can provide.
How the Agent2Agent Protocol (A2A) Actually Works: A Technical Breakdown | Blott Studio<sub><a href="#ref13">[13]</a></sub>

In terms of how A2A relates to MCP: "If MCP is what enables agents to use tools, then A2A is their conversation while they work. MCP equips individual agents with capabilities, while A2A helps them coordinate those capabilities as a team."
What Is the A2A (Agent2Agent) Protocol and How It Works<sub><a href="#ref14">[14]</a></sub>

<!-- Reference Links -->

<div id="references"></div>
## References

<style>
  #references ~ p, #references ~ div {
    font-size: 0.85em;
  }
</style>

<div id="ref1"></div>
**[1]** [Humanitec's Canyon](https://getcanyon.ai/)
<div id="ref2"></div>
**[2]** [Rootly AI Labs](https://labs.rootly.ai/)
<div id="ref3"></div>
**[3]** [GitHub - appcypher/awesome-mcp-servers: Awesome MCP Servers](https://github.com/appcypher/awesome-mcp-servers?tab=readme-ov-file)
<div id="ref4"></div>
**[4]** [For Server Developers - Model Context Protocol](https://modelcontextprotocol.io/quickstart/server)
<div id="ref5"></div>
**[5]** [Building MCP with LLMs - Model Context Protocol](https://modelcontextprotocol.io/tutorials/building-mcp-with-llms)
<div id="ref6"></div>
**[6]** [Announcing the Agent2Agent Protocol (A2A) - Google Developers Blog](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)
<div id="ref7"></div>
**[7]** [GitHub - google/A2A: An open protocol](https://github.com/google/A2A)
<div id="ref8"></div>
**[8]** [Post | LinkedIn](https://www.linkedin.com/posts/kdshah_the-future-of-ai-agent-interoperability-activity-7317547258286153730-NP5g/)
<div id="ref9"></div>
**[9]** [Google Introduces Agent2Agent (A2A) - MarkTechPost](https://www.marktechpost.com/2025/04/09/google-introduces-agent2agent-a2a-a-new-open-protocol-that-allows-ai-agents-securely-collaborate-across-ecosystems-regardless-of-framework-or-vendor/)
<div id="ref10"></div>
**[10]** [Announcing the Agent2Agent Protocol (A2A) - Google Developers Blog](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)
<div id="ref11"></div>
**[11]** [Understanding Agent2Agent (A2A): A Protocol for LLM Communication](https://www.trevorlasn.com/blog/agent-2-agent-protocol-a2a)
<div id="ref12"></div>
**[12]** [What is The Agent2Agent Protocol (A2A) and Why You Must Learn It Now](https://huggingface.co/blog/lynn-mikami/agent2agent)
<div id="ref13"></div>
**[13]** [How the Agent2Agent Protocol (A2A) Actually Works: A Technical Breakdown | Blott Studio](https://www.blott.studio/blog/post/how-the-agent2agent-protocol-a2a-actually-works-a-technical-breakdown)
<div id="ref14"></div>
**[14]** [What Is the A2A (Agent2Agent) Protocol and How It Works](https://www.descope.com/learn/post/a2a)
