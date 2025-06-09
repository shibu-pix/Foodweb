import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import FudVideo from '../../assets/fudieeee.mp4';

const FoodVideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full h-[350px] bg-white overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={FudVideo} // replace with your food video URL
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg bg-opacity-40 flex items-center justify-center cursor-pointer"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="text-black" size={60} />
        ) : (
          <Play className="text-black" size={60} />
        )}
      </div>
    </section>
  );
};

export default FoodVideoSection;
