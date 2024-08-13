// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Player from './Player'; // Ensure the name matches the file
import SongList from './SongList';
import './main.css';
import Spotify from './Spotify';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://cms.samespace.com/items/songs')
      .then(response => {
        console.log('API Response:', response);
        const data = response.data.data || response.data;
        if (Array.isArray(data)) {
          setSongs(data);
          setCurrentSong(data[0]); // Set initial song if available
        } else {
          throw new Error('Invalid response format');
        }
      })
      .catch(error => {
        console.error('Error fetching songs:', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const selectSong = (song) => {
    setCurrentSong(song);
  };

  const handlePrevSong = () => {
    const currentIndex = songs.indexOf(currentSong);
    const prevIndex = (currentIndex === 0 ? songs.length - 1 : currentIndex - 1);
    setCurrentSong(songs[prevIndex]);
  };

  const handleNextSong = () => {
    const currentIndex = songs.indexOf(currentSong);
    const nextIndex = (currentIndex === songs.length - 1 ? 0 : currentIndex + 1);
    setCurrentSong(songs[nextIndex]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app">
    <Spotify/>
      <SongList songs={songs} onSelectSong={selectSong} />
      <Player
        song={currentSong}
        onPrevSong={handlePrevSong}
        onNextSong={handleNextSong}
      />
    </div>
  );
};

export default App;
