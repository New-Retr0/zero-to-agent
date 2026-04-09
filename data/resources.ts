import { DISCORD_INVITE_URL } from '@/data/community'

/** Vercel-footer-style pillars for filtering the hub. */
export type ResourceGroup =
  | 'get-started'
  | 'build'
  | 'sdks'
  | 'scale'
  | 'secure'
  | 'learn'
  | 'community'
  | 'help'

export interface Resource {
  title: string
  description: string
  url: string
  group: ResourceGroup
  groupLabel: string
  /** Facet tags for secondary context (e.g. "v0", "AI SDK"). */
  tags: string[]
  brandMark?: string
}

export const resources: Resource[] = [
  {
    title: 'Zero to Agent Hub',
    description: 'The official Vercel community hub for Zero to Agent events, updates, and resources.',
    url: 'https://community.vercel.com/host/zero-to-agent-2026',
    group: 'get-started',
    groupLabel: 'Get started',
    tags: ['Event', 'Community'],
    brandMark: '▲',
  },
  {
    title: 'v0 by Vercel',
    description: 'Generate UI and full-stack scaffolds from text prompts. Your fastest path from idea to working prototype.',
    url: 'https://v0.dev',
    group: 'get-started',
    groupLabel: 'Get started',
    tags: ['v0', 'UI'],
    brandMark: 'v0',
  },
  {
    title: 'Vercel Platform',
    description: 'Deploy your agent in seconds. Free tier, instant global CDN, no config required.',
    url: 'https://vercel.com',
    group: 'get-started',
    groupLabel: 'Get started',
    tags: ['Deploy', 'Vercel'],
    brandMark: '▲',
  },
  {
    title: 'Vercel Agent Browser',
    description:
      'CLI-first browser automation built for AI agents. 5.7x more test cycles under the same context budget vs MCP tools. Snapshot, click, fill — zero DOM token overhead.',
    url: 'https://github.com/vercel-labs/agent-browser',
    group: 'build',
    groupLabel: 'Build',
    tags: ['Automation', 'Testing'],
    brandMark: '▲',
  },
  {
    title: 'Vercel agent skills',
    description:
      'Official Vercel agent skills (CLI: npx skills add vercel-labs/agent-skills). Portable packs for coding agents — deploy, React patterns, view transitions, and more. See the Agent skills section on this page for copy-paste commands.',
    url: 'https://skills.sh/vercel-labs/agent-skills',
    group: 'build',
    groupLabel: 'Build',
    tags: ['Agents', 'CLI'],
    brandMark: '▲',
  },
  {
    title: 'Vercel AI SDK',
    description:
      'The TypeScript library for building AI-powered applications. Supports streaming, tools, agents, and all major models.',
    url: 'https://sdk.vercel.ai',
    group: 'sdks',
    groupLabel: 'SDKs',
    tags: ['AI SDK', 'TypeScript'],
    brandMark: '▲',
  },
  {
    title: 'AI SDK Docs',
    description:
      'Full documentation for the Vercel AI SDK — agents, tool calling, streaming, structured output, and more.',
    url: 'https://sdk.vercel.ai/docs',
    group: 'sdks',
    groupLabel: 'SDKs',
    tags: ['AI SDK', 'Docs'],
  },
  {
    title: 'Next.js Docs',
    description: 'The full-stack React framework powering most Vercel apps. App Router, Server Actions, API routes.',
    url: 'https://nextjs.org/docs',
    group: 'build',
    groupLabel: 'Build',
    tags: ['Next.js'],
  },
  {
    title: 'Google Gemini API',
    description:
      "Google DeepMind's multimodal models powering the Zero to Agent hackathon series. Vision, reasoning, and long context.",
    url: 'https://ai.google.dev',
    group: 'build',
    groupLabel: 'Build',
    tags: ['Gemini', 'Models'],
  },
  {
    title: 'Vercel Workflow (WDK)',
    description:
      'Durable workflows for AI agents — pause, resume, retries, and observability. Multi-step orchestration that survives crashes and redeploys.',
    url: 'https://vercel.com/docs/workflow',
    group: 'sdks',
    groupLabel: 'SDKs',
    tags: ['Workflow', 'Agents'],
    brandMark: '▲',
  },
  {
    title: 'Vercel Sandbox',
    description:
      'Ephemeral microVMs to run commands, test AI-generated code, and snapshot environments — isolated from production.',
    url: 'https://vercel.com/docs/vercel-sandbox/run-commands-in-sandbox',
    group: 'secure',
    groupLabel: 'Secure',
    tags: ['Sandbox', 'Compute'],
    brandMark: '▲',
  },
  {
    title: 'Vercel Deployment Docs',
    description: 'How to deploy any Next.js or framework app to Vercel. Environment variables, domains, preview URLs.',
    url: 'https://vercel.com/docs/deployments/overview',
    group: 'scale',
    groupLabel: 'Scale',
    tags: ['Deploy', 'Docs'],
    brandMark: '▲',
  },
  {
    title: 'Vercel Fluid Compute',
    description: 'Run long-running agent workflows without hitting serverless timeouts. Ideal for multi-step agent pipelines.',
    url: 'https://vercel.com/docs/functions/fluid-compute',
    group: 'scale',
    groupLabel: 'Scale',
    tags: ['Fluid', 'Deploy'],
    brandMark: '▲',
  },
  {
    title: 'Environment Variables',
    description:
      'Secrets and config per environment (production, preview, dev). Encrypted at rest; use `vercel env pull` for local development.',
    url: 'https://vercel.com/docs/environment-variables',
    group: 'scale',
    groupLabel: 'Scale',
    tags: ['Env', 'Secrets'],
    brandMark: '▲',
  },
  {
    title: 'Vercel Integrations',
    description:
      'Marketplace databases, Redis, storage, and third-party services — provision resources and unified billing from the dashboard or CLI.',
    url: 'https://vercel.com/docs/integrations',
    group: 'scale',
    groupLabel: 'Scale',
    tags: ['Marketplace', 'Integrations'],
    brandMark: '▲',
  },
  {
    title: 'Runtime Cache',
    description:
      'Regional key-value cache for Functions, Routing Middleware, and builds — TTL, tags, and purge APIs for hot agent or model data.',
    url: 'https://vercel.com/docs/caching/runtime-cache',
    group: 'scale',
    groupLabel: 'Scale',
    tags: ['Cache', 'Functions'],
    brandMark: '▲',
  },
  {
    title: 'Routing Middleware',
    description:
      'Intercept requests before your app runs — redirects, rewrites, auth headers, and personalization compatible with Next.js and other frameworks.',
    url: 'https://vercel.com/docs/routing-middleware/api',
    group: 'scale',
    groupLabel: 'Scale',
    tags: ['Edge', 'Middleware'],
    brandMark: '▲',
  },
  {
    title: 'Vercel Community Forum',
    description: 'Ask questions, share builds, and get help from the broader Vercel developer community.',
    url: 'https://community.vercel.com',
    group: 'community',
    groupLabel: 'Community',
    tags: ['Community', 'Forum'],
    brandMark: '▲',
  },
  {
    title: 'Zero to Agent Discord',
    description:
      'Our community server for agent builders — quick questions, collaboration, and chat alongside events.',
    url: DISCORD_INVITE_URL,
    group: 'community',
    groupLabel: 'Community',
    tags: ['Community', 'Chat'],
  },
  {
    title: 'AI SDK Examples',
    description: 'Official example repos for chatbots, agents, generative UI, and more. Clone and build from.',
    url: 'https://github.com/vercel/ai/tree/main/examples',
    group: 'learn',
    groupLabel: 'Learn',
    tags: ['Examples', 'AI SDK'],
  },
  {
    title: 'v0 Docs & Templates',
    description: 'Prompting guides and templates for getting the most out of v0 code generation.',
    url: 'https://v0.dev/docs',
    group: 'learn',
    groupLabel: 'Learn',
    tags: ['v0', 'Docs'],
    brandMark: 'v0',
  },
  {
    title: 'Vercel Support',
    description: 'Official Vercel support channels. For platform issues, deployment errors, and billing questions.',
    url: 'https://vercel.com/help',
    group: 'help',
    groupLabel: 'Help',
    tags: ['Help', 'Vercel'],
    brandMark: '▲',
  },
  {
    title: 'Next.js GitHub Discussions',
    description: 'Community Q&A, bug reports, and feature discussions for the Next.js framework.',
    url: 'https://github.com/vercel/next.js/discussions',
    group: 'help',
    groupLabel: 'Help',
    tags: ['Next.js', 'Help'],
  },
]
