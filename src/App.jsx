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