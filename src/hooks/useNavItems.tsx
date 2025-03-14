import { useTranslation } from "react-i18next";

export const useNavItems = () => {
  const { t } = useTranslation();

  return [
    {
      label: t("nav.home"),
      link: "#home",
    },
    {
      label: t("nav.about"),
      link: "#about",
    },
    {
      label: t("nav.skills"),
      link: "#skills",
    },
    {
      label: t("nav.projects"),
      link: "#projects",
    },
    {
      label: t("nav.contact"),
      link: "#contact",
    },
  ];
};
