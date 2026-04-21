export type Post = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  readTime: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'why-your-email-flows-are-leaving-money-on-the-table',
    title: 'Why Your Email Flows Are Leaving Money on the Table',
    date: 'April 14, 2026',
    category: 'Email',
    excerpt: 'Most DTC brands have the same three flows live: welcome, abandoned cart, and post-purchase. That\'s the floor — not the ceiling. Here\'s what you\'re missing.',
    readTime: '5 min read',
    content: `
<p>Most DTC brands have the same three flows live: welcome series, abandoned cart, and a basic post-purchase sequence. They set them up once, declare victory, and move on.</p>

<p>That's the floor. Not the ceiling.</p>

<p>The brands doing 35–45% of their revenue through email aren't doing it with more subscribers — they're doing it with better architecture. Here's what they have that you probably don't.</p>

<h2>The flows most brands skip</h2>

<p><strong>Browse abandonment.</strong> Someone looked at a product page and left without adding to cart. They're warm. They're interested. Most brands ignore them entirely because "they didn't even add to cart." That's backwards — this is your earliest signal of intent, and it's recoverable.</p>

<p><strong>Winback sequences.</strong> You have customers who bought 6, 9, 12 months ago and went quiet. A three-email winback sequence — with the right timing, the right offer, and the right copy — routinely recovers 8–12% of dormant buyers. That's revenue sitting completely untouched.</p>

<p><strong>VIP escalation flows.</strong> When a customer hits a spend threshold or buys three times, does anything happen? For most brands, no. VIP flows create loyalty, increase LTV, and reduce churn. They take a few hours to set up and they run forever.</p>

<p><strong>Post-purchase education.</strong> The first 30 days after a purchase are when a customer is most engaged with your brand. If you're only sending one confirmation email and going quiet, you're wasting the warmest window you'll ever have with that person.</p>

<h2>The copy problem</h2>

<p>Even when brands have the right flows in place, the copy is usually the bottleneck. Templates from 2022. Subject lines that don't test. Body copy that reads like terms and conditions.</p>

<p>Email copy compounds. A 3% lift in open rate across 12 emails per month doesn't sound dramatic — but at 50,000 subscribers, it's thousands of additional opens per send, every month, indefinitely.</p>

<h2>The reporting blind spot</h2>

<p>Most brands measure email revenue as a flat percentage of total revenue. That number is nearly useless on its own. The metrics that actually tell you what's working:</p>

<ul>
<li>Revenue per recipient by flow</li>
<li>Click-to-purchase rate by email (not just click rate)</li>
<li>Flow entry rate vs. list size (are people even entering your sequences?)</li>
<li>Unsubscribe rate by flow step (where are you losing them?)</li>
</ul>

<p>When you track these, you stop optimizing vanity metrics and start finding where the money is actually going missing.</p>

<h2>What this looks like in practice</h2>

<p>A DTC apparel brand at $4.2M ARR came to us with 18% email-attributed revenue. That's about average for a brand their size. They had a welcome flow, an abandoned cart flow, and a post-purchase sequence. All fine. All basic.</p>

<p>In 60 days, we rebuilt their abandoned cart copy, added a browse abandonment flow, deployed a 90-day winback campaign to their dormant list, and rewrote their post-purchase sequence with an actual education arc. No new subscribers acquired.</p>

<p>Email-attributed revenue went to 41%. Same list. Just better architecture and copy.</p>

<p>The opportunity was always there. It just needed someone — or something — to actually execute on it.</p>
    `,
  },
  {
    slug: 'geo-how-to-show-up-in-chatgpt-and-perplexity',
    title: 'GEO: How to Show Up in ChatGPT and Perplexity (Not Just Google)',
    date: 'April 9, 2026',
    category: 'SEO + GEO',
    excerpt: 'Google is no longer the only search engine that matters. AI-generated answers are becoming the first touchpoint for purchase decisions — and most brands have zero presence there.',
    readTime: '6 min read',
    content: `
<p>Something shifted in how people research purchases. They're not just Googling anymore — they're asking ChatGPT, Perplexity, and Google's AI Overviews to summarize their options, compare products, and make recommendations.</p>

<p>When someone types "best protein powder for weight loss" into Perplexity, they get an AI-generated answer with source citations — not ten blue links. The brands that get cited are the ones that win. The brands that don't exist in those answers are invisible.</p>

<p>This is Generative Engine Optimization. And most DTC brands have zero strategy for it.</p>

<h2>How AI search engines decide what to cite</h2>

<p>AI search engines pull from a different set of signals than Google. While traditional SEO rewards link authority and keyword density, GEO rewards:</p>

<p><strong>Structured, citable information.</strong> AI models prefer content that makes clear, direct claims with supporting evidence. Paragraphs that answer a specific question clearly are far more likely to be pulled than vague brand copy.</p>

<p><strong>Third-party mentions and reviews.</strong> When your brand is discussed in editorial content, review sites, Reddit threads, and forum posts, AI models treat this as evidence of legitimacy. A brand with 200 authentic third-party mentions is far more likely to surface than one with only owned content.</p>

<p><strong>Schema markup and structured data.</strong> Product schema, FAQ schema, and review schema all make your content more parseable for AI systems. This is table stakes that most brands skip.</p>

<p><strong>Recency and freshness.</strong> AI systems weight recent content. A blog post from 2019 is invisible. Content published in the last 90 days gets significantly more weight.</p>

<h2>The practical GEO checklist</h2>

<p>If you want to start showing up in AI search results, here's where to start:</p>

<ol>
<li><strong>Audit your existing AI presence.</strong> Type your category into ChatGPT, Perplexity, and Google's AI Overview. Note which brands appear. Note which don't. That's your competitive landscape.</li>
<li><strong>Create question-and-answer content.</strong> Write content that directly answers the specific questions your customers are asking AI tools. "What is the best X for Y" format performs extremely well.</li>
<li><strong>Build third-party coverage.</strong> Reach out to editorial publications, product review sites, and niche newsletters. Every external mention is a citation signal.</li>
<li><strong>Implement product and FAQ schema.</strong> Every product page should have structured data. Every FAQ should use proper schema markup.</li>
<li><strong>Publish consistently.</strong> Freshness is a ranking factor. One blog post per week, written to answer real questions your customers ask, compounds significantly over 6–12 months.</li>
</ol>

<h2>What the data shows</h2>

<p>A supplement brand at $2.8M ARR had strong Google rankings but zero AI search presence. Their competitors were appearing in ChatGPT recommendations for their core category keywords. They were invisible.</p>

<p>After 90 days of GEO-focused content and technical optimization, they had 47 new keyword rankings in Google and — more importantly — appeared in ChatGPT and Perplexity answers for 12 high-intent queries. Their competitors had zero AI search presence.</p>

<p>That advantage compounds. Every month they publish new content, every month they get more citations, every month their AI search footprint grows. The brands that start now will be very difficult to displace in 18 months.</p>

<h2>The window is open right now</h2>

<p>GEO is where SEO was in 2008. The brands that move now will own this channel. The brands that wait will spend the next five years trying to catch up.</p>

<p>The good news: the barrier is content quality and consistency, not budget. You don't need a $10,000/month agency to win this. You need a systematic content operation that understands what AI search engines reward.</p>
    `,
  },
  {
    slug: 'the-real-cost-of-your-marketing-agency',
    title: 'The Real Cost of Your Marketing Agency',
    date: 'April 3, 2026',
    category: 'Agency vs AI',
    excerpt: 'The retainer is the smallest number on the invoice. Here\'s what brands actually spend when you add up the full picture — and what they\'re getting for it.',
    readTime: '4 min read',
    content: `
<p>You're paying $8,000 a month. Maybe $12,000. Maybe more. And you tell yourself it's worth it because marketing is complicated and someone has to handle it.</p>

<p>But the retainer is the smallest number. Here's the real math.</p>

<h2>What you're actually paying</h2>

<p><strong>The retainer.</strong> $8,000–$25,000/month depending on the agency and scope. This is what you see on the invoice.</p>

<p><strong>Your time.</strong> Every agency relationship requires a client-side owner. Weekly calls, brief reviews, approval cycles, feedback loops. For most founders, this runs 4–8 hours per week. At a conservative value of $200/hour for a founder's time, that's $3,200–$6,400/month in opportunity cost. Invisible, but real.</p>

<p><strong>The ramp.</strong> A new agency takes 60–90 days to understand your brand, build their processes, and start producing work at full capacity. You're paying full rate during this period. You're not getting full output.</p>

<p><strong>The turnover tax.</strong> The person who pitched you isn't the person doing your work. When that person leaves — and they will leave, agency turnover runs 30–40% annually — you lose institutional knowledge and restart the ramp. The average brand switches agencies every 18–24 months. Each switch costs you the ramp again.</p>

<p><strong>The tool stack.</strong> Many agencies bill their software costs through to you — Klaviyo, SEO tools, analytics platforms — often at markup. Or they use their own logins and you have no access to your own data when you leave.</p>

<h2>What you're getting for it</h2>

<p>Most agencies serving DTC brands at the $1M–$10M ARR range are running 15–25 clients per senior strategist. Your account gets a portion of their attention. Maybe 5–8 hours per week across all deliverables.</p>

<p>The work is done by a team where the senior person sets strategy and a junior person executes. The junior person is also on 8 other accounts. They're good. They're trying. They're also stretched thin and working from templates.</p>

<p>This isn't a criticism of agencies. It's the economics of the model. At $10,000/month, with agency overhead and margin, you can afford about 15–20 hours of actual work per month. That's the math.</p>

<h2>What AI agents actually cost</h2>

<p>Frank Media's email agent: $750/month. That's it. It runs your email operation — flows, campaigns, segmentation, reporting — 24 hours a day. It doesn't bill for hours. It doesn't go on vacation. It doesn't quit.</p>

<p>The Growth Bundle (email + SEO + GEO): $2,000/month. Full execution across your two most important owned channels, fully managed.</p>

<p>The question isn't whether AI agents are as good as a great agency. The question is whether they're better than what you're actually getting — a stretched junior team working from templates, costing you $8,000–$25,000 a month, plus your time, plus the ramp, plus the turnover.</p>

<p>For most brands at $1M–$10M ARR, the answer is yes.</p>

<h2>The right question</h2>

<p>Don't ask "can AI replace my agency?" Ask "what am I actually getting from my agency, and is it worth what I'm paying?"</p>

<p>Most brands who ask that question honestly are surprised by the answer.</p>
    `,
  },
  {
    slug: '5-signs-your-dtc-brand-is-ready-for-ai-agents',
    title: '5 Signs Your DTC Brand Is Ready for AI Agents',
    date: 'March 27, 2026',
    category: 'AI Strategy',
    excerpt: 'AI agents aren\'t right for every brand at every stage. Here\'s how to know if you\'re in the window where they create a real competitive edge.',
    readTime: '4 min read',
    content: `
<p>AI agents aren't a magic fix. They work extraordinarily well for brands in a specific zone — and less well outside of it. Here's how to know if you're in that zone.</p>

<h2>1. You're doing $500K+ in annual revenue</h2>

<p>Below $500K, the email list is usually too small and the customer base is too thin for automated flows to generate meaningful returns. The ROI math gets tight.</p>

<p>Above $500K, you have enough volume that email optimization, SEO compounding, and retention improvement move real numbers. A 5% lift in email-attributed revenue at $500K is $25K/year. At $2M, it's $100K. The same agent, dramatically different return.</p>

<h2>2. You have a real product and genuine customers</h2>

<p>AI agents amplify what's already working. They can't create demand for a product that people don't want, and they can't manufacture authentic customer sentiment. If your product has real customers who actually love it, agents can systematically capture more of the value you're already generating. If the fundamentals aren't there, no amount of email optimization will fix it.</p>

<h2>3. You're paying for execution you're not getting</h2>

<p>The most common pattern we see: a brand is paying an agency or a marketing hire $3,000–$12,000/month for email and SEO, and the output is inconsistent, slow, and not strategic. They're paying for capability they're not fully receiving. That's the exact gap agents fill — consistent, systematic execution at a fraction of the cost.</p>

<h2>4. You don't want to manage a marketing team</h2>

<p>Some founders love building and managing teams. Most don't — they want to build the product and grow the business, and managing a marketing department is a distraction from that. If you find yourself spending 6+ hours a week on marketing management, approvals, and oversight, agents remove that overhead almost entirely.</p>

<h2>5. You're thinking in years, not sprints</h2>

<p>The biggest returns from AI agents come from compounding. An email flow that runs for 18 months generates more revenue than one that runs for 3 months — obviously. SEO content published consistently for a year builds domain authority that paid traffic can't buy.</p>

<p>Brands that think in campaigns and sprints don't get the full value. Brands that think in systems and compounding do. If you're willing to commit to a channel for 12+ months and let it build, agents are exceptionally powerful.</p>

<h2>If that sounds like you</h2>

<p>The audit is free. We'll review your current email flows, SEO footprint, and AI search presence — and show you exactly where the opportunity is before you commit to anything.</p>

<p>No slides. No vague promises. Specifics.</p>
    `,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}
