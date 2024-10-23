"use client";
import React, { useEffect, useState } from "react";
import { motion, spring } from "framer-motion";
import MainPage from "./home/page";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust duration as necessary
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        className="splash-screen bg-green-700 w-screen h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.3 }}
      >
        <div className="flex flex-row w-screen h-screen bg-secondary">
          <motion.div
            className="bg-primary w-1/2 h-screen"
            initial={{ x: -1000 }}
            animate={{ x: [200, -200, 0], scaleX: [2, 4, 1] }}
            transition={{ ease: "easeInOut", type: "spring" }}
          ></motion.div>
        </div>
      </motion.div>
    );
  }

  return <MainPage />;
};

export default SplashScreen;
