import useGetAuthCheck from '@/common/apis/useGetAuthCheck';
import { LoginModal } from '@/common/hooks/useLoginModal/LoginModal';
import { useOverlay } from '@/common/hooks/useOverlay';

export function useLoginModal() {
  const overlay = useOverlay();
  const { data } = useGetAuthCheck();

  const openLoginModal = () => {
    if (!data?.isSignup) {
      return new Promise<boolean>((resolve) => {
        overlay.open(({ isOpen, exit }) => (
          <LoginModal
            isModalOpen={isOpen}
            onClose={() => {
              exit();
              resolve(true);
            }}
          />
        ));
      });
    }
    return false;
  };

  return { openLoginModal };
}
