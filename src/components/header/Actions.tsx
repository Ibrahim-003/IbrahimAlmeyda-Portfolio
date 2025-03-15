import { useState } from "react";
import { useDarkTheme } from "../../hooks/useDarkTheme";

import Menu from "../../assets/menu.svg?react";
import DarkIcon from "../../assets/darkIcon.svg?react";
import LightIcon from "../../assets/lightIcon.svg?react";
import Translate from "../../assets/translate.svg?react";

import Button from "../basic/Button";
import MenuComponent from "./Menu";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";

interface HeaderActionsProps {
  setActiveLink: (link: string) => void;
}

const HeaderActions: React.FC<HeaderActionsProps> = ({ setActiveLink }) => {
  const { dark, setDark } = useDarkTheme();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const {t, toggleLanguage} = useChangeLanguage();

  const handleActiveMenu = () => {
    setIsActiveMenu((prev) => !prev);
  };

  return (
    <div className='flex gap-2 lg:gap-4'>
      <div className='flex items-center'>
        <Button
          onClick={() => {
            setDark((prev) => !prev);
          }}
          styles={`w-10 h-10 rounded grid place-items-center ${
            dark
              ? "border bg-orange-soft hover:bg-orange-warm border-white/30"
              : "bg-purple-dark hover:bg-purple-deep border border-light-blue-gray"
          }`}
        >
          {dark ? (
            <LightIcon className='w-5 h-5 text-dark-charcoal' />
          ) : (
            <DarkIcon className='text-stone-400 fill-white' />
          )}
        </Button>
      </div>
      <div className='flex items-center lg:hidden'>
        <Button
          onClick={handleActiveMenu}
          styles={`w-10 h-10 border border-light-blue-gray dark:border-white/30 hover:bg-light-grayish-blue dark:hover:bg-white/10 rounded grid place-items-center`}
        >
          <Menu className='w-5 h-5' />
        </Button>
        {isActiveMenu && (
          <MenuComponent
            handleActiveMenu={handleActiveMenu}
            setActiveLink={setActiveLink}
          />
        )}
      </div>
      <div className='hidden lg:flex items-center '>
        <Button
          onClick={toggleLanguage}
          styles='border border-light-blue-gray hover:bg-light-grayish-blue dark:hover:bg-white/20 rounded-full px-4 py-1 flex gap-2'
        >
          <Translate />
          <span>{t("language")}</span>
        </Button>
      </div>
    </div>
  );
};

export default HeaderActions;
