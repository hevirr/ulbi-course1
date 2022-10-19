import { classNames } from "shared/lib/classNames";
import cls from "./LngSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/UI/Button/Button";

interface LngSwitcherProps {
  className?: string;
}

export const LngSwitcher = ({ className }: LngSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLng = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(cls.LngSwitcher)}
      theme={ThemeButton.CLEAR}
      onClick={toggleLng}
    >
      {t("Lng")}
    </Button>
  );
};
