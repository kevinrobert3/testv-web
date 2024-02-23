import { AiOutlineMenu } from "react-icons/ai";
import { FaClock, FaSearch, FaStar } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiBookHeart, BiSolidBookHeart } from "react-icons/bi";
import { TiArrowBack } from "react-icons/ti";
import { FaCircleQuestion } from "react-icons/fa6";
import MainSlider from "./components/MainSlider";
import { notFound } from "next/navigation";
import Image from "next/image";
import CrossImages from "./components/CrossImages";
import CrossImageOne from "./components/CrossImages";
import CrossImageTwo from "./components/CrossImageTwo";

async function getImages() {
  const res = await fetch("https://api.testvalley.kr/main-banner/all");
  const shortcut = await fetch("https://api.testvalley.kr/main-shortcut/all");
  const coll = await fetch(
    "https://api.testvalley.kr/collections?prearrangedDiscount"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const r = await res.json();
  const short = await shortcut.json();
  const c = await coll.json();

  return [r, short, c];
}

export default async function Home({}) {
  const images = await getImages();

  let filters = images[2].items.filter(
    (item) => item.type === "SINGLE" && item.viewType === "TILE"
  );

  return (
    <div>
      <nav className=" h-16 lg:h-20  flex items-center  px-4  lg:px-56 flex-row justify-between border border-gray-100 border-b border-t-0 border-r-0 border-l-0">
        <div className=" text-primary flex flex-row items-center space-x-1 lg:space-x-4">
          <span className=" text-primary font-semibold text-base lg:text-xl">
            TestValley
          </span>
          <div className=" flex flex-row space-x-1 items-center">
            <AiOutlineMenu className=" cursor-pointer h-4 w-4" />
            <span className=" lg:flex hidden text-sm">Menu</span>
          </div>
        </div>
        <div className=" w-full  lg:w-72 lg:mx-0 mx-4  ">
          <div className=" flex  flex-row border border-gray-200 items-center px-4  rounded-md">
            <FaSearch className=" text-gray-500" />
            <input
              className=" w-full px-4  outline-none py-2 text-sm "
              placeholder="Search products"
            ></input>
          </div>
        </div>
        <div className=" flex flex-row space-x-2 divide-x">
          <CiDiscount1 className=" h-6 w-6 " />
          <span className=" lg:flex hidden pl-2">Discount</span>
        </div>
      </nav>
      <main className=" flex flex-col space-y-12 lg:space-y-16 ">
        <MainSlider images={images[0]} />
        <div className=" flex flex-row space-x-10  px-5 lg:px-60 h-32 overflow-x-auto snap-x">
          {images[1].map((el, index) => {
            return (
              <div
                key={el.mainShortcutId}
                className=" flex flex-col space-y-2 cursor-pointer  relative"
              >
                <div className=" relative items-center  h-14 w-14 justify-center  flex">
                  <Image
                    className="  object-cover"
                    src={el.imageUrl}
                    alt={el.title}
                    title={el.title}
                    fill
                  />
                  {/* {index === 0 ? (
                    <span className=" absolute -top-1 -right-2 bg-red-400 rounded-full px-2 py-0 text-[0.7rem] text-white">
                      Hot
                    </span>
                  ) : null} */}
                </div>
                <span className=" text-gray-700 text-sm">{el.title}</span>
              </div>
            );
          })}
        </div>

        <CrossImageOne nav={false} images={filters} />

        {images[2].items.map((el) => {
          return el.items.length > 0 ? (
            <CrossImageTwo key={el.id} nav={true} data={el} />
          ) : null;
        })}
      </main>
    </div>
  );
}
