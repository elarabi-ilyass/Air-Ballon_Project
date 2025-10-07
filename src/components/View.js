
'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const View = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowThumbnail(true);
      } else {
        videoRef.current.play();
        setShowThumbnail(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleVideoEvents = {
    onTimeUpdate: handleTimeUpdate,
    onLoadedMetadata: handleTimeUpdate,
    onPlay: () => {
      setIsPlaying(true);
      setShowThumbnail(false);
    },
    onPause: () => {
      setIsPlaying(false);
      setShowThumbnail(true);
    },
    onClick: togglePlay
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto  "
    >
      <motion.h1 className="p-12 text-2xl text-center font-Poppins font-bold  sm:text-5xl ">
        Panoramic Views
      </motion.h1>
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-auto"
          {...handleVideoEvents}
        >
          <source src="/HomeImages/Ballons.mp4" type="video/mp4" />
          <source src="/HomeImages/Ballons.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {showThumbnail && (
          <ThumbnailOverlay onTogglePlay={togglePlay} />
        )}

        {!showThumbnail && (
          <PlayPauseOverlay 
            isPlaying={isPlaying} 
            onTogglePlay={togglePlay} 
          />
        )}
      </div>
    </motion.div>
  );
};

const ThumbnailOverlay = ({ onTogglePlay }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="absolute inset-0 cursor-pointer"
    onClick={onTogglePlay}
  >
    <Image
      src="/HomeImages/Background.png"
      alt="Video thumbnail"
      className="w-full h-full object-cover"
      fill
      priority
      quality={100}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
    />
    {/* <div className="absolute inset-0 flex items-center justify-center  bg-opacity-30">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white bg-opacity-90 rounded-full p-6"
      >
        <PlayIcon />
      </motion.div>
    </div> */}
  </motion.div>
);

const PlayPauseOverlay = ({ isPlaying, onTogglePlay }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onTogglePlay}
    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 opacity-0 hover:opacity-100"
  >
    <div className="bg-white bg-opacity-90 rounded-full p-4">
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </div>
  </motion.button>
);

const PlayIcon = () => (
  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const PauseIcon = () => (
  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
  </svg>
);

export default View;
