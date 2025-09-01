import Modal from '@/common/components/Modal';

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

function NeedTicketModal({ isModalOpen = true, onClose }: ModalProps) {
  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose} withBackdrop={true} backdropBlur={false}>
      응모권이 부족합니다.
    </Modal>
  );
}

export default NeedTicketModal;
