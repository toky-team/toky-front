import { useEffect, useMemo, useState } from 'react';
import * as s from './style.css';
import TopBar from '@/common/components/TopBar';
import { useGetUserInfo } from '@/common/apis/useGetUserInfo';
import UserProfileImage from '@/common/components/UserProfileImage';
import { InputBox } from '@/common/components/InputBox';
import { useGetCheckName } from '@/domain/signup/apis/useGetCheckName';
import { usePatchUser } from '@/domain/signup/apis/usePatchUser';
import { useToast } from '@/common/hooks/useToast';

const EditInfoPage = () => {
  const { data: userInfo } = useGetUserInfo();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState<boolean>(false);
  const { refetch: checkName } = useGetCheckName(name);
  const { mutate: patchUser } = usePatchUser();
  const [isValidate, setIsValidate] = useState<boolean>(false);
  const { openToast } = useToast();

  const isEdit = useMemo(() => {
    if (!userInfo) return false;
    if (name !== userInfo.name) return true;
    return false;
  }, [userInfo, name]);

  useEffect(() => {
    // data hydration
    if (userInfo) {
      setName(userInfo.name);
    }
  }, [userInfo]);

  return (
    <div className={s.Container}>
      <TopBar hasHamburger>
        <h1 className={s.Header}>회원 정보 관리</h1>
      </TopBar>
      <div className={s.Body}>
        <UserProfileImage className={s.ProfileImage} />
        <div className={s.ProfileWrapper}>
          <div className={s.Item}>
            <label htmlFor="name" className={s.Label}>
              닉네임
            </label>
            <div className={s.FormWrapper}>
              <div className={s.InputWrapper}>
                <InputBox
                  placeholder={userInfo?.name}
                  value={name}
                  setValue={(input) => {
                    setNameError(false);
                    setIsValidate(false);
                    setName(input);
                  }}
                  error={nameError}
                  maxLength={10}
                  clearError={() => setNameError(false)}
                />
                {isEdit && !isValidate && (
                  <button
                    className={s.CheckButton}
                    onClick={() => {
                      if (nameError || isValidate) return;
                      checkName().then(({ data }) => {
                        if (data !== undefined && data === false) {
                          setIsValidate(true);
                        } else {
                          setNameError(true);
                        }
                      });
                    }}
                  >
                    중복확인
                  </button>
                )}
              </div>
              <div className={s.InputStatus}>
                <span>{name.length}/10</span>
                {nameError && (
                  <span className={s.ErrorMessage({ isValidate: false })}>이미 존재하는 닉네임 입니다.</span>
                )}
                {isValidate && <span className={s.ErrorMessage({ isValidate: true })}>변경가능한 닉네임입니다.</span>}
              </div>
            </div>
          </div>
          <div className={s.Item}>
            <label className={s.Label}>전화번호</label>
            <div className={s.UnEditableItem}>{userInfo?.phoneNumber}</div>
          </div>
          <div className={s.Item}>
            <label className={s.Label}>학교</label>
            <div className={s.UnEditableItem}>{userInfo?.university}</div>
          </div>
        </div>
      </div>
      <button
        className={s.BottomAction({ isEdit: isValidate && isEdit })}
        onClick={() => {
          if (!isValidate || !isEdit) return;
          patchUser(name, {
            onSuccess: () => {
              openToast({ message: '닉네임이 변경되었어요' });
            },
          });
        }}
      >
        수정하기
      </button>
    </div>
  );
};
export default EditInfoPage;
