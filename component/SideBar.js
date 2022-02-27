/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const imageData = [
  {
    url: "https://media.istockphoto.com/photos/microphone-on-the-stage-with-blurry-crowd-picture-id1313482026?b=1&k=20&m=1313482026&s=170667a&w=0&h=TvwoYkMl5NJXv1rPDcLQe_zae5ZN4UdcwzAfnCUa5iw=",
  },
  {
    url: "https://media.istockphoto.com/photos/rear-view-of-people-with-placards-and-posters-on-global-strike-for-picture-id1181043820?b=1&k=20&m=1181043820&s=170667a&w=0&h=ocLcC3_eqxzGlSjYlc3oUgV6_h2ICe4ra0fP7TRj4_4=",
  },
  {
    url: "https://media.istockphoto.com/photos/microphone-on-the-stage-with-blurry-crowd-picture-id1313482026?b=1&k=20&m=1313482026&s=170667a&w=0&h=TvwoYkMl5NJXv1rPDcLQe_zae5ZN4UdcwzAfnCUa5iw=",
  },
  {
    url: "https://media.istockphoto.com/photos/microphone-on-the-stage-with-blurry-crowd-picture-id1313482026?b=1&k=20&m=1313482026&s=170667a&w=0&h=TvwoYkMl5NJXv1rPDcLQe_zae5ZN4UdcwzAfnCUa5iw=",
  },
  {
    url: "https://media.istockphoto.com/photos/microphone-on-the-stage-with-blurry-crowd-picture-id1313482026?b=1&k=20&m=1313482026&s=170667a&w=0&h=TvwoYkMl5NJXv1rPDcLQe_zae5ZN4UdcwzAfnCUa5iw=",
  },
  {
    url: "https://media.istockphoto.com/photos/microphone-on-the-stage-with-blurry-crowd-picture-id1313482026?b=1&k=20&m=1313482026&s=170667a&w=0&h=TvwoYkMl5NJXv1rPDcLQe_zae5ZN4UdcwzAfnCUa5iw=",
  },
  {
    url: "https://media.istockphoto.com/photos/microphone-on-the-stage-with-blurry-crowd-picture-id1313482026?b=1&k=20&m=1313482026&s=170667a&w=0&h=TvwoYkMl5NJXv1rPDcLQe_zae5ZN4UdcwzAfnCUa5iw=",
  },
  {
    url: "https://media.istockphoto.com/photos/microphone-on-the-stage-with-blurry-crowd-picture-id1313482026?b=1&k=20&m=1313482026&s=170667a&w=0&h=TvwoYkMl5NJXv1rPDcLQe_zae5ZN4UdcwzAfnCUa5iw=",
  },
  {
    url: "https://media.istockphoto.com/photos/microphone-on-the-stage-with-blurry-crowd-picture-id1313482026?b=1&k=20&m=1313482026&s=170667a&w=0&h=TvwoYkMl5NJXv1rPDcLQe_zae5ZN4UdcwzAfnCUa5iw=",
  },
  // {url: 'https://media.istockphoto.com/photos/microphone-on-the-stage-with-blurry-crowd-picture-id1313482026?b=1&k=20&m=1313482026&s=170667a&w=0&h=TvwoYkMl5NJXv1rPDcLQe_zae5ZN4UdcwzAfnCUa5iw='},
];
const SideBar = ({ setSidebar, handleOnOpen, handleClick }) => {
  const [open, setOpen] = useState(true);
  const [seeMore, setSeeMore] = useState(4);
  const [active, setActive] = useState('');

  const toggleMenu = ({ isOpen }) => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    isOpen
      ? menuWrap.setAttribute("aria-hidden", false)
      : menuWrap.setAttribute("aria-hidden", true);
  };

  const sowMoreItems = () => {
    setSeeMore((preItem) => {
      preItem + 4;
      // if(preItem === undefined){

      // }
    });
  };

  useEffect(() => {
    if (document.documentElement.offsetWidth <= 640) {
      setOpen(false);
    }
  }, []);
  return (
    <>
      {document.documentElement.offsetWidth >= 640 ? (
        <button
          className={`${
            open && "hidden"
          } absolute z-30 flex items-center cursor-pointer right-0 inset-y-0`}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="53"
            height="87"
            viewBox="0 0 53 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_168_180)">
              <g filter="url(#filter0_d_168_180)">
                <circle
                  cx="53"
                  cy="42"
                  r="36"
                  transform="rotate(90 53 42)"
                  fill="#151522"
                  fillOpacity="0.5"
                />
              </g>
              <path
                d="M43 36L37 42L43 48"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_168_180"
                x="-3"
                y="-10"
                width="112"
                height="112"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_168_180"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_168_180"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_168_180">
                <rect width="53" height="87" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      ) : (
        <button
          className={`${
            open && "hidden"
          } fixed z-30 flex items-center cursor-pointer right-10 top-10`}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="32"
              height="32"
              rx="4"
              fill="#151522"
              fillOpacity="0.5"
            />
            <path
              d="M14 7H7V14H14V7Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 7H18V14H25V7Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 18H18V25H25V18Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 18H7V25H14V18Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <>
        <div
          className={`${
            open ? "translate-x-0" : "translate-x-full"
          } md:top-24 top-0 bottom-0 right-0 fixed bg-sidebar w-32 md:w-[18vw] lg:w-[12vw] md:h-4/5 h-full z-40 ease-in-out duration-200 rounded-l-lg }`}
        >
          <div>
            <div className="mx-auto lg:px-10 lg:py-5 md:px-5 px-8 py-3 md:py-2">
              <img
                src="https://i.ibb.co/pZGLfmF/shanta-logo.png"
                alt="Logo"
                className="w-full"
              />
            </div>
            <div className="absolute lg:h-4/5 h-4/5 overflow-auto lg:pb-2 md:pb-6 w-11/12 mt-1">
              <div>
                <div className="mb-2">
                  <div className="bg-subTile lg:w-3/4 md:w-4/5 w-3/4 rounded-tr-lg mb-1 md:h-8">
                    <h2 className="text-white md:text-xl font-bold lg:px-2 px-2">
                      Cushion
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 lg:gap-2 gap-2 lg:px-4 lg:py-3 px-3 py-2"> 
                    {imageData.slice(0, seeMore).map((item, i) => {
                      return (
                        <>
                          <div
                            key={i}
                            onClick={()=> {handleClick, setActive(item.url)}}
                            className={`${active === item.url ? 'border-white' : 'border-borderColor '} h-14 lg:h-18 xl:h-20 border-4 xl:border-8 lg:border-4 rounded cursor-pointer`}
                          >
                            <img src={item.url} alt="" className="w-full h-full" />
                          </div>
                        </>
                      );
                    })}
                  </div>
                  {seeMore === undefined ? (
                    ""
                  ) : (
                    <p
                      onClick={sowMoreItems}
                      className="text-sm font-bold text-white text-center mb-2 cursor-pointer"
                    >
                      See more
                    </p>
                  )}
                </div>
                <div className="mb-2">
                  <div className="bg-subTile lg:w-3/4 md:w-4/5 w-3/4  rounded-tr-lg mb-1 md:h-8">
                    <h2 className="text-white md:text-xl font-bold  lg:px-2  px-2">
                      Shell
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 lg:gap-2 gap-2 lg:px-4 lg:py-3 px-3 py-2">
                    {imageData.slice(0, seeMore).map((item, i) => {
                      return (
                        <>
                        <div
                          key={i}
                          onClick={()=> {handleClick, setActive(item.url)}}
                          className={`${active === item.url ? 'border-white' : 'border-borderColor '} h-14 lg:h-18 xl:h-20 border-4 xl:border-8 lg:border-4 rounded cursor-pointer`}
                        >
                          <img src={item.url} alt="" className="w-full h-full" />
                        </div>
                      </>
                      );
                    })}
                  </div>
                </div>
                <div className="mb-2">
                  <div className="bg-subTile lg:w-3/4 md:w-4/5 w-3/4  rounded-tr-lg mb-1 md:h-8">
                    <h2 className="text-white md:text-xl font-bold  lg:px-2 px-2">
                      Stand
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 lg:gap-2 gap-2 lg:px-4 lg:py-3 px-3 py-2">
                    {imageData.slice(0, seeMore).map((item, i) => {
                      return (
                        <>
                          <div
                            key={i}
                            onClick={()=> {handleClick, setActive(item.url)}}
                            className={`${active === item.url ? 'border-white' : 'border-borderColor '} h-14 lg:h-18 xl:h-20 border-4 xl:border-8 lg:border-4 rounded cursor-pointer`}
                          >
                            <img src={item.url} alt="" className="w-full h-full" />
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="py-2.5 bg-zinc-400 absolute left-0 bottom-0 w-full rounded-bl-lg "
            >
              <div className="flex justify-center align-middle">
                <span className="mr-2 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33325 11.6666H8.33325V16.6666"
                      stroke="#C4C4C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.6667 8.33337H11.6667V3.33337"
                      stroke="#C4C4C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6667 8.33333L17.5001 2.5"
                      stroke="#C4C4C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 17.5L8.33333 11.6666"
                      stroke="#C4C4C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-base font-normal text-white">Close</p>
              </div>
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default SideBar;

