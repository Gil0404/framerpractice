import React from "react";
import StaggeredDropDown from "./menu";

function NavBar() {
  return (
    <>
      <div className="w-screen h-16 fixed z-50  sm:hidden xs:hidden md:flex lg:flex xl:flex ">
        <div>hellow</div>
      </div>

      <div className="w-screen h-16 fixed z-50  sm:flex xs:flex  md:hidden lg:hidden xl:hidden "></div>
    </>
  );
}

export default NavBar;
