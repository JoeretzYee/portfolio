import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";

function Navbar() {
  //states
  const [istoggleOpen, setIsToggleOpen] = useState(false);

  //functions
  const menuOpen = () => {
    setIsToggleOpen(!istoggleOpen);
  };
  return (
    <nav
      className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16
  py-6 text-white backdrop-blue-md md:justify-evenly"
    >
      {/* logo */}
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        {"<Joeretz />"}
      </a>
      {/* ul list */}
      <ul className="hidden md:flex gap-10">
        <a href="#home">
          <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            Home
          </li>
        </a>
        <a href="#tech">
          <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            Tech
          </li>
        </a>
        <a href="#projects">
          <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            Projects
          </li>
        </a>
        <a href="#contact">
          <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
            Contact
          </li>
        </a>
      </ul>
      {/* links for social media */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a
            href="https://www.linkedin.com/in/joeretz-yee-b01356194/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <a href="https://www.facebook.com/joeretz.galendez.1" target="_blank">
            <BsFacebook />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <a href="https://github.com/JoeretzYee" target="_blank">
            <BsGithub />
          </a>
        </li>
      </ul>
      {istoggleOpen ? (
        <BiX onClick={menuOpen} className="block md:hidden text-4xl" />
      ) : (
        <BiMenu onClick={menuOpen} className="block md:hidden text-4xl" />
      )}

      {istoggleOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-center justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12" ${
            istoggleOpen ? "block" : "hidden"
          } `}
        >
          <ul className="flex flex-col  gap-8">
            <a href="#home">
              <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                Home
              </li>
            </a>
            <a href="#tech">
              <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                Tech
              </li>
            </a>
            <a href="#projects">
              <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                Projects
              </li>
            </a>
            <a href="#contact">
              <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                Contact
              </li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
              <BsYoutube />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <BsLinkedin />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
              <BsTwitterX />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <BsGithub />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
