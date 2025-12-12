import React from "react";
import "./NavBar.scss";
import Link from "next/link";
import Image from "next/image";
import { NavbarData } from "./NavbarData.js";

const NavBar = () => {
  return (
    <nav className="NavBarWrapper">
      <div className="Left">
        <Image
          height={40}
          width={40}
          src="/feather.png"
          alt="Logo"
          className="Logo"
        />
        <p className="LogoText">BODY GLOW SPA</p>
      </div>
      <div className="Right">
        {NavbarData.map((e) =>
          e.src.length < 1 ? (
            <Link key={e.title} href={e.href}>
              <p className="LogoText">{e.title}</p>
            </Link>
          ) : (
            <Link key={e.title} href={e.href} target="_blank">
              <Image 
              className = "icons"
              src={e.src} 
              alt={e.title} 
              height={30} 
              width={30} 
              />
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default NavBar;
