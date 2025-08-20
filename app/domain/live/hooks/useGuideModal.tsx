import { useOverlay } from '@/common/hooks/useOverlay';
import GuideModal from '@/domain/live/components/GuideModal';
import { useCallback } from 'react';

const useGuideModal = () => {
  const overlay = useOverlay();

  const openModal = useCallback(() => {
    return new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, exit }) => (
        <GuideModal
          isModalOpen={isOpen}
          onClose={() => {
            exit();
            resolve(true);
          }}
        />
      ));
    });
  }, [overlay]);

  return { openModal };
};

export default useGuideModal;
