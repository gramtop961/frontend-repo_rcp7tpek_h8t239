import { Github, Linkedin, Mail, FileDown, Globe } from 'lucide-react';

export default function Footer({ onDownloadCV = () => {} }) {
  return (
    <footer id="contact" className="relative mt-20 border-t border-white/10 bg-gray-950/80">
      <div className="pointer-events-none absolute inset-0" aria-hidden style={{
        background: 'radial-gradient(700px 300px at 20% 0%, rgba(56,189,248,0.12), transparent 60%), radial-gradient(700px 300px at 80% 0%, rgba(99,102,241,0.12), transparent 60%)'
      }} />
      <div className="relative mx-auto max-w-7xl px-6 py-12 text-white/80">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white">Let’s build something secure.</h3>
            <p className="mt-2 max-w-xl">Available for consulting, audits, and engineering partnerships.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:hello@pranjalkumar.dev" className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-4 py-2 font-medium text-white shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href="https://www.linkedin.com/messaging/compose/?recipient=pranjalkumar&body=Hello%20Pranjal%2C%20let%27s%20connect!" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition hover:bg-white/10">
                <Linkedin className="h-4 w-4" /> LinkedIn DM
              </a>
              <a href="https://github.com/pranjal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition hover:bg-white/10">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <button onClick={onDownloadCV} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition hover:bg-white/10">
                <FileDown className="h-4 w-4" /> Download CV
              </button>
            </div>
          </div>
          <div className="justify-self-end text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Globe className="h-4 w-4" /> pranjalkumar.dev
            </div>
            <p className="mt-3 text-xs text-white/50">Konami Code easter egg: Up • Up • Down • Down • Left • Right • Left • Right • B • A</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-white/40">© {new Date().getFullYear()} Pranjal Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
