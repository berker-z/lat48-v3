import React from 'react';
import { TEAM } from '../constants';
import { SectionHeader } from './SectionHeader';

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
);

export const Team: React.FC = () => {
  return (
    <section className="px-4 pb-12" id="team">
      <SectionHeader title="Core Team" />

      {/* Symmetrical Grid Container */}
      <div className="mt-6 border border-nord-3 bg-nord-0/80 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {TEAM.map((member, index) => (
            <div 
              key={member.id} 
              className={`
                group relative flex flex-col p-8 md:p-12
                hover:bg-nord-1 transition-colors duration-300
                ${index === 0 ? 'md:border-r border-nord-3 border-b md:border-b-0' : ''}
              `}
            >
                {/* Image - Smaller (75%), Centered (mx-auto), 4:3 Aspect Ratio */}
                <div className="w-[75%] mx-auto aspect-[4/3] border border-nord-3 mb-8 overflow-hidden relative">
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-nord-8 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
                    <img 
                        src={member.imageUrl} 
                        alt={member.role} 
                        className="w-full h-full object-cover grayscale contrast-125" 
                    />
                </div>

                {/* Identity Block */}
                <div className="mb-6 pb-6 border-b border-nord-3">
                    <h3 className="type-h2 mb-2 group-hover:text-nord-8 transition-colors">
                        {member.role}
                    </h3>
                    <span className="type-nav text-nord-8">
                        {member.handle}
                    </span>
                </div>

                {/* Bio Block */}
                <div className="flex-grow">
                     <p className="type-body opacity-90">
                        {member.bio.join(' ')} 
                    </p>
                </div>

                {/* Socials - Aligned Bottom */}
                <div className="flex gap-6 mt-8 pt-4">
                    {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-nord-4 hover:text-nord-8 transition-colors">
                            <LinkedInIcon className="w-6 h-6" />
                        </a>
                    )}
                    {member.telegram && (
                        <a href={member.telegram} target="_blank" rel="noopener noreferrer" className="text-nord-4 hover:text-nord-8 transition-colors">
                            <TelegramIcon className="w-6 h-6" />
                        </a>
                    )}
                    {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-nord-4 hover:text-nord-8 transition-colors">
                            <TwitterIcon className="w-6 h-6" />
                        </a>
                    )}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};