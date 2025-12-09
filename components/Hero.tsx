import React from 'react';
import heroImage from '../assets/hero.jpg';

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

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center border-b border-nord-4 relative overflow-hidden py-24">
      {/* Container */}
      <div className="container mx-auto px-4 max-w-screen-2xl">
        
        {/* Main Grid: Left (Title + Content Row) vs Right (Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-8">
          
          {/* Left Column: Title + (Text Box | CTA) */}
          <div className="flex flex-col gap-12">
            
            {/* Title Section */}
            <div className="border-l-[6px] border-nord-8 pl-8 md:pl-12 flex flex-col">
              <h1 className="type-display">
                PURE<br/>
                SIGNAL
              </h1>
              <p className="type-h2 pt-6 md:pt-10">
                Blockchain Advisory
              </p>
            </div>

            {/* Content Row: Text Box + CTA Button side-by-side */}
            <div className="flex flex-col md:flex-row gap-6 max-w-3xl">
                {/* Text Box - Reduced padding to minimize dead space */}
                <div className="flex-[2] card card-hover p-6">
                    <p className="type-body opacity-90">
                        Lat48 is a small group of operators who build, guide, and steady early ventures in crypto. We bring discipline, network, and practical support to teams turning intent into products. We believe in momentum.
                    </p>
                </div>

                {/* CTA Box - Hidden on Large Screens (Desktop) */}
                <a 
                    href="mailto:berker@lat48.io"
                    className="flex-1 lg:hidden group flex flex-col items-center justify-center p-6 border border-nord-3 bg-nord-0 hover:bg-nord-6 hover:border-nord-6 transition-all duration-200 cursor-pointer min-h-[140px] md:min-h-0"
                >
                    <EnvelopeIcon className="w-10 h-10 text-nord-6 group-hover:text-nord-0 mb-4 transition-colors duration-200" />
                    <span className="text-nord-6 group-hover:text-nord-0 font-bold uppercase tracking-wider text-2xl transition-colors duration-200 text-center whitespace-nowrap">SAY HI</span>
                </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-none">
             {/* 
                Z-INDEX LAYERING:
                1. Gray Border (z-0)
                2. Image Container (z-10)
                3. Cyan Border (z-20)
             */}
             <div className="relative group w-full aspect-square md:w-[400px] lg:w-[500px] lg:mr-8">
                {/* Layer 1: Gray Border (Bottom) */}
                <div className="absolute inset-0 border-2 border-nord-3 -translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-6 z-0"></div>
                
                {/* Layer 2: Image Container (Middle) */}
                <div className="relative z-10 w-full h-full border border-nord-4 bg-nord-0/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    <img 
                        src={heroImage} 
                        alt="Abstract Data Center" 
                        className="w-full h-full object-cover filter contrast-125 brightness-75 grayscale mix-blend-multiply opacity-80"
                    />
                </div>

                {/* Layer 3: Cyan Border (Top) */}
                <div className="absolute inset-0 border-2 border-nord-8 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 z-20 pointer-events-none"></div>
            </div>
          </div>

        </div>

      </div>
      
    </section>
  );
};
