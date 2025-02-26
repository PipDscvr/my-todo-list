import { ReactNode } from 'react';
import classNames from 'classnames';

export const Button = ({
  children,
  variant,
  size = 'medium',
  customStyle,
  onClick,
}: {
  children: ReactNode;
  variant: 'primary' | 'disabled' | 'custom' | 'success' | 'destructive';
  onClick: () => void;
  size?: 'x-small' | 'small' | 'medium' | 'large';
  customStyle?: string;
}) => {
  const buttonSize = () => {
    if (size === 'x-small') return 'p-1 text-xs'
    if (size === 'small') return 'p-1.5 text-sm';
    if (size === 'large') return 'p-3.5 text-xl';
    return 'p-2.5 text-base';
  };
  return (
    <button
      className={
        variant === 'custom'
          ? customStyle
          : classNames(
              variant,
              'flex gap-2 items-center justify-center rounded-lg cursor-pointer',
              buttonSize(),
            )
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
