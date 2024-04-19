import React, { useState } from 'react';
import './Tracks.css';
import { Card, CardContent, CardActions, Typography, Stack, Slider } from '@mui/material';
import testCover from '../../imgs/testCover.jpg';
import playButton from '../../imgs/play-button.png';
import pauseButton from '../../imgs/pause.png';

const Tracks = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(playButton);
  const [volume, setVolume] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const clicked = () => {
    setIsClicked(button => button === playButton ? pauseButton : playButton)
  }

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div className="tracksContainer">
      <div className="coverImageContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={testCover} alt="Cover" className="coverImage" />
        <Stack onClick={clicked}>
          {isHovered && (
            <img src={isClicked} alt="Play" className="playButton" />
          )}
        </Stack>
      </div>

      <Card className="trackCard" sx={{ borderRadius: '5px', backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px' }}>
        <CardContent className="details" sx={{ padding: '0' }}>
          <Stack className="trackInfo" flexDirection="column" textAlign="left">
            <Typography variant="h4">TRACK NAME</Typography>
            <Typography variant="subtitle1">AUTHOR</Typography>
          </Stack>
        </CardContent>
        <CardActions className="controls">
          <Slider value={volume} onChange={handleVolumeChange} aria-labelledby="continuous-slider" />
        </CardActions>
      </Card>
    </div>
  );
}

export default Tracks;
