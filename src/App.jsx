// src/App.jsx

import React from 'react';
import Card from './Day1/Card';
import './App.css';

import image1 from '../src/Day1/Media/img1.png';
import image2 from '../src/Day1/Media/img2.jpg';
import image3 from '../src/Day1/media/img3.jpg';

const App = () => {
  return (
    <div>
      <h1>My Card List</h1>

      {/* <img src={image1} alt="Image 1" />
      <img src={image2} alt="Image 2" />
      <img src={image3} alt="Image 3" /> */}

      <Card 
        title="Card 1" 
        description="This is the description for Card 1." 
        image={image1} 
      />
      <Card 
        title="Card 2" 
        description="This is the description for Card 2." 
        image={image2} 
      />
      <Card 
        title="Card 3" 
        description="This is the description for Card 3." 
        image={image3} 
      />
    </div>
  );
};

export default App;