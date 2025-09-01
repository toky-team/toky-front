import { useGetUserInfo } from '@/common/apis/useGetUserInfo';
import { useEffectOnce } from '@/common/hooks/useEffectOnce';
import { initAmplitude, setInitialUserProperties } from '@/common/utils/amplitude';

const AmplitudeProvider = () => {
  const { data: user } = useGetUserInfo();

  useEffectOnce(() => {
    initAmplitude(user?.id, () => {
      if (user) setInitialUserProperties(user);
    });
  });

  return null;
};

export default AmplitudeProvider;
