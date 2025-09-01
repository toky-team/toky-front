import { useOverlay } from '@/common/hooks/useOverlay';
import NeedTicketModal from '@/domain/ticket/components/NeedTicketModal';

export function useNeedTicketModal() {
  const overlay = useOverlay();
  const openNeedTicketModal = () => {
    return new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, exit }) => (
        <NeedTicketModal
          isModalOpen={isOpen}
          onClose={() => {
            exit();
            resolve(true);
          }}
        />
      ));
    });
  };

  return { openNeedTicketModal };
}
