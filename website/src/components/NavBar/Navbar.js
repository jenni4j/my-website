import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../NavBar/Navbar.css";


function Navbar() {

  return (
    <div className="navbar">
      <div className="links">
        <Link className="linksItem"> Home </Link>
        <Link className="linksItem"> About </Link>
        <Link className="linksItem"> Portfolio </Link>
        <Link className="linksItem"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;