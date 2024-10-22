"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const splash = setTimeout(() => {
      setIsSplash(false);
    }, 3000); // Duration of the splash screen

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Remove the Splash

    return () => clearTimeout(timer);
    clearTimeout(splash);
  }, []);

  return isVisible ? (
    <motion.div
      className="bg-zinc-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isSplash ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "2rem",
        zIndex: 9999,
      }}
    >
      {isSplash && (
        <div className="text-primary w-screen h-screen flex flex-row">
          <div className="w-1/2 h-full bg-primary "></div>{" "}
          <div className="w-1/2 h-full bg-secondary "></div>
        </div>
      )}
    </motion.div>
  ) : (
    <></>
  );
};

export default SplashScreen;
