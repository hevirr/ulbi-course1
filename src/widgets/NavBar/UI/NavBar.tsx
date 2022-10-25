import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => (
  <div className={classNames(cls.NavBar)}>
    <div className={cls.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/"
        className={cls.firstLink}
      >
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        Эбаут
      </AppLink>
    </div>
  </div>
);
