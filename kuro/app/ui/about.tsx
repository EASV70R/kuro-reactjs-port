"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";

function Component() {
  return (
    <div className="text-white">
      <div className="mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center">About Kuro</h1>
        <p className="text-xl text-center mt-4 mb-12 text-[#ADB7BE]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit amet</h3>
            <p className="mt-2 text-center text-[#ADB7BE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit amet</h3>
            <p className="mt-2 text-center text-[#ADB7BE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet
            </h3>
            <p className="mt-2 text-center text-[#ADB7BE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold">Lorem ipsum dolor sit amet</h3>
            <p className="mt-2 text-center text-[#ADB7BE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <section className="text-white flex flex-col items-center" id="about">
      <Component />
    </section>
  );
};

export default About;
