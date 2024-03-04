"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="text-white flex flex-col items-center" id="about">
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Kuro</h2>
          <p className="text-base lg:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* cards TODO */}
        </div>
      </div>
    </section>
  );
};

export default About;