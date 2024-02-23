import Image from "next/image";
import React from "react";
import { FaClock, FaStar } from "react-icons/fa";
import { TiArrowBack } from "react-icons/ti";
export default function ProductImages({ data, emblaApi, emblaRef, setSnap }) {
  return (
    <div
      ref={emblaRef}
      className=" embla h-full w-full lg:w-[80%] overflow-x-hidden flex-shrink-0   "
    >
      <div className="embla__container flex flex-shrink-0 flex-row space-x-6 w-full h-full ">
        {data.items.map((el) => {
          return (
            <div
              key={el.key}
              className=" embla_slide flex flex-col cursor-pointer  flex-shrink-0  w-44 rounded-md "
            >
              <div className=" w-full h-40 bg-slate-200 rounded-md relative">
                <Image
                  src={el.publication.media[0].uri}
                  alt={el.publication.productName}
                  fill
                  className=" object-cover select-none rounded-md h-full w-full"
                />
                <span className="  rounded-md  bg-[#009e8a] px-1 py-1 flex flex-row items-center  text-white text-xs bottom-1 absolute left-1 ">
                  <TiArrowBack className=" " />
                  <span>{el.publication.brandName}</span>
                </span>
              </div>
              <div className=" py-2 flex flex-col space-y-1 ">
                <h2 className=" line-clamp-2 leading-tight text-gray-800">
                  {el.publication.productName}
                </h2>
                <div className=" flex flex-row  items-baseline">
                  {el.publication.discountRate ? (
                    <span className=" text-red-500 font-semibold text-lg">
                      {el.publication.priceInfo.discountRate}%
                    </span>
                  ) : null}
                  <span className=" font-semibold text-lg">
                    {el.publication.discountRate
                      ? el.publication.priceInfo.discountPrice?.toLocaleString(
                          "en-US"
                        )
                      : el.publication.priceInfo.price?.toLocaleString("en-US")}
                  </span>
                  <span className=" text-xs ">sm</span>
                </div>
                <div className=" text-sm flex flex-row items-center text-gray-600 space-x-1">
                  <FaStar className="  h-3 w-3" />
                  <span className="  font-semibold">
                    {el.publication.rating}
                  </span>
                </div>
                <div className=" items-start w-auto flex">
                  <div className=" border w-auto border-gray-300 flex uppercase flex-row items-center px-2 py-1 text-xs font-medium text-gray-500 rounded space-x-2">
                    <FaClock className="  text-primary" />
                    <span>Lucky deal</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
