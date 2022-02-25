/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

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
  const [open, setOpen] = useState("");
  const [seeMore, setSeeMore] = useState(4);

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

  return (
    <div className="" id="outer-container">
      <Menu
        right
        isOpen={true}
        pageWrapId={"page-wrap"}
        width={"10%"}
        noOverlay
        // onStateChange={toggleMenu}
      >
        <div className="">
          <div className="mx-auto p-3">
            <img
              src="https://i.ibb.co/pZGLfmF/shanta-logo.png"
              alt="Logo"
              className="w-full mx-auto"
            />
          </div>
          <div className="h-3/5 overflow-y-auto fixed">
          <div className="flex flex-col pb-10 pt-1   mt-1">
            <div className="mb-2 mt-2">
              <div className="bg-subTile w-3/4 rounded-tr-lg mb-1">
                <h2 className="text-white md:text-lg font-bold pl-2">
                  Cushion
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-1 px-4 py-3">
                {imageData.slice(0, seeMore).map((item, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        onClick={handleClick}
                        className="border-4 border-borderColor rounded cursor-pointer"
                      >
                        <img src={item.url} alt="" className="w-full" />
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
            <div>
              <div className="bg-subTile w-3/4 rounded-tr-lg mb-1">
                <h2 className="text-white md:text-lg font-bold pl-2">Shell</h2>
              </div>
              <div className="grid grid-cols-2 gap-1 px-4 py-3">
                {imageData.map((item, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        className="border-4 border-borderColor rounded cursor-pointer"
                        onClick={handleClick}
                      >
                        <img src={item.url} alt="" className="w-full" />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="bg-subTile w-3/4 rounded-tr-lg mb-1">
                <h2 className="text-white md:text-lg font-bold pl-2">Stand</h2>
              </div>
              <div className="grid grid-cols-2 gap-1 px-4 py-3 ">
                {imageData.map((item, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        onClick={handleClick}
                        className="border-4 border-borderColor rounded cursor-pointer"
                      >
                        <img src={item.url} alt="" className="w-full" />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
          <button
            //   onClick={()=>closeMenu(false)}
            //   onClose={handleOnClose}
            onClick={() => setSidebar(false)}
            className="py-2 bg-zinc-400 absolute bottom-0 w-full rounded-bl-lg "
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
              <p className="text-base font-normal  text-white">Close</p>
            </div>
          </button>
        </div>
      </Menu>
    </div>
  );
};

export default SideBar;
