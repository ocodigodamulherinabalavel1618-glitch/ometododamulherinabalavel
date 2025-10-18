import React from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string; // For the video element
  wrapperClassName?: string; // For the outermost div
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className, wrapperClassName }) => {
  return (
    <div className={`mx-auto w-full max-w-xs md:max-w-4xl px-4 py-6 ${wrapperClassName || ''}`}>
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden" style={{
        background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)', // Golden gradient border
        boxShadow: '0 0 15px 3px rgba(212, 175, 55, 0.5)', // Golden glow
        padding: '0.25rem' // Reduced padding
      }}>
        <video
          src={src}
          controls
          preload="metadata"
          playsInline
          autoPlay
          loop
          muted
          className={`absolute inset-0 h-full w-full object-cover rounded-xl ${className || ''}`}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;