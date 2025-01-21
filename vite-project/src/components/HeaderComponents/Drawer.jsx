import React, { useState } from "react";
import SideNav from "./SideNav";
import NavIcon from "./NavIcon";

function Drawer() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show === false ? (
        <NavIcon setShow={setShow} />
      ) : (
        <SideNav setShow={setShow} />
      )}
    </>
  );
}

export default Drawer;
