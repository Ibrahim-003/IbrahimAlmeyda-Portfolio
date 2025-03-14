import { useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Actions from "./Actions";

const HeaderComponent: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>(window.location.pathname);

  return (
    <header className='fixed top-0 left-0 z-40 w-full backdrop-blur-xs'>
      <div className='w-full max-w-[900px] mx-auto flex justify-between items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:py-6 lg:px-4'>
        <Logo />
        <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
        <Actions setActiveLink={setActiveLink} />
      </div>
    </header>
  );
};

export default HeaderComponent;
