import React from "react";
import Image from "next/image";

import images from "../assets";

import { Button, Navbar } from "../components/index.js";

const admin = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className='flex flexCenterStart w-full z-10 p-4 flex-row border-b bg-nft-dark border-nft-black-1 h-[49.2rem]'>
        <div className='w-1/2 p-10 flexCenterStart h-2/3'>
          <div className='flex flex-col flexCenter w-2/3 h-full p-10 investedAmount rounded-2xl m-20 drop-shadow-xl'>
            <div className=''>
              <h1 className='text-4xl font-mono font-normal drop-shadow-md '>
                Total Pool Balance:
              </h1>
            </div>
            <div className='text-6xl font-mono font-extrabold pt-5 drop-shadow-md'>
              $100,000
            </div>
          </div>
        </div>

        <div className='w-1/2 p-10 flexCenter flex-col h-full'>
          <div className='flex flexCenter flex-col w-full'>
            <div className='flexBetween flex-col md:w-full minlg:w-557 w-357 mt-6 bg-nft-black-2 border-nft-black-2  rounded-md'>
              <input
                type='string'
                placeholder='Enter Address'
                className='m-5 h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none'
              />
              <input
                type='number'
                placeholder='Enter Amount (ETH)'
                className='m-5 h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none'
                min='0'
              />
            </div>
            <div className='flexEnd m-5'>
              <Button
                btnName='Send'
                btnType='primary'
                classStyles='rounded-md m-2'
                handleClick={() => {}}
              />
            </div>
            <div className='flexBetween flex-col md:w-full minlg:w-557 w-357 mt-6 bg-nft-black-2 border-nft-black-2  rounded-md'>
              <input
                type='number'
                placeholder='Enter Loan Id'
                className='m-5 h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none'
              />
            </div>
            <div className='flexEnd m-5'>
              <Button
                btnName='Settle'
                btnType='primary'
                classStyles='rounded-md m-2'
                handleClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default admin;
