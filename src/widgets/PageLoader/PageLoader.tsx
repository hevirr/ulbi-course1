import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/UI/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoadersProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoadersProps) => (
  <div className={classNames(cls.PageLoader, {}, [])}>
    <Loader />
  </div>
);
