import React from 'react';
import { mesDataimg } from '../lib/db';
import { Button } from './Button';

function DashMessage() {
  return (
    <div className="w-[331px] mx-auto bg-[#F4F4F5] rounded-[12px] overflow-hidden">
      <div className="w-full h-[63px] bg-orange px-[15px] py-[20px]">
        <h2 className="text-[18px] font-bold text-white flex items-center justify-start">
          Chat with Cypher
        </h2>
      </div>
      <div className="flex justify-center gap-[10px] mt-[15px] flex-col px-4 pb-3">
        {/* Corrected Text Message Boxes */}
        <div className="w-[213px] py-[15px] px-[13px] bg-[#3F3F46] text-white rounded-[7px] mt-[10px] ml-auto">
          <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="w-[213px] py-[15px] px-[13px] text-[#71717A] rounded-[7px] mt-[10px] border-[1px] border-[#E4E4E7]">
          <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="w-[213px] py-[15px] px-[13px] bg-[#3F3F46] text-white rounded-[7px] mt-[10px] ml-auto">
          <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Input Field */}
        <div className="w-full px-2 py-[12px] border-[1px] border-[#E5E7EB] rounded-[6px]">
          <input
            className="w-full p-2 border-none outline-none"
            type="text"
            placeholder="Enter your question..."
          />
        </div>

        {/* Image and Send Button */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-2">
            {mesDataimg.map((data, i) => (
              <img key={i} src={data.img} alt={`Image ${i}`} />
            ))}
          </div>
          <Button className="text-white py-[8px] px-[25px] rounded-full cursor-pointer">Send</Button>
        </div>
      </div>
    </div>
  );
}

export default DashMessage;
