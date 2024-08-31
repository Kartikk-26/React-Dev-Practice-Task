//( DAY 1 APP.JSX )

// src/App.jsx

import React from 'react';
import Button from './Button'
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

// ( DAY 2 APP.JSX )


import React from 'react';
import MyData from './Day2/MyData'

function App() {
  const Array = [
    {
      productName : "Iphone 16",
      price : "$900",
      description : "This has the best Security"
    },

    {
      productName : "Samsung S13",
      price : "$800",
      description : "This has the best Camera"
    },

    {
      productName : "OnePlus",
      price : "$85",
      description : "This has the best UI/UX"
    }
  ]
  
  
  
  return (
    <div>
      <h1>Product List :</h1>
      {
        Array.map((value,index)=>(
          <MyData 
          key = {index}
          pname = {value.productName}
          price = {value.price}
          pdescription = {value.description}
          />
        ))
      }
    </div>
    
  )
}

export default App

// ( DAY 3 APP.JSX )

//Task 1 ( App.jsx for Greet.jsx )

import React from "react";
import Greet from "./Day3/Greet";

function App() {
  return (
    <div>
      <Greet name = "Kartik"/>
    </div>
  )
}

export default App
//Short cut ( rfce )


//Task 2 ( App.jsx for ProfileCard.jsx )

import React from "react";
import ProfileCard from "./Day3/ProfileCard";

function App() {
  const profiles = [
    {
      name: 'Kavya Paliwal ', age: '22', location:'Udaipur'
    },

    {
      name:'Kartik Jain', age: '20', location:'Udaipur'
    },

    {
      name: 'Angha Varangaonkar', age: '21', location:'Udaipur'
    }
  ]

return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {
        profiles.map((profile,index) =>(
          <ProfileCard
          key = {index}
          name = {profile.name}
          age = {profile.age}
          location = {profile.location}
          />
        ))}
    </div>
  )
}

export default App

