"use client";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const links = [
    { href: "#top", label: "Main" },
    { href: "#about", label: "About" },
    { href: "#feedback", label: "Feedback" },
  ];

  return (
    <div
      className="header h-[64px] p-[15px] flex justify-center items-center bg-white-color
    border-2 border-b-light-gray-color sticky top-0 z-10"
    >
      <div className="container mx-auto md:mx-auto">
        <div className="header-wrapper flex justify-between items-center">
          <div className="left">
            <img
              className="cursor-pointer"
              src="./assets/logo.png"
              alt="logo"
            />
          </div>
          <div className="right">
            <ul
              className="nav-menu justify-between items-center gap-[24px] text-[16px] font-[600] 
              invisible hidden md:flex md:visible"
            >
              <li className="nav-menu_item">
                <a href="#top" className="text-[16px]">
                  Main
                </a>
              </li>
              <li className="nav-menu_item">
                <a href="#about">About</a>
              </li>
              <li className="nav-menu_item">
                <a href="#feedback">Get in touch</a>
              </li>
            </ul>

            <Menu
              as="div"
              className="relative inline-block text-left md:hidden"
            >
              <div>
                <Menu.Button className="">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.800049 2.50002C0.800049 2.07568 0.96862 1.66871 1.26868 1.36865C1.56874 1.0686 1.9757 0.900024 2.40005 0.900024H21.6C22.0244 0.900024 22.4314 1.0686 22.7314 1.36865C23.0315 1.66871 23.2001 2.07568 23.2001 2.50002C23.2001 2.92437 23.0315 3.33134 22.7314 3.6314C22.4314 3.93145 22.0244 4.10002 21.6 4.10002H2.40005C1.9757 4.10002 1.56874 3.93145 1.26868 3.6314C0.96862 3.33134 0.800049 2.92437 0.800049 2.50002ZM0.800049 10.5C0.800049 10.0757 0.96862 9.66871 1.26868 9.36865C1.56874 9.0686 1.9757 8.90002 2.40005 8.90002H21.6C22.0244 8.90002 22.4314 9.0686 22.7314 9.36865C23.0315 9.66871 23.2001 10.0757 23.2001 10.5C23.2001 10.9244 23.0315 11.3313 22.7314 11.6314C22.4314 11.9315 22.0244 12.1 21.6 12.1H2.40005C1.9757 12.1 1.56874 11.9315 1.26868 11.6314C0.96862 11.3313 0.800049 10.9244 0.800049 10.5ZM0.800049 18.5C0.800049 18.0757 0.96862 17.6687 1.26868 17.3687C1.56874 17.0686 1.9757 16.9 2.40005 16.9H21.6C22.0244 16.9 22.4314 17.0686 22.7314 17.3687C23.0315 17.6687 23.2001 18.0757 23.2001 18.5C23.2001 18.9244 23.0315 19.3313 22.7314 19.6314C22.4314 19.9315 22.0244 20.1 21.6 20.1H2.40005C1.9757 20.1 1.56874 19.9315 1.26868 19.6314C0.96862 19.3313 0.800049 18.9244 0.800049 18.5Z"
                      fill="#27272A"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className="mobile-menu_block absolute right-[0px] top-[50px] rounded-[16px]
                 py-[10px] px-[20px] bg-white w-[200px] h-[150px] shadow-xl"
                >
                  <ul className="flex flex-col gap-[15px] justify-center h-[100%]">
                    {links.map((link) => (
                      <Menu.Item key={link.href} as={Fragment}>
                        {({ active }) => (
                          <li className="border-b-2 border-grey-200">
                            <a href={link.href} className={`font-bold`}>
                              {link.label}
                            </a>
                          </li>
                        )}
                      </Menu.Item>
                    ))}
                  </ul>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};
