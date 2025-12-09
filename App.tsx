import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

// Inline Icon for the App component usage
const EnvelopeIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="square" 
    strokeLinejoin="miter" 
    className={className}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-nord-0 text-nord-4 selection:bg-nord-9 selection:text-nord-0 font-mono relative">
      {/* Global Background Grid Lines */}
      <div className="grid-bg"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Team />
        </main>
        <Footer />
      </div>
      
      {/* Floating CTA: Hidden on Mobile/Tablet, Visible on Desktop (lg+) */}
      <a 
        href="mailto:berker@lat48.io"
        className="fixed right-6 bottom-6 z-50 hidden lg:flex items-center gap-3 px-6 py-4 bg-nord-0 border border-nord-4 text-nord-4 hover:bg-nord-6 hover:text-nord-0 hover:border-nord-6 transition-all duration-300 group cursor-pointer"
      >
          <EnvelopeIcon className="w-6 h-6 group-hover:text-nord-0 transition-colors" />
          <span className="font-mono text-lg font-bold tracking-widest group-hover:text-nord-0 transition-colors">SAY HI</span>
      </a>
    </div>
  );
}

export default App;
