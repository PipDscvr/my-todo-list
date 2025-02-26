import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../button/Button';

export const Modal = ({
  children,
  title,
  onClose,
}: {
  children: ReactNode;
  title: string;
  onClose: () => void;
}) => {
  return createPortal(
    <div className="fixed top-0 left-0 size-full flex justify-center items-center">
      <div className="absolute bg-black/20 backdrop-blur-sm size-full" />
      <div className="flex flex-col gap-4 w-full max-w-[500px] bg-white relative border border-gray-500/50 rounded-xl p-4">
        <Button
          variant="custom"
          customStyle="text-base absolute top-3 right-3"
          onClick={() => onClose()}
        >
          close
        </Button>
        <h2 className="text-2xl pb-4">{title}</h2>
        {children}
      </div>
    </div>,
    document.body,
  );
};
