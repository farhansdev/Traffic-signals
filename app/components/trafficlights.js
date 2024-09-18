"use client"

import React, { useState, useEffect } from 'react';

const TrafficLights = () => {
    
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prevLight) => {
        if (prevLight === 'red') return 'yellow';
        if (prevLight === 'yellow') return 'green';
        return 'red';
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-black w-20 h-60 p-4 rounded-lg flex flex-col justify-around">
        <div
          className={`w-12 h-12 rounded-full ${
            activeLight === 'red' ? 'bg-red-600' : 'bg-red-100'
          }`}
        ></div>

        <div
          className={`w-12 h-12 rounded-full ${
            activeLight === 'yellow' ? 'bg-yellow-500' : 'bg-yellow-100'
          }`}
        ></div>

        <div
          className={`w-12 h-12 rounded-full ${
            activeLight === 'green' ? 'bg-green-600' : 'bg-green-100'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLights;
