import { useGetInviteCode } from "@/common/apis/useGetInviteCode";
import { useToast } from "@/common/hooks/useToast";
import { CopyIcon } from "lucide-react";

const InviteButton = () => {

  const { openToast } = useToast();

  const { data: inviteCode } = useGetInviteCode();

  const handleCopyInvite = async () => {
    const text = import.meta.env.VITE_CLIENT_URL + '/?referer=' + inviteCode;
    await navigator.clipboard.writeText(text);
    openToast({
      message: '초대 링크가 복사되었습니다.',
    });
  };

  return (
    <button onClick={handleCopyInvite} className="flex flex-row gap-[6px] items-center justify-center rounded-md bg-[#4C0EB0] text-white-87 w-30 h-9 text-sm leading-normal tracking-tight">
      <CopyIcon className="h-[18px] w-[18px]"/>
      <div className="flex items-center justify-center">
        내 초대링크
      </div>
    </button>
  );
};

export default InviteButton;