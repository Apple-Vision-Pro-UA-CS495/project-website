import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import {openIcon} from "../../../../../assets/icons/icon"

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 z-1 bg-inherit">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
            {openIcon}
            </button>
            <ul className="hidden md:flex gap-x-6">
              <li>
                <Link href="/feature">
                  <p>Features</p>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <p>Team</p>
                </Link>
              </li>
              <li>
                <Link href="/sprint">
                  <p>Deliverables</p>
                </Link>
              </li>
              <li>
                <a href="https://apple-vision-pro-tutorial.readthedocs.io/en/latest/" target="_blank">
                  <p>Documentations</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;