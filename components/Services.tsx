import React from 'react';
import { SERVICES } from '../constants';
import { SectionHeader } from './SectionHeader';

export const Services: React.FC = () => {
  return (
    <section className="section" id="services">
      <SectionHeader title="Offerings" />
      
      <div className="mt-6 border-t border-l border-nord-3 card">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative p-8 flex flex-col h-full border-r border-b border-nord-3 hover:bg-nord-1 transition-colors duration-200"
            >
              <h3 className="type-h2 mb-0 md:mb-8">
                {service.title}
              </h3>

              <p className="type-body opacity-80 mt-auto hidden md:block group-hover:opacity-100 transition-opacity">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};