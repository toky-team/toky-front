import { useSearchParams } from 'react-router';

const useInviteCode = () => {
  const [param] = useSearchParams();
  const inviteCode = param.get('referer');

  if (inviteCode) {
    localStorage.setItem('invite-code', inviteCode);
  }
};

export default useInviteCode;
