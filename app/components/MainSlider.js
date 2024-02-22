"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

function MainSlider({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });

  useEffect(() => {
    if (emblaApi) {
      //   console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative flex h-full  w-full  items-center">
      <div
        className="embla__viewport  flex h-full w-full flex-row overflow-hidden  bg-white"
        ref={emblaRef}
      >
        <div className=" embla__container text-white h-80 relative w-full  flex flex-row space-x-2 lg:space-x-0">
          {images
            .sort((a, b) => a.sort - b.sort)
            .map((el) => {
              return (
                <div
                  className="embla__slide relative w-full lg:w-3/4 flex-shrink-0 items-center flex  justify-between"
                  key={el.mainBannerId}
                >
                  <Image
                    className="  w-full object-cover  items-center flex  justify-between lg:px-6"
                    src={el.pcImageUrl}
                    key={el.mainBannerId}
                    fill
                    title={el.title}
                    alt={el.title}
                  />
                </div>
              );
            })}
        </div>
        <div className=" flex flex-row justify-between px-5 lg:px-60 w-full h-full absolute z-10 items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollPrev();
            }}
            className=" bg-gray-400 rounded-full p-3 cursor-pointer "
          >
            <IoIosArrowBack className=" text-gray-100 h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              scrollNext();
            }}
            className=" bg-gray-400 rounded-full p-3 cursor-pointer "
          >
            <IoIosArrowForward className=" text-gray-100 h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
