import React from 'react';
import { Link } from 'react-router-dom';

const Video = () => (
  <div className="container fill-window">
    <video id="bgvid" autoPlay loop>
      <source src="/public/Smoke_Dark_01_Videvo.mp4" type="video/mp4" />
      <source src="/public/Smoke_Dark_01_Videvo.webm" type="video/webm" />
    </video>
    <div className="text-overlay">This is text overlay</div>
  </div>
);

export default Video;
