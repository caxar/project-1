import Button from "@/ui/atoms/Button/Button";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="about mb-[100px] pt-[64px] mt-[48px] md:mt-[80px] lg:mt-[100px]"
    >
      <div className="container mx-auto md:mx-auto ">
        <div className="about-wrapper my-[20px] px-3 sm:px-0">
          <h2 className="title mb-[36px] text-[21px] font-bold md:text-[32px] md:mb-[80px]">
            About me
          </h2>
          <div
            className="about-block mb-[48px] flex justify-center items-center flex-wrap sm:gap-[44px]
      lg:flex-nowrap lg:justify-around lg:mb-[80px] lg:gap-[158px]"
          >
            <div className="">
              <div
                className="about-block_left bg-main bg-left-bottom w-[290px] h-[290px] rounded-full
         flex items-center justify-center mb-[36px] md:mb-0 lg:w-[412px] lg:h-[412px]"
              >
                <div
                  className="block_left-circle rounded-full bg-light-gray-color 
          w-[255px] h-[255px] overflow-hidden flex justify-center lg:w-[365px] lg:h-[365px]"
                >
                  <img
                    className="h-[110%] w-[100%]"
                    src="./assets/middle-person.png"
                    alt="middle-person"
                  />
                </div>
              </div>
            </div>
            <div className="about-block_right">
              <div className="left-bottom_hr h-[4px] w-[25px] mb-[24px] bg-purple-color"></div>
              <div
                className="about-right_text w-[100%] text-gray-color font-normal text-[16px]
           leading-7 sm:text-[18px] md:mb-[44px] lg:text-[20px] lg:w-[540px]"
              >
                <span className="font-semibold text-black-color">
                  Nick Richardson
                </span>{" "}
                - specialist in Frontend development. Clear code is my passion.
                Solving issues through negotiations
              </div>
              {/* <button
                className="left-bottom_btn text-white text-[16px] font-semibold
          w-[190px] h-[50px] rounded-full justify-center items-center gap-[12px]
          bg-purple-color hover:bg-purple-color-hover transition ease-in-out
          active:border-btn-pressed active:border-[3px] hidden md:flex"
              >
                Get in touch
                <img src="./assets/btn-arrow.png" alt="arrow icon" />
              </button> */}
              <Button dopeClassName="hidden md:flex">
                Get in touch
                <img src="./assets/btn-arrow.png" alt="arrow icon" />
              </Button>
            </div>
          </div>
          <div className="about-info flex justify-between flex-wrap gap-[48px] lg:flex-nowrap lg:gap-[217px] lg:justify-around">
            <div className="interest-block flex flex-col w-[350px] lg:w-[355px]">
              <h2 className="title h-[30px] mb-[28px] font-bold text-[21px] sm:text-[24px] sm:mb-[44px]">
                Interest
              </h2>
              <div className="about-info_wrapper flex flex-col gap-[25px]">
                {/* first block */}
                <div className="interest-block_item flex items-center gap-[16px] w-[270px] h-[70px]">
                  <div className="">
                    <div className="item-img w-[60px] h-[60px] flex items-center justify-center rounded-full border-2 border-purple-color">
                      <img src="./assets/music.svg" alt="music icon" />
                    </div>
                  </div>
                  <div className="item-text text-[16px] font-normal flex flex-col gap-[8px] sm:text-[18px] md:text-[20px]">
                    <span className="font-semibold">Music</span>
                    <p className="text-balance">Indie rock | Reggae</p>
                  </div>
                </div>
                {/* second block */}
                <div className="interest-block_item flex items-center gap-[16px] w-[270px] h-[70px]">
                  <div className="">
                    <div className="item-img !w-[60px] h-[60px] flex items-center justify-center rounded-full border-2 border-purple-color">
                      <img src="./assets/drawing.svg" alt="music icon" />
                    </div>
                  </div>
                  <div className="item-text text-[16px] font-normal flex flex-col gap-[8px] sm:text-[18px] md:text-[20px] ">
                    <span className="font-semibold">Art</span>
                    <p className="text-balance">Edvard Munch | Frida Kahlo</p>
                  </div>
                </div>
                {/* third block */}
                <div className="interest-block_item flex items-center gap-[16px] w-[270px] h-[70px]">
                  <div className="">
                    <div className="item-img w-[60px] h-[60px] flex items-center justify-center rounded-full border-2 border-purple-color">
                      <img src="./assets/Photo.svg" alt="music icon" />
                    </div>
                  </div>
                  <div className="item-text text-[16px] font-normal flex flex-col gap-[8px] sm:text-[18px] md:text-[20px]">
                    <span className="font-semibold">Photography</span>
                    <p className="text-balance">Portraits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="eductaion">
              <h2
                className="title h-[36px] w-[300px] mb-[28px] font-bold text-[21px] sm:text-[24px] sm:mb-[44px]
          lg:w-[540px]"
              >
                Education & Experience
              </h2>
              <div className="education-wrapper flex flex-col gap-[12px]">
                {/* first block education */}
                <div
                  className="education-block_item flex gap-[16px] text-[16px] font-normal 
            h-[100px] w-[100%] border-b-2 border-light-gray-color sm:text-[18px] md:text-[20px] flex-wrap"
                >
                  <div className="eductaion-item_left w-[120px]">
                    2008 - Present
                  </div>
                  <div className="education-item_right flex flex-col gap-[3px] ">
                    <p className="font-semibold leading-[25px]">
                      Middle Frontend developer{" "}
                    </p>
                    <p>Ozon</p>
                  </div>
                </div>
                {/* second block education */}
                <div
                  className="education-block_item flex gap-[16px] text-[16px] font-normal 
            h-[100px] w-[100%] border-b-2 border-light-gray-color sm:text-[18px] md:text-[20px]"
                >
                  <div className="eductaion-item_left w-[120px]">
                    2006 - 2007
                  </div>
                  <div className="education-item_right flex flex-col gap-[3px]">
                    <p className="font-semibold leading-[25px]">
                      Frontend development courses
                    </p>
                    <p>Stepik</p>
                  </div>
                </div>
                {/* third block education */}
                <div
                  className="education-block_item flex gap-[16px] text-[16px] font-normal 
            h-[100px] w-[100%] border-b-2 border-light-gray-color sm:border-none
            sm:text-[18px] md:text-[20px]"
                >
                  <div className="eductaion-item_left w-[120px]">
                    2000 - 2005
                  </div>
                  <div className="education-item_right flex flex-col gap-[3px]">
                    <p className="font-semibold leading-[21px]">
                      Frontend developer
                    </p>
                    <p>Saint Petersburg State University</p>
                  </div>
                </div>
              </div>
              <Button dopeClassName="left-bottom_btn mt-[48px] flex sm:hidden">
                Get in touch
                <img src="./assets/btn-arrow.png" alt="arrow icon" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
