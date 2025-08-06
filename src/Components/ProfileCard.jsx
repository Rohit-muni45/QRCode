import React, { useEffect } from 'react';

const ProfileCard = () => {

   
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center">
        <img
          src="https://randomuser.me/api/portraits/men/88.jpg"
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h2 className="text-xl font-semibold text-gray-800">James Smith</h2>
        <p className="text-gray-500 text-sm mb-2">james@example.com</p>
        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
          Software Engineer
        </span>

        <div className="mt-4 flex justify-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Message
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
