import { motion } from "framer-motion";
import React from "react";
import image from "../images/m2.jfif";

function Hero() {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=""
            className="w-[300px] h-[360px]  cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-3 max-w-[600px] items-center justify-center text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Joeretz Yee
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl  md:text-3xl">
            Software Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I build software that solves real problems. Whether you need a
            system, an app, or a digital solution I deliver results.
          </p>
          <div className="flex items-center justify-between gap-10">
            <p className="md:text-base text-pretty text-sm text-gray-400">
              Whatsapp: +639163126723
            </p>
            <p className="md:text-base text-pretty text-sm text-gray-400">
              Email: yee.it111@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
