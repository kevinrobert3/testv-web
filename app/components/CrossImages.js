"use client";
import Image from "next/image";
import React from "react";
import { FaClock, FaStar } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";

function CrossImageOne({ nav, images }) {
  //   console.log(images[0].items[0]);
  return (
    <div className=" px-5   lg:px-60   flex  flex-col lg:flex-row  lg:space-x-12 relative">
      <div className=" flex  flex-row lg:flex-col space-y-2 lg:max-w-44  min-w-44  justify-between pb-3 flex-shrink-0">
        <div className=" space-y-2 flex flex-col">
          <span className=" uppercase text-xl lg:text-2xl font-semibold text-gray-700">
            {images[0].title}
          </span>
          <span className=" uppercase text-gray-500 text-sm">
            {images[0].description}
          </span>
        </div>
        {nav ? (
          <div className=" flex flex-row space-x-5">
            <IoIosArrowBack className=" text-gray-200  cursor-not-allowed h-7 w-7" />
            <IoIosArrowForward className=" text-gray-400 cursor-pointer h-7 w-7" />
          </div>
        ) : null}
      </div>
      <div className=" flex flex-row space-x-4">
        {/* {images[0].items[0].map((el) => { */}

        {/* return ( */}
        <div className="flex flex-col   w-48 cursor-pointer rounded-md ">
          <div className=" w-full h-40 bg-slate-200 rounded-md relative">
            {/* <span>Image</span> */}
            <Image
              src={images[0].items[0].publication.media[0].uri}
              alt={images[0].items[0].publication.productName}
              fill
              className=" object-cover h-full w-full"
            />
            <span className=" bg-[#009e8a] rounded-md  px-1 py-1 flex flex-row items-center text-white text-xs bottom-1 absolute left-1 ">
              <TiArrowBack className=" " />
              <span>{images[0].items[0].publication.brandName}</span>
            </span>
          </div>
          <div className=" py-2 flex flex-col space-y-1 ">
            <h2 className=" line-clamp-2 leading-tight text-gray-800">
              {images[0].items[0].publication.productName}
            </h2>
            <div className=" flex flex-row  items-baseline">
              <span className=" text-red-500 font-semibold text-lg">
                {images[0].items[0].publication.priceInfo.discountRate}%
              </span>
              <span className=" font-semibold text-lg">
                {images[0].items[0].publication.priceInfo.discountPrice.toLocaleString(
                  "en-US"
                )}
              </span>
              <span className=" text-xs ">sm</span>
            </div>
            <div className=" text-sm flex flex-row items-center text-gray-600 space-x-1">
              <FaStar className="  h-3 w-3" />
              <span className="  font-semibold">
                {images[0].items[0].publication.rating}
              </span>
            </div>
            <div className=" items-start w-auto flex">
              <div className=" border w-auto border-gray-300 flex uppercase flex-row items-center px-2 py-1 text-xs font-medium text-gray-500 rounded space-x-2">
                <FaClock className="  text-primary" />
                <span> Lucky deal</span>
              </div>
            </div>
          </div>
        </div>
        {/* //   );
        // })} */}
      </div>
      {!nav ? (
        <div className=" flex flex-col items-end justify-end absolute right-0 bottom-0 flex-shrink-0">
          <div className=" rounded-full p-3  relative bg-primary">
            <FaCircleQuestion className=" h-7 w-7 text-white" />
            <span className=" h-3 w-3 bg-red-500  border-white  border-2 rounded-full absolute top-0 right-0"></span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CrossImageOne;
