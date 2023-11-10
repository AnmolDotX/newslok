import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white backdrop-blur-sm backdrop-filter bg-opacity-80 p-8 rounded-xl shadow-2xl drop-shadow-2xl flex flex-col justify-center items-center gap-3 shadow-red-500">
        <h2 className="text-3xl text-red-500 font-bold tracking-wider mb-2">Oops, you are on the wrong page!</h2>
        <p className="text-gray-600">You need to go to the main screen.</p>
        <Link to="/" className='px-3 py-1 rounded bg-green-600 text-white active:bg-green-400 transition-all'>Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
