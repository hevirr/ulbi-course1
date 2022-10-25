import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/UI/Button/Button';
import cls from './LngSwitcher.module.scss';

interface LngSwitcherProps {
  className?: string;
}

export const LngSwitcher = ({ className }: LngSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLng = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.LngSwitcher)}
      theme={ThemeButton.CLEAR}
      onClick={toggleLng}
    >
      {t('Lng')}
    </Button>
  );
};
