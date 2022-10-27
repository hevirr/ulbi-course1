import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/UI/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  // const location = useLocation();
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t('Unforeseen error happened')}</p>
      <Button onClick={reloadPage}>
        {t('Reload page')}
      </Button>
    </div>
  );
};
