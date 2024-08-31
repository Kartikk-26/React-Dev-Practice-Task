import React from 'react';

const ProfileCard = ({ name, age, location }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">Age: {age}</p>
      <p className="text-gray-700">Location: {location}</p>
    </div>
  );
};

export default ProfileCard;
