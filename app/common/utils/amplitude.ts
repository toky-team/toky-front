import type { UserInfoInterface } from '@/common/apis/useGetUserInfo';
import { identify, Identify, init, setUserId } from '@amplitude/analytics-browser';

const AMPLITUDE_API_KEY = import.meta.env.VITE_API_AMPLITUDE_API_KEY || '';

export const initAmplitude = async (userId?: string, callback?: () => void) => {
  init(AMPLITUDE_API_KEY, {
    userId,
    defaultTracking: true,
    autocapture: {
      elementInteractions: true,
    },
  }).promise.then(() => {
    callback?.();
  });
};

export const setInitialUserProperties = (user: UserInfoInterface) => {
  const identifyObj = new Identify();
  setUserId('toky-' + user.id);
  identifyObj.set('id', user.id);
  identifyObj.set('user_name', user.name);
  identifyObj.set('univ', user.university);
  identifyObj.set('phone_number', user.phoneNumber);
  identify(identifyObj);
};
