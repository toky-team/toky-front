import { useOverlay } from '@/common/hooks/useOverlay';
import GuideModal from '@/domain/live/components/GuideModal';

const useGuideModal = () => {
  const overlay = useOverlay();

  const openModal = () => {
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
  };

  return { openModal };
};

export default useGuideModal;
