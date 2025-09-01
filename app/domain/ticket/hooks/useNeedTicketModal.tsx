import { useOverlay } from '@/common/hooks/useOverlay';
import NeedTicketModal from '@/domain/ticket/components/NeedTicketModal';

export function useNeedTicketModal() {
  const overlay = useOverlay();
  const openNeedTicketModal = () => {
    return new Promise<boolean>(() => {
      overlay.open(({ isOpen, exit }) => <NeedTicketModal isModalOpen={isOpen} onClose={exit} />);
    });
  };

  return { openNeedTicketModal };
}
