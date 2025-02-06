import { ReactNode } from 'react';
import classNames from 'classnames';
export const Button = ({
  children,
  onClick,
  variant,
}: {
  variant: 'primary' | 'disabled';
  children: ReactNode;
  onClick: () => void;
}) => {
  return <button className={classNames(variant, 'flex gap-2 items-center justify-center px-6 py-2 rounded-xl cursor-pointer')} onClick={onClick}>{children}</button>;
};
