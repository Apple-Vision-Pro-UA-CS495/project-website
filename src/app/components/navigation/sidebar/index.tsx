import Link from "next/link";
import { JSX } from 'react';
import {closeIcon} from '../../../../../assets/icons/icon'

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div className="sidebar-container fixed w-full h-full overflow-hidden justify-center grid pt-[120px] bg-inherit left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {closeIcon}
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/feature" onClick={toggle}>
              <p>Features</p>
            </Link>
          </li>
          <li>
            <Link href="/team" onClick={toggle}>
              <p>Team</p>
            </Link>
          </li>
          <li>
            <Link href="/sprint" onClick={toggle}>
              <p>Deliverables</p>
            </Link>
          </li>
          <li>
            <a href="https://apple-vision-pro-tutorial.readthedocs.io/en/latest/" onClick={toggle} target="_blank">
              <p>Documentations</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;