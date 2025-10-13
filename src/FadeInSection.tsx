
import React, { useRef } from 'react';
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
      className={`${className} transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
