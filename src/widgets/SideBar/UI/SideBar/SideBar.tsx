import { classNames } from 'shared/lib/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LngSwitcher } from 'widgets/LngSwitcher/LngSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button type="button" onClick={onToggle}>
        TOGGLE
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LngSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
