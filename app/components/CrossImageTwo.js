"use client";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import { FaClock, FaStar } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import useEmblaCarousel from "embla-carousel-react";

function CrossImageTwo({ nav, data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
    slidesToScroll: 3,
  });
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="   px-5  lg:px-60 w-full   flex  flex-col lg:flex-row  lg:space-x-12 relative">
      <div className=" flex flex-row lg:flex-col space-y-2 lg:max-w-44  min-w-44 justify-between pb-3 flex-shrink-0">
        <div className=" space-y-2 flex flex-col">
          <span className=" uppercase text-xl lg:text-2xl font-semibold text-gray-700">
            {data.title}
          </span>
          <span className=" uppercase text-gray-500 text-sm">
            {data.description}
          </span>
        </div>
        {(nav && emblaApi?.canScrollNext()) || emblaApi?.canScrollPrev() ? (
          <div className=" flex flex-row space-x-5">
            <IoIosArrowBack
              onClick={() => {
                scrollPrev();
              }}
              className={
                "   cursor-pointer h-7 w-7 " +
                (emblaApi?.canScrollPrev()
                  ? " text-gray-400"
                  : " text-gray-200")
              }
            />
            <IoIosArrowForward
              onClick={() => {
                scrollNext();
              }}
              className={
                "   cursor-pointer h-7 w-7 " +
                (emblaApi?.canScrollNext()
                  ? " text-gray-400"
                  : " text-gray-200")
              }
            />
          </div>
        ) : null}
      </div>
      <ProductImages data={data} emblaApi={emblaApi} emblaRef={emblaRef} />
    </div>
  );
}

function ProductImages({ data, emblaApi, emblaRef }) {
  return (
    <div
      ref={emblaRef}
      className="embla   h-full w-full lg:w-[80%] overflow-x-hidden flex-shrink-0   "
    >
      <div className="embla__container flex flex-shrink-0 flex-row space-x-6 w-full h-full ">
        {data.items.map((el) => {
          return (
            <div
              key={el.key}
              className=" embla_slide flex flex-col cursor-pointer  flex-shrink-0  w-44 rounded-md "
            >
              <div className=" w-full h-40 bg-green-200 rounded-md relative">
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

export default CrossImageTwo;
