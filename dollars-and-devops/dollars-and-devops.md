I'll clean up this transcript for you, removing redundancies, timestamps, and unnecessary information while keeping the important content.

# Dollars and DevOps: Building Internal Developer Platforms and Measuring ROI

## Introduction
**Natan Yellin**: I was in Spain for KubeCon Valencia last time.

**Carla**: Welcome everyone from Belgium, California, and Canada. This webinar is being recorded. We'll send you the links and slides tomorrow. Feel free to ask questions in the chat or Q&A section. We'll have a Q&A session in the last 30 minutes, and you can share questions in Slack afterward.

## Main Presentation
**Natan**: Today we're discussing "Dollars and DevOps" - building internal developer platforms and measuring ROI. This talk evolved from a previous one about bad abstractions in building internal developer platforms, which sparked discussion about how to build good platforms and measure their effectiveness.

I'm the CEO of Robusta Dev. We turn Slack into a self-service portal for developers, working with organizations that build internal developer platforms.

### The $25 Billion Mistake
Let's start with a $25 billion mistake - the Airbus A380. It was supposed to be the next generation airplane to compete with the Boeing 747. It was the biggest plane ever built but became a huge flop, costing more than $25 billion in losses before shutting down production.

There's much to learn from this engineering failure. Airbus builds something that airlines adopt, then roll out to customers. They built something no one needed that didn't sell.

The A380 was estimated to have 15% more operating costs than the 747. They thought about ROI but got it wrong.

### Why It Failed
The obvious answer is "no adoption," but that doesn't explain why. The real reasons:

1. It solved the wrong problem - assuming a spoke-hub model (flying through major hubs) when the industry was shifting to point-to-point flying.

2. No flexibility - they built the world's biggest plane that only worked under certain assumptions.

3. Long development time - by the time it launched, the world had changed.

### Application to Platform Engineering
We should ask:
- How can you be sure you're solving the right problem?
- Is your platform flexible to adjust to change?
- How long until you benefit? Can you accelerate the timeline?

### The MV Platform Approach
There's a shortcut - the Minimum Viable Platform (MVP) approach. Instead of building a platform, then seeking adoption, then measuring ROI, work backwards:

1. Start with ROI using a single KPI (the "platform equation")
2. Ask what will move this KPI by 25-50%
3. Build just that in a small iteration
4. Verify the improvement
5. Return to step 1

With short iterative loops and a clear KPI, it's hard to go wrong. You get adoption in each cycle.

### The Platform Equation
The platform equation measures how many support tickets developers create for your platform team, or how many Slack messages they send asking for help.

Calculate:
- Number of support tickets per week
- Hours to resolve each ticket
- Hourly wage of the person answering

This gives you a dollar benefit. If you reduce tickets from 10 to 9 per week, and each ticket takes 2 hours at $75-100/hour, you have concrete dollar value saved.

### Assumptions and Objections
**Assumption**: You have something to do with the extra time saved (other roadmap items).

**Common objections**:
- "Devs don't open tickets" - How are developers asking for help? Through Slack, Teams, etc.? If there's no communication for help, you've already built a good platform.
- "No visibility into questions" - Ask team members for estimates of how many questions they get.
- "AI agents answer questions" - Factor in acceptance rate (what percentage of AI answers are sufficient vs. require human escalation).

### Prescriptive Approach
This method is prescriptive for platform building:
1. Identify where most support tickets come from
2. Understand why developers can't do these tasks themselves
3. Find the fastest path to self-service
4. Implement, then measure if tickets decrease

### The Full Platform Equation
The complete ROI has two parts:
1. Time saved by the DevOps/platform team
2. Time saved by developers who are no longer blocked

With just 10 requests per week at 1 hour per ticket, the annual cost is around $100,000 for the DevOps side and $100,000-200,000 for the dev side.

### Questions and Answers

**Q**: If there are no support tickets, is it worth building a platform?
**A**: I'd be skeptical. If everyone gets by well on their own, why build a platform?

**Q**: How to measure team productivity vs. MTTR vs. cost saving?
**A**: There are three ROI pillars:
1. Platform engineering (self-service) - what we covered
2. SRE use case (reducing MTTR) - if downtime costs $1M/hour, reducing incident resolution by 15 minutes saves $250,000
3. FinOps (cost saving)

**Q**: Does this formula mean bigger number of developers equals larger benefit?
**A**: Not necessarily. It's about the number of requests your platform team gets, not the size of the development organization.

**Q**: Should platform building be considered for larger teams only?
**A**: No, it's about support tickets, not team size.

**Q**: How do you assess if your platform engineering impacts business goals like revenue growth?
**A**: What business cares about is moving faster. When you reduce hours blocked per ticket, you help developers deploy faster and spend less time blocked.

**Q**: Is platform work always a tools game (like Backstage), or is there a people/process element?
**A**: It's always both. Sometimes the solution is cultural (giving developers proper permissions) or training (DevOps guild approach), not tools.

**Q**: What about cost implications of resources created through self-service?
**A**: Platforms should include compliance and lifecycle tracking. The question becomes how to enable self-service while maintaining necessary controls.

## Conclusion
If you take one thing away: work backwards from ROI. Start by asking what has to happen for this platform to provide return on investment, then find the fastest way to measure and validate that. Either build a platform that's ROI positive, or recognize when it doesn't make financial sense.