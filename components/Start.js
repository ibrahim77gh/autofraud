import React from 'react';

const Start = () => {
  return (
    <>
      <div className="m-10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-[#132f8b] text-3xl text-center md:text-left md:pl-12">
          Consumer Action
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10">
        <div className="my-2 max-h-40 bg-[#e9e94e] hover:bg-[#FFFF00] hover:cursor-pointer w-full md:w-[72] p-4 h-24 rounded-md transform hover:scale-105" style={{ boxShadow: '4px 10px 20px rgba(0, 0, 0, 0.8)' }}>
  <div className="text-center text-2xl md:text-left p-auto mt-3 ml-3 hover:text-2xl">Free VIN Check</div>
</div>
<div className="my-2 max-h-40 bg-[#e9e94e] hover:bg-[#FFFF00] hover:cursor-pointer w-full md:w-[72] p-4 h-24 rounded-md transform hover:scale-105" style={{ boxShadow: '4px 10px 20px rgba(0, 0, 0, 0.8)' }}>
  <div className="text-center md:text-left">Talk To a lawyer</div>
  <div className="text-center md:text-left font-bold">(ABC) 000-2121EXAM</div>
</div>
<div className="my-2 max-h-40 bg-[#e9e94e] hover:bg-[#FFFF00] hover:cursor-pointer w-full md:w-[72] p-4 h-24 rounded-md transform hover:scale-105" style={{ boxShadow: '4px 10px 20px rgba(0, 0, 0, 0.8)' }}>
  <div className="text-center md:text-left">Click Here</div>
  <div className="text-center md:text-left font-bold">Free Consultation/ Evaluation</div>
</div>

        </div>
      </div>
    </>
  );
};

export default Start;
