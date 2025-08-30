import { useGetUserInfo } from '@/common/apis/useGetUserInfo';
import KoreaImage from '@/lib/assets/images/profile_korea.webp';
import YonseiImage from '@/lib/assets/images/profile_yonsei.webp';

interface Props {
  className?: string;
}
const UserProfileImage = ({ className }: Props) => {
  const { data: userInfo } = useGetUserInfo();
  const imageUrl = userInfo?.university === '고려대학교' ? KoreaImage : YonseiImage;
  return <img src={imageUrl} className={className} />;
};
export default UserProfileImage;
