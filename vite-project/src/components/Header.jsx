import React from "react";
import Drawer from "./HeaderComponents/Drawer";
import Avatar from "./HeaderComponents/Avatar";

function Header() {
  return (
    <div className="flex items-center justify-between p-6 bg-[rgba(248, 249, 249)] border-2 border-solid md:p-10">
      <Drawer />
      <h1 className="text-2xl font-bold text-[#0891b2] md:text-5xl">
        Sportify Sessions
      </h1>
      <Avatar />
    </div>
  );
}

export default Header;
