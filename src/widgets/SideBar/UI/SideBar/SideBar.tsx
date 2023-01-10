import { classNames } from 'shared/lib/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LngSwitcher } from 'widgets/LngSwitcher/LngSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        {t('Toggle')}
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LngSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
