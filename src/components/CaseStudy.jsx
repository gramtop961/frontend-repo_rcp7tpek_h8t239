export default function CaseStudy() {
  return (
    <section id="case-study" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Case Study: Hardening a Fintech API</h2>
        <p className="mt-3 text-white/70">
          Problem → Solution → Tech → Results
        </p>

        <div className="mt-8 grid gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            <h3 className="text-lg font-semibold text-white">Problem</h3>
            <p className="mt-2">A rapidly scaling fintech faced credential stuffing, noisy logs, and audit gaps across their APIs.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            <h3 className="text-lg font-semibold text-white">Solution</h3>
            <p className="mt-2">Designed an authentication gateway, implemented risk‑based rate limits, centralized structured logging, and enforced policy‑as‑code for sensitive operations.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            <h3 className="text-lg font-semibold text-white">Tech</h3>
            <p className="mt-2">FastAPI, Redis, OPA, OpenTelemetry, eBPF signals, Terraform, GitHub Actions.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            <h3 className="text-lg font-semibold text-white">Results</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>92% drop in credential stuffing success in 2 weeks</li>
              <li>p95 latency impact under 3ms with full observability</li>
              <li>Passed SOC 2 audit with zero blocking findings</li>
            </ul>
          </div>
        </div>

        {/* Simple diagram */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Architecture Diagram</h3>
          <svg className="mt-4 h-64 w-full" viewBox="0 0 800 300" role="img" aria-label="High level system diagram">
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(34,211,238,0.8)" />
                <stop offset="100%" stopColor="rgba(99,102,241,0.8)" />
              </linearGradient>
            </defs>
            <rect x="40" y="40" width="200" height="80" rx="14" fill="url(#grad)" opacity="0.2" stroke="white" strokeOpacity="0.2" />
            <text x="140" y="90" textAnchor="middle" fill="white" opacity="0.8">Client</text>

            <rect x="300" y="40" width="220" height="80" rx="14" fill="url(#grad)" opacity="0.2" stroke="white" strokeOpacity="0.2" />
            <text x="410" y="90" textAnchor="middle" fill="white" opacity="0.8">Auth Gateway</text>

            <rect x="580" y="40" width="180" height="80" rx="14" fill="url(#grad)" opacity="0.2" stroke="white" strokeOpacity="0.2" />
            <text x="670" y="90" textAnchor="middle" fill="white" opacity="0.8">API Cluster</text>

            <rect x="300" y="180" width="220" height="80" rx="14" fill="url(#grad)" opacity="0.2" stroke="white" strokeOpacity="0.2" />
            <text x="410" y="230" textAnchor="middle" fill="white" opacity="0.8">Policy (OPA)</text>

            <rect x="580" y="180" width="180" height="80" rx="14" fill="url(#grad)" opacity="0.2" stroke="white" strokeOpacity="0.2" />
            <text x="670" y="230" textAnchor="middle" fill="white" opacity="0.8">Telemetry</text>

            <path d="M240 80 L300 80" stroke="white" strokeOpacity="0.3" />
            <path d="M520 80 L580 80" stroke="white" strokeOpacity="0.3" />
            <path d="M410 120 L410 180" stroke="white" strokeOpacity="0.3" />
            <path d="M670 120 L670 180" stroke="white" strokeOpacity="0.3" />
            <polygon points="580,80 570,74 570,86" fill="white" opacity="0.5" />
            <polygon points="300,80 290,74 290,86" fill="white" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
