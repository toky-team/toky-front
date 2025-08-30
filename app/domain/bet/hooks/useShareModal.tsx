import { useOverlay } from '@/common/hooks/useOverlay';
import { ShareModal } from '@/domain/bet/components/ShareModal';
import { useCallback } from 'react';

export function useShareModal() {
  const overlay = useOverlay();
  const openShareModal = useCallback(() => {
    return new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, exit }) => (
        <ShareModal
          isModalOpen={isOpen}
          onClose={() => {
            exit();
            resolve(true);
          }}
        />
      ));
    });
  }, [overlay]);

  return { openShareModal };
}
