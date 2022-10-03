import React from "react";
import { classNames } from "shared/lib/classNames";
import cls from "./NavBar.module.scss";
import { AppLink } from "shared/UI/AppLink/AppLink";
import { AppLinkTheme } from "shared/UI/AppLink/AppLink";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.NavBar)}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.firstLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          Эбаут
        </AppLink>
      </div>
    </div>
  );
};
