import { useState } from 'react';
import { ExternalLink, Github, Lock, ShieldCheck, Bug, Network, Server, Globe, Eye } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'Zero Trust Access Gateway',
    tags: ['Zero‑Trust', 'Go', 'OPA', 'mTLS'],
    summary: 'A lightweight gateway that enforces identity‑aware, policy‑driven service access with mTLS and OPA.',
    demo: 'https://example.com/demo1',
    code: 'https://github.com/pranjal/zero-trust-gateway',
    details:
      'Designed to secure east‑west traffic across microservices. Integrated SPIFFE IDs, hot‑reload policies, and latency‑aware routing. Benchmarked at 60k rps with <2ms p95 overhead.',
    icon: <Lock className="h-5 w-5" />,
  },
  {
    id: 2,
    title: 'Cloud Attack Surface Mapper',
    tags: ['Recon', 'AWS', 'GCP', 'Azure'],
    summary: 'Maps public exposure and misconfigurations across cloud accounts with continuous snapshots.',
    demo: 'https://example.com/demo2',
    code: 'https://github.com/pranjal/cloud-asm',
    details:
      'Connects using delegated roles, enumerates attack paths, and exports graph visualizations. Includes notifier integrations and risk scoring.',
    icon: <Globe className="h-5 w-5" />,
  },
  {
    id: 3,
    title: 'Runtime Threat Detection (eBPF)',
    tags: ['eBPF', 'Linux', 'Telemetry'],
    summary: 'Low‑overhead kernel probes to detect privilege escalation and suspicious network activity.',
    demo: 'https://example.com/demo3',
    code: 'https://github.com/pranjal/ebpf-threat-detection',
    details:
      'Captures high‑signal events, correlates with process ancestry, and triggers adaptive policies. Ships with a sleek UI for triage.',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    id: 4,
    title: 'Bug Bounty Automation Toolkit',
    tags: ['Automation', 'Recon', 'Python'],
    summary: 'End‑to‑end scripts for discovery, validation, and reporting in bug bounty workflows.',
    demo: 'https://example.com/demo4',
    code: 'https://github.com/pranjal/bb-automation',
    details:
      'Modular pipeline with HTTP fuzzing, nuclei templates, and auto‑report generation. Saves 8–10 hrs/week.',
    icon: <Bug className="h-5 w-5" />,
  },
  {
    id: 5,
    title: 'Secrets Scanner CI',
    tags: ['DevSecOps', 'CI/CD', 'Regex', 'Entropy'],
    summary: 'Language‑agnostic secrets detection for CI pipelines with enterprise‑grade allowlisting.',
    demo: 'https://example.com/demo5',
    code: 'https://github.com/pranjal/secrets-scanner-ci',
    details:
      'Hybrid entropy/regex engine with custom detectors. Ships with pre‑commit hooks and GitHub Action.',
    icon: <Eye className="h-5 w-5" />,
  },
  {
    id: 6,
    title: 'Secure Service Mesh Blueprints',
    tags: ['Istio', 'mTLS', 'Policy'],
    summary: 'Hardened service mesh templates with policy packs and golden paths for teams.',
    demo: 'https://example.com/demo6',
    code: 'https://github.com/pranjal/secure-mesh-blueprints',
    details:
      'Opinionated configs for traffic policy, cert rotation, and L7 authorization. Includes chaos tests.',
    icon: <Network className="h-5 w-5" />,
  },
  {
    id: 7,
    title: 'Hardened API Boilerplate',
    tags: ['FastAPI', 'JWT', 'RBAC'],
    summary: 'Production‑ready API stack with robust authN/Z, rate limiting, and audit trails.',
    demo: 'https://example.com/demo7',
    code: 'https://github.com/pranjal/hardened-api',
    details:
      'Implements OAuth2 flows, signed cookies, and fine‑grained RBAC. Ships with Terraform and CI templates.',
    icon: <Server className="h-5 w-5" />,
  },
];

function ProjectCard({ project, onOpen }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-white/90 backdrop-blur-md transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      aria-label={`Open details for ${project.title}`}
    >
      <div className="flex items-center gap-3 text-cyan-300">{project.icon}<span className="font-semibold">{project.title}</span></div>
      <p className="mt-2 text-sm text-white/70">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">{t}</span>
        ))}
      </div>
      <div className="mt-4 h-28 w-full overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 ring-1 ring-white/10" />
      <div className="mt-4 flex items-center gap-4 text-sm">
        <span className="inline-flex items-center gap-1 text-cyan-300">Demo <ExternalLink className="h-4 w-4" /></span>
        <span className="inline-flex items-center gap-1 text-white/70">Code <Github className="h-4 w-4" /></span>
      </div>
    </button>
  );
}

function Modal({ open, project, onClose }) {
  if (!open || !project) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" role="dialog" aria-modal="true">
      <div className="max-h-[85vh] w-full max-w-2xl overflow-auto rounded-2xl border border-white/10 bg-gray-950 p-6 text-white shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <button onClick={onClose} className="rounded-lg border border-white/10 px-3 py-1 text-sm text-white/70 hover:bg-white/5">Close</button>
        </div>
        <div className="mt-4 h-48 w-full rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 ring-1 ring-white/10" />
        <p className="mt-4 text-white/80">{project.details}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 px-4 py-2 font-medium text-white hover:bg-cyan-400">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
          <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/90 hover:bg-white/10">
            <Github className="h-4 w-4" /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const onOpen = (p) => { setActive(p); setOpen(true); };
  const onClose = () => setOpen(false);

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Flagship Security Projects</h2>
        <p className="mt-2 text-white/70">A selection of initiatives blending offense‑informed defense and solid engineering.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={onOpen} />
        ))}
      </div>

      {/* Insights / Blog */}
      <div id="insights" className="mt-20">
        <h3 className="text-2xl font-semibold text-white">Insights</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[{
            title: 'Designing Zero‑Trust for Real Teams',
            date: 'Aug 2025',
            excerpt: 'Practical patterns to evolve from perimeter thinking to identity‑centric access.',
          }, {
            title: 'eBPF for Security: Signals That Matter',
            date: 'Jul 2025',
            excerpt: 'What to capture, how to enrich, and how to avoid drowning in noise.',
          }].map((post) => (
            <article key={post.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
              <h4 className="text-lg font-semibold text-white">{post.title}</h4>
              <p className="mt-1 text-sm text-white/60">{post.date}</p>
              <p className="mt-3 text-sm">{post.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-cyan-300">Read more →</a>
            </article>
          ))}
        </div>
      </div>

      {/* Testimonials & Certifications */}
      <div className="mt-20 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
          <h3 className="text-xl font-semibold text-white">Testimonials</h3>
          <ul className="mt-4 space-y-4">
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">
              “Pranjal elevated our security posture in weeks, not months.” — CTO, Fintech
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">
              “Bridges security and developer experience better than anyone we’ve worked with.” — VP Eng
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
          <h3 className="text-xl font-semibold text-white">Certifications & Badges</h3>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {['OSCP', 'CEH', 'AWS SAA', 'TryHackMe Top 1%', 'Hack The Box (Pro Lab)'].map((c) => (
              <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <Modal open={open} project={active} onClose={onClose} />
    </section>
  );
}
