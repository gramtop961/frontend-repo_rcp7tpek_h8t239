import { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, ArrowRight, FileDown, Linkedin, Mail } from 'lucide-react';

export default function Hero({ onDownloadCV = () => {}, isCyber = false }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    // Soft parallax on mouse move for the overlay gradient
    const onMove = (e) => {
      if (!overlayRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      overlayRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" className={`relative min-h-[90vh] w-full overflow-hidden ${isCyber ? 'bg-[#060912]' : 'bg-gray-950'}`}>
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" />
      </div>

      {/* Gradient Overlay (non-blocking) */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
        style={{
          background:
            'radial-gradient(1000px 600px at 10% 10%, rgba(56,189,248,0.18) 0%, transparent 60%), radial-gradient(800px 500px at 90% 30%, rgba(99,102,241,0.12) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
          <Shield className="h-4 w-4 text-cyan-300" />
          <span className="text-xs font-medium tracking-wide text-white/80">
            Pranjal Kumar • Cybersecurity • Developer • Freelancer
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Securing the Future with Elegant Engineering
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          I build resilient, high‑performance products with a security‑first mindset. From
          offensive research to full‑stack delivery, I turn complex risk into clean, scalable
          systems.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500/90 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 outline-none transition hover:bg-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            View Projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            onClick={onDownloadCV}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <FileDown className="h-5 w-5" /> Download CV
          </button>

          <a
            href="https://www.linkedin.com/messaging/compose/?recipient=pranjalkumar&body=Hello%20Pranjal%2C%20loved%20your%20portfolio!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
            aria-label="Message me on LinkedIn"
          >
            <Linkedin className="h-5 w-5" /> Message
          </a>

          <a
            href="mailto:hello@pranjalkumar.dev?subject=Let%27s%20work%20together&body=Hi%20Pranjal%2C%20I%27d%20love%20to%20discuss%20a%20project."
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            <Mail className="h-5 w-5" /> Email
          </a>
        </div>

        {/* About + Timeline */}
        <div className="mt-14 grid gap-8 md:grid-cols-[auto,1fr] md:items-center">
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-2xl ring-2 ring-white/20">
            <div className="h-full w-full bg-gradient-to-br from-cyan-500/50 to-indigo-500/50" />
            <span className="absolute inset-0 grid place-items-center text-xs font-medium text-white/80">Headshot</span>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">About</h2>
            <p className="mt-2 max-w-3xl text-white/70">
              I’m a hands‑on security engineer and full‑stack developer who enjoys solving hard
              problems with simple, secure architecture. I’ve shipped production systems, run
              threat modeling workshops, and helped teams pass audits with confidence.
            </p>

            {/* Timeline */}
            <ol className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { year: '2019', label: 'Started in cybersecurity' },
                { year: '2021', label: 'Bug bounties & open‑source' },
                { year: '2023→', label: 'Consulting & product builds' },
              ].map((item) => (
                <li key={item.year} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80">
                  <p className="text-sm text-white/60">{item.year}</p>
                  <p className="font-medium">{item.label}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
