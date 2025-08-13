import { useOverlay } from '@/common/hooks/useOverlay';
import { ShareModal } from '@/domain/bet/components/ShareModal';

export function useShareModal() {
  const overlay = useOverlay();
  const openShareModal = () => {
    return new Promise<boolean>(() => {
      overlay.open(({ isOpen, exit }) => <ShareModal isModalOpen={isOpen} onClose={exit} />);
    });
  };

  return { openShareModal };
}
