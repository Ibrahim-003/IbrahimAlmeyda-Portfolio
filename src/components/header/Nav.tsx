import React from "react";
import { navItems } from "../../data/navItems";

interface NavComponentProps {
    activeLink: string;
    setActiveLink: (link: string) => void;
}

const NavComponent: React.FC<NavComponentProps> = ({activeLink, setActiveLink}) => {
  return (
    <>
      <nav className='hidden md:flex justify-between gap-2 bg-light-cream p-2 dark:bg-white/20 rounded-lg'>
        {navItems.map(({ label, link }, key) => (
          <a
            href={link}
            key={key}
            className={`px-2 py-1 hover:underline hover:underline-offset-4 ${
              activeLink === link ? "bg-teal-dark text-white rounded" : ""
            }`}
            onClick={() => setActiveLink(link)}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default NavComponent;
