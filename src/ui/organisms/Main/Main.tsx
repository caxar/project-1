"use client";
import React from "react";
import Button from "@/ui/atoms/Button/Button";
import Image from "next/image";

const Main = () => {
  return (
    <div
      id="#top"
      className="header-content overflow-hidden mt-[30px] relative"
    >
      <div className="container mx-auto md:mx-auto ">
        <div className="content-wrapper flex justify-between items-center flex-wrap md:flex-nowrap">
          <div className="left flex flex-col my-[20px] px-4 md:px-0">
            <div className="left-top mb-[38px]">
              <div
                className="left-top_title font-bold text-[30px] mb-[10px]
            sm:text-[40px] lg:text-[60px] md:mb-[20px] lg:mb-[40px]"
              >
                Hey, I’m Nick
              </div>
              <div className="left-top_subtitle text-gray-color text-[16px] font-normal md:text-[20px]">
                Frontend developer
              </div>
            </div>
            <div className="left-bottom">
              <div className="left-bottom_hr h-[4px] w-[25px] mb-[24px] bg-purple-color"></div>
              <div
                className="left-bottom_text w-[100%] font-normal text-gray-color text-[16px] mb-[27px] 
          leading-7 sm:text-[18px] md:text-[20px] sm:mb-[44px] lg:w-[445px] lg:mb-[60px]"
              >
                Help you to create high-quality digital products that your
                clients will love and let your business thrive
              </div>
              <Button dopeClassName={`left-bottom_btn`}>
                Get in touch
                <img src="./assets/btn-arrow.png" alt="arrow icon" />
              </Button>
            </div>
          </div>
          <div className="right w-[100%] h-[500px] lg:h-[650px]">
            {/* h-[500px] md:h-[650px] */}
            <div
              className="bg-gradient bg-hero-mob bg-no-repeat bg-contain bg-right-bottom flex justify-end lg:bg-hero lg:bg-cover
            lg:bg-left-bottom xl:bg-contain xl:bg-right-bottom"
            >
              <div className="gradient-img w-[300px] flex justify-end lg:w-[420px]">
                <img
                  src="./assets/top-person.png"
                  className="w-[100%]"
                  alt="person"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
