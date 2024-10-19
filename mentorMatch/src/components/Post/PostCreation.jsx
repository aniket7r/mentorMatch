import React from 'react';

const PostCreation = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <button className="ml-4 p-2 w-full bg-gray-100 text-gray-600 rounded-full text-left">
          Start a post...
        </button>
      </div>
      <div className="flex justify-around border-t pt-2">
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <svg
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7h18M3 12h18m-9 5h9"
            />
          </svg>
          Media
        </button>
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <svg
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7h18M3 12h18m-9 5h9"
            />
          </svg>
          Event
        </button>
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <svg
            className="w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7h18M3 12h18m-9 5h9"
            />
          </svg>
          Write Article
        </button>
      </div>
    </div>
  );
};

export default PostCreation;
