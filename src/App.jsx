import { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';

function App() {
  // Konami code → theme switch (cyber neon mode)
  const KONAMI = useMemo(() => ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'], []);
  const [keys, setKeys] = useState([]);
  const [isCyber, setIsCyber] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      const next = [...keys, e.key].slice(-KONAMI.length);
      setKeys(next);
      if (next.join(',') === KONAMI.join(',')) {
        setIsCyber((s) => !s);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keys]);

  const handleDownload = () => {
    const content = `Pranjal Kumar\nCybersecurity • Developer • Freelancer\nWebsite: pranjalkumar.dev\nEmail: hello@pranjalkumar.dev\n\nHighlights:\n• Zero‑Trust architectures, eBPF, service mesh hardening\n• Secure product delivery, audits, DevSecOps\n\nExperience, projects, and references available on request.`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pranjal_Kumar_CV.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`${isCyber ? 'cyber' : ''} min-h-screen bg-gray-950 text-white antialiased`}>      
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-gray-950/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-3 w-3 rounded-full bg-cyan-400" />
            Pranjal Kumar
          </a>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#case-study">Case Study</a>
            <a className="hover:text-white" href="#insights">Insights</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Cyber neon background when active */}
      {isCyber && (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-0 opacity-30" style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(56,189,248,0.2) 0, rgba(56,189,248,0.2) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(99,102,241,0.2) 0, rgba(99,102,241,0.2) 1px, transparent 1px, transparent 40px)'
        }} />
      )}

      <main>
        <Hero onDownloadCV={handleDownload} isCyber={isCyber} />
        <Projects />
        <CaseStudy />
      </main>

      <Footer onDownloadCV={handleDownload} />
    </div>
  );
}

export default App;
