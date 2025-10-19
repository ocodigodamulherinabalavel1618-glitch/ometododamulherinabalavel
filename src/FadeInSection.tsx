
import React from 'react';
import { useFadeIn } from './useFadeIn';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className, style }) => {
  const { ref, isVisible } = useFadeIn<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity ease-in ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}

      style={style}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
