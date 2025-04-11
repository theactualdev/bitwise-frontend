'use client'

import React, { useState } from "react";
import { Merriweather, Poppins } from "next/font/google";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  adjustFontFallback: false,
  variable: "--font-poppins",
});

const merriweather = Merriweather({
  weight: "900",
  subsets: ["latin"],
  adjustFontFallback: false,
  variable: "--font-merriweather",
});

export default function Login() {
  const [passwordState, setPasswordState] = useState(true);
  return (
    <div className="flex md:flex-row flex-col h-screen">
      <div className="image-container md:flex hidden w-1/2 bg-[url('/login.png')]"></div>
      <div className="md:py-[142px] pt-24 md:w-1/2 px-8">
        <form className="flex flex-col gap-11">
          <h2
            className={`font-black text-center ${merriweather.className} text-4xl`}
          >
            Bitwise - Login
          </h2>
          <div className="md:px-10 gap-10 flex flex-col items-center">
            <div className="flex flex-col gap-[10px] w-full">
              <label className="font-bold --font-poppins" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`border rounded-lg pl-4 outline-none ${poppins.className} border-[#2A2A2A] h-14 w-full`}
              />
            </div>
            <div className="flex flex-col gap-[10px] w-full">
              <label className="font-bold --font-poppins" htmlFor="email">
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordState ? "password" : "text"}
                  name="password"
                  id="password"
                  className={`border rounded-lg pl-4 outline-none ${poppins.className} border-[#2A2A2A] h-14 w-full`}
                />
                {passwordState ? <Eye onClick={() => setPasswordState(!passwordState)} className="absolute right-4 cursor-pointer top-1/3"/> : <EyeClosed onClick={() => setPasswordState(!passwordState)} className="absolute cursor-pointer right-4 top-1/3"/>}
              </div>
            </div>
            <p className="text-end w-full font-bold">Don't have an account? <Link href={"/"} className="text-[#0011FF]">Register</Link></p>
            <button type="submit" className={`bg-[#0011FF] w-full text-white py-4 px-6 text-xl cursor-pointer font-bold ${poppins.className} rounded-xl `}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
