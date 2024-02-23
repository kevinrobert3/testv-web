"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { FaClock, FaStar } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import useEmblaCarousel from "embla-carousel-react";
import { isMobile } from "react-device-detect";
import ProductImages from "./ProductImages";

function CrossImageTwo({ nav, data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    // containScroll: "trimSnaps",
    slidesToScroll: isMobile ? 2 : 3,
  });
  useEffect(() => {
    if (emblaApi) {
      // console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [snap, setSnap] = useState(false);

  return (
    <div className="  embla px-5  lg:px-60 w-full   flex  flex-col lg:flex-row  lg:space-x-12 relative">
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
                setSnap(emblaApi.canScrollPrev());
                scrollPrev();
              }}
              className={
                "   cursor-pointer h-7 w-7 embla__prev " +
                (emblaApi?.canScrollPrev()
                  ? " text-gray-400"
                  : " text-gray-200")
              }
            />
            <IoIosArrowForward
              onClick={() => {
                setSnap(emblaApi.canScrollNext());
                scrollNext();
              }}
              className={
                "   cursor-pointer h-7 w-7 embla__next " +
                (emblaApi?.canScrollNext()
                  ? " text-gray-400"
                  : " text-gray-200")
              }
            />
          </div>
        ) : null}
      </div>
      <ProductImages
        data={data}
        emblaApi={emblaApi}
        emblaRef={emblaRef}
        setSnap={setSnap}
      />
    </div>
  );
}

export default CrossImageTwo;
