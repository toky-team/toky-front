import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

const useInviteCode = () => {
  const [param] = useSearchParams();
  const inviteCode = param.get('referer');

  useEffect(() => {
    if (inviteCode) {
      localStorage.setItem('invite-code', inviteCode);
    }
  }, [inviteCode]);
};

export default useInviteCode;
