import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-nord-4 bg-nord-1 py-12 px-4 relative z-20" id="footer">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-32">
        
        {/* Brand & License */}
        <div className="flex flex-col gap-6 max-w-md">
          <div>
            <h2 className="type-h2">Lat48 Ventures</h2>
            <p className="type-body opacity-70 mt-2 !text-base">
              Lat48 is a small group of operators who build, guide, and steady early ventures in crypto.
            </p>
          </div>
          
          <div className="type-meta text-nord-3 mt-auto pt-4">
              <span>LAT48 © {new Date().getFullYear()} // </span>
              <a 
                href="https://creativecommons.org/licenses/by-sa/4.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-nord-4 transition-colors border-b border-nord-3 hover:border-nord-4"
              >
                share alike.
              </a>
          </div>
        </div>

        {/* Links Section - Shifted Left adjacent to Brand */}
        <div className="flex flex-row gap-16 md:gap-24">
            <div>
                <h4 className="type-label text-nord-3 text-sm mb-4">Connect</h4>
                <ul className="space-y-3">
                    <li><a href="mailto:hello@lat48.sys" className="type-nav block !text-base">Email</a></li>
                    <li><a href="#" className="type-nav block !text-base">Calendly</a></li>
                    <li><a href="#" className="type-nav block !text-base">Telegram</a></li>
                </ul>
            </div>
            <div>
                <h4 className="type-label text-nord-3 text-sm mb-4">Network</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="type-nav block !text-base">Twitter / X</a></li>
                    <li><a href="#" className="type-nav block !text-base">LinkedIn</a></li>
                </ul>
            </div>
        </div>

      </div>
    </footer>
  );
};