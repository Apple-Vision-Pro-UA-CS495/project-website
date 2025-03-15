"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../../../../assets/images/logo.png"

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        <div className="flex flex-row items-center gap-2">
            <Image
            src={logo}
            alt="Logo"
            width={width < 1024 ? "45" : "50"}
            className="relative rounded-full "
            />
            <div className="font-bold">Apple Vision Pro</div>
        </div>
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
      </div>
    </>
  );
};

export default Logo;