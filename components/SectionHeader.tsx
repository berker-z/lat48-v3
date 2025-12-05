import React from 'react';

interface Props {
  title: string;
  id?: string;
}

export const SectionHeader: React.FC<Props> = ({ title, id }) => {
  return (
    <div id={id} className="w-full py-12">
      <div className="flex items-end gap-6">
         <h2 className="type-h1">
          {title}
        </h2>
        <div className="flex-grow border-b border-nord-3 mb-3 md:mb-5"></div>
      </div>
    </div>
  );
};