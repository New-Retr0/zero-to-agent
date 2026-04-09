'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, ExternalLink } from 'lucide-react'
import { toast } from 'sonner'
import { SectionReveal } from './section-reveal'
import { SectionHeading } from './ui/section-heading'

const INSTALL_ALL = 'npx skills add vercel-labs/agent-skills -y'
const INSTALL_GLOBAL = 'npx skills add vercel-labs/agent-skills -g -y'
const LIST_SKILLS = 'npx skills add vercel-labs/agent-skills --list'

const SKILL_ROWS: { id: string; title: string; description: string }[] = [
  {
    id: 'vercel-composition-patterns',
    title: 'Composition patterns',
    description: 'React composition — compound components, providers, React 19 APIs.',
  },
  {
    id: 'deploy-to-vercel',
    title: 'Deploy to Vercel',
    description: 'Deploy from the agent — preview URL and flows for “ship this”.',
  },
  {
    id: 'vercel-react-best-practices',
    title: 'React best practices',
    description: 'React and Next.js performance guidelines from Vercel Engineering.',
  },
  {
    id: 'vercel-react-native-skills',
    title: 'React Native',
    description: 'React Native and Expo performance and patterns.',
  },
  {
    id: 'vercel-react-view-transitions',
    title: 'View transitions',
    description: 'React View Transition API and Next.js integration.',
  },
  {
    id: 'vercel-cli-with-tokens',
    title: 'Vercel CLI (tokens)',
    description: 'CLI workflows with token-based auth (CI, sandboxes).',
  },
  {
    id: 'web-design-guidelines',
    title: 'Web design guidelines',
    description: 'Web Interface Guidelines — UI review, accessibility, UX.',
  },
]

function skillCommand(skillId: string) {
  return `npx skills add vercel-labs/agent-skills --skill ${skillId} -y`
}

function CopyableCommand({ command, label }: { command: string; label: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      toast.success('Copied')
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Could not copy')
    }
  }

  return (
    <div className="flex gap-2 items-stretch">
      <pre
        className="flex-1 min-w-0 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--bg-alpha)] px-3 py-2.5 font-[family-name:var(--font-geist-mono)] text-[11px] leading-relaxed text-[var(--text-secondary)]"
        tabIndex={0}
        aria-label={label}
      >
        <code className="text-[var(--text)]">{command}</code>
      </pre>
      <button
        type="button"
        onClick={copy}
        className="flex-shrink-0 inline-flex items-center justify-center w-10 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-dim)] hover:border-[var(--border-accent)] hover:text-[var(--accent)] transition-colors"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check size={16} className="text-[var(--accent)]" /> : <Copy size={16} />}
      </button>
    </div>
  )
}

export function AgentSkillsSection() {
  return (
    <section
      id="agent-skills"
      className="scroll-mt-nav relative py-24 md:py-32 px-4 sm:px-6 border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionHeading
            label="Agent skills"
            title="Install Vercel skills for your coding agent."
            description="Portable instruction packs for AI coding agents — deploy flows, React and Next.js guidance, UI review checklists, and more. Copy a command and run it in your project terminal."
          />
        </SectionReveal>

        <div className="mt-8 max-w-2xl space-y-4 text-[15px] leading-[1.65] text-[var(--text-secondary)] tracking-[-0.01em]">
          <p>
            <strong className="text-[var(--text)]">What skills are.</strong> An{' '}
            <span className="text-[var(--text)]">agent skill</span> is a bundle of markdown instructions (and
            sometimes scripts) that your coding agent can load when a task matches — similar to a playbook or runbook, but
            for the model. They keep advice consistent: framework patterns, deployment steps, and review criteria you
            want repeated across sessions.
          </p>
          <p>
            <strong className="text-[var(--text)]">The open CLI.</strong> The{' '}
            <a
              href="https://github.com/vercel-labs/skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              skills
            </a>{' '}
            tool (<code className="font-[family-name:var(--font-geist-mono)] text-[12px] text-[var(--text)]">npx skills add …</code>) installs skills into the right folders for many agents so you are not hand-copying files.
          </p>
          <p>
            <strong className="text-[var(--text)]">How Vercel fits in.</strong> Vercel publishes{' '}
            <a
              href="https://github.com/vercel-labs/agent-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              vercel-labs/agent-skills
            </a>
            : official packs aligned with the Vercel platform, Next.js, React, shipping to production, and the Web
            Interface Guidelines. They complement generic model knowledge with product-specific defaults your team can
            rely on.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <div>
            <p className="text-[13px] font-medium text-[var(--text)] mb-2">Install all seven skills (this repo)</p>
            <CopyableCommand command={INSTALL_ALL} label="Install all Vercel agent skills" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[12px] text-[var(--text-dim)] mb-2">Global (all projects)</p>
              <CopyableCommand command={INSTALL_GLOBAL} label="Install all skills globally" />
            </div>
            <div>
              <p className="text-[12px] text-[var(--text-dim)] mb-2">List skills without installing</p>
              <CopyableCommand command={LIST_SKILLS} label="List available skills" />
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--border)]">
            <h3 className="text-[14px] font-semibold text-[var(--text)] mb-4">One skill at a time</h3>
            <ul className="space-y-5">
              {SKILL_ROWS.map((row, index) => (
                <motion.li
                  key={row.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: index * 0.03 }}
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-4"
                >
                  <div className="mb-2">
                    <span className="text-[14px] font-semibold text-[var(--text)]">{row.title}</span>
                    <span className="font-[family-name:var(--font-geist-mono)] text-[10px] text-[var(--text-dim)] ml-2">
                      {row.id}
                    </span>
                  </div>
                  <p className="text-[12px] text-[var(--text-secondary)] mb-3 leading-relaxed">{row.description}</p>
                  <CopyableCommand command={skillCommand(row.id)} label={`Install ${row.title}`} />
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] p-5">
            <h3 className="text-[14px] font-semibold text-[var(--text)] mb-2">Browse the catalog</h3>
            <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-3">
              See descriptions and versions for each pack on the public index. Same repository as the commands above —
              useful before you install or when you want to share a link.
            </p>
            <a
              href="https://skills.sh/vercel-labs/agent-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-[var(--accent)] hover:underline"
            >
              skills.sh — vercel-labs/agent-skills
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
