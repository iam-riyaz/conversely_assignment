import React from 'react';

const EmptyScreen = ({hnadleIsCreating}) => {
  return (
    <div className="flex flex-col items-center justify-center my-4 bg-gray-100 w-full">
      <div className="bg-white shadow-lg rounded-lg p-8  text-center w-full">
       <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Data Available</h2>
        <p className="text-gray-500">{ "There's no blog here right now. Create a blog now"}</p>
        <button onClick={hnadleIsCreating} className='m-3 text-xl font-semibold text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-lg'>
        Create New Blog
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default EmptyScreen;
