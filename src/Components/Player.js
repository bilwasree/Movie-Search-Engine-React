// src/components/MusicPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import Controls from './Controler';

const MusicPlayer = ({ song, onPrevSong, onNextSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [song]);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  if (!song) return <div>Loading...</div>;

  return (
    <div className="music-player">
    <div className='te'>
      <h1>{song.name}</h1>
      <p>{song.artist}</p>
      </div>
      <img src={`https://cms.samespace.com/assets/${song.cover}`}/>
      <audio ref={audioRef}>
        <source src={song.url} type="audio/mpeg" />
      </audio>
      <Controls
        audioRef={audioRef}
        isPlaying={isPlaying}
        onPlayPauseClick={handlePlayPauseClick}
        onPrevClick={onPrevSong}
        onNextClick={onNextSong}
      />
    </div>
  );
};

export default MusicPlayer;
