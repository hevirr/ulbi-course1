import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Page404.module.scss';

interface Page404Props {
  className?: string;
}

export const Page404 = ({ className }: Page404Props) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Page404, {}, [className])}>
      {t('Page not found')}
    </div>
  );
};
