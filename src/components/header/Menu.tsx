import Button from "../basic/Button";
import Translate from "../../assets/translate.svg?react";
import { useNavItems } from "../../hooks/useNavItems";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";

interface MenuComponentProps {
  handleActiveMenu: () => void;
  setActiveLink: (link: string) => void;
}

const MenuComponent: React.FC<MenuComponentProps> = ({
  handleActiveMenu,
  setActiveLink,
}) => {
  const {t, toggleLanguage} = useChangeLanguage();
  const navItems = useNavItems();


  return (
    <div className='absolute -bottom-[285px] right-4 w-1/2 max-w-[250px] py-4 rounded bg-white dark:bg-blue-marine'>
      <nav className='flex flex-col'>
        {navItems.map(({ label, link }, key) => (
          <a
            href={link}
            key={key}
            className='px-4 py-2 hover:underline hover:underline-offset-4 hover:bg-light-grayish-blue hover:dark:bg-white/20'
            onClick={() => {
              handleActiveMenu();
              setActiveLink(link);
            }}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className='mt-5 flex justify-center items-center'>
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

export default MenuComponent;
