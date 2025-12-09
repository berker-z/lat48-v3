import React from 'react';
import { PARTNERS, PORTFOLIO_EVENTS } from '../constants';
import { SectionHeader } from './SectionHeader';

export const Portfolio: React.FC = () => {
  return (
    <section className="section" id="portfolio">
      <SectionHeader title="Portfolio" />

      <div className="mt-2 flex flex-col gap-16">
        <PartnersSection />
        <EventsSection />
      </div>
    </section>
  );
};

// Exportable: can be reused on the main page without the rest of the portfolio
export const PartnersSection: React.FC = () => (
  <div className="card border-nord-3">
    <div className="flex items-center justify-between p-6 md:p-8 border-b border-nord-3">
      <div className="flex flex-col gap-2">
        <p className="type-meta text-nord-3">Partners</p>
        <h3 className="type-h2 mb-0">We Work With</h3>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-nord-3">
      {PARTNERS.map((partner) => (
        <a
          key={partner.name}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center p-6 md:p-8 border-r border-b border-nord-3 hover:bg-nord-1 transition-colors duration-200"
        >
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="w-32 h-16 object-contain opacity-80 group-hover:opacity-100"
          />
        </a>
      ))}
    </div>
  </div>
);

// Exportable: standalone events grid for reuse
export const EventsSection: React.FC = () => (
  <div className="card border-nord-3">
    <div className="flex items-center justify-between p-6 md:p-8 border-b border-nord-3">
      <div className="flex flex-col gap-2">
        <p className="type-meta text-nord-3">Events</p>
        <h3 className="type-h2 mb-0">Field Notes</h3>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3">
      {PORTFOLIO_EVENTS.map((event, index) => (
        <a
          key={event.title}
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex flex-col p-8 md:p-10 hover:bg-nord-1 transition-colors duration-300 border-nord-3 ${index < PORTFOLIO_EVENTS.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}`}
        >
          <div className="mb-6 pb-6 border-b border-nord-3">
            <h4 className="type-h3 mb-2 group-hover:text-nord-8 transition-colors">
              {event.title}
            </h4>
            <span className="type-nav text-nord-8">{event.location}</span>
          </div>

          <div className="w-full aspect-[4/3] border border-nord-3 overflow-hidden relative flex-1">
            <div className="absolute inset-0 bg-nord-8 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover grayscale contrast-125"
            />
          </div>
        </a>
      ))}
    </div>
  </div>
);
