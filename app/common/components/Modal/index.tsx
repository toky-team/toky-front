import type { PropsWithChildren } from 'react';

import * as s from './style.css';

interface ModalProps extends PropsWithChildren {
  isModalOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  withBackdrop?: boolean;
  backdropBlur?: boolean;
}
const Modal = ({
  withBackdrop = true,
  isModalOpen,
  onClose,
  onConfirm,
  confirmText = '확인',
  children,
  backdropBlur = false,
}: ModalProps) => {
  const onClickConfirm = onConfirm || onClose;

  return (
    <div>
      {withBackdrop && <button className={s.Backdrop({ isModalOpen, backdropBlur })} onClick={onClose} />}
      <div className={s.ModalWrapper}>
        <div className={s.Content({ isModalOpen })}>
          {children}
          <button className={s.Button} onClick={onClickConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
