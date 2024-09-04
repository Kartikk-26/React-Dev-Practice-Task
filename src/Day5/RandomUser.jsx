import React, { useState, useEffect } from 'react';

const RandomUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        console.log(data); // Print data to the console
        setUser(data.results[0]); // Store the first user in the state
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to run the effect once on component mount

  // Check if user data is available before rendering
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-card">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>Gender : {user.gender}</p>
      <p>Age : {user.dob.age}</p>
      <p>Location : {`${user.location.city}, ${user.location.country}`}</p>
      <p>Email : {user.email}</p>
    </div>
  );
};

export default RandomUser;
