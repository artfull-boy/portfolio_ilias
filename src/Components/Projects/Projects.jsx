import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";


import "./Projects.css";

// import required modules
import {Scrollbar, Autoplay } from "swiper/modules";
import jsonData from "../../infos/projects.json";

import upright from '../../images/up right.png'
import lock from '../../images/lock.png'


export default function Projects() {


  return (
    <>
      <div className="projects container">
        <p className="font-bold text-xl">What I have Been Working On</p>
        <Swiper
          centeredSlides={true}
          grabCursor={true}
          className="mySwiper "
          loop={true}
          modules={[Autoplay, Scrollbar]}
          spaceBetween={40}
          slidesPerView={"auto"}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {jsonData.map((project) => (
            <a rel="noreferrer" key={project.link} href={project.link} target="_blank">
              <SwiperSlide key={project.description}>
                <img
                  src={`${import.meta.env.VITE_PUBLIC_URL}/${project.bgIMG}`}
                  className="absolute left-0 bottom-0 w-full h-full z-[-1] object-cover"
                  alt="project Mockups"
                ></img>
                <div className="flex flex-col justify-start items-center gap-4">
                  <img src={`${import.meta.env.VITE_PUBLIC_URL}/${project.logo}`} width={60} height={60} className="min-w-[100px] h-[60px] object-contain" alt="project logo"></img>
                  <div className="flex flex-col gap-3 justify-center content-center">
                    <p className="text-3xl font-semibold text-white">
                      {project.name}
                    </p>
                    <div className="flex gap-2 justify-center">
                      {project.domain.map((proj,index) => (
                        <div key={index}
                          className={`${
                            proj === "Confidential"
                              ? "bg-[#FB0000] text-[#ffffff]"
                              : "bg-[#ffffff] text-[#0000ff]"
                          }   font-semibold py-[7px] px-3 rounded-[30px] text-[16px]`}
                        >
                          {proj}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="font-regular text-xl text-white px-2">
                    {project.description}
                  </p>
                </div>
                {
                    project.link !== "" ?
                    <a rel="noreferrer" href={project.link} target="_blank">
                <div
                  className=" animation flex justify-center items-center w-[50px] h-[50px] bg-[#0000ff] absolute right-7 bottom-6 rounded-[50%] overflow-hidden cursor-pointer"
                >
                    <img src={upright} className="animated cursor-pointer" width={15} alt="cursor"></img>
                </div>
                </a> :
                    <div
                    className=" animation flex justify-center items-center w-[50px] h-[50px] bg-[#FE113A] absolute right-7 bottom-6 rounded-[50%] overflow-hidden cursor-not-allowed"
                  >
                      <img src={lock} className="cursor-not-allowed" width={18} alt="cursor"></img>
                  </div>
                }
                
              </SwiperSlide>
            </a>
          ))}
        </Swiper>
      </div>
    </>
  );
}
