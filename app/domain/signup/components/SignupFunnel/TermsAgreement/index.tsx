import { useCallback, useEffect, useState } from 'react';

import * as c from '../style.css';
import * as s from './style.css';

import { TERMS_LIST, type TermsType } from '@/domain/signup/components/SignupFunnel/TermsAgreement/constants';
import TermButton from '@/domain/signup/components/SignupFunnel/TermsAgreement/TermButton';
import Icon from '@/lib/assets/icons';
import { useSignupForm } from '@/domain/signup/stores/SignupFormStore';

interface Props {
  curProgress: number;
}
const TermsAgreement = ({ curProgress }: Props) => {
  const agreement = useSignupForm((state) => state.agreement);
  const setAgreement = useSignupForm((state) => state.setAgreement);

  const [terms, setTerms] = useState<{ [key in TermsType]: boolean }>({ ServiceTerm: false, PersonalInfoTerm: false });

  useEffect(() => {
    let allChecked = true;
    Object.values(terms).map((val) => {
      if (!val) {
        allChecked = false;
      }
    });
    setAgreement(allChecked);
  }, [terms, setAgreement]);

  const handleTermAgree = useCallback((target: TermsType) => {
    setTerms((prev) => ({ ...prev, [target]: !prev[target] }));
  }, []);

  return (
    <div className={c.Wrapper}>
      <div className={c.Guide}>
        <p className={c.Description}>경품 지급을 위해 필요해요</p>
        <h2>
          <strong className={c.Strong}>약관</strong>에 동의해주세요.
        </h2>
      </div>
      <div className={s.ButtonsLayout}>
        <button
          className={s.TotalButton({ selected: agreement })}
          onClick={() => {
            if (agreement) {
              setTerms({ PersonalInfoTerm: false, ServiceTerm: false });
            } else {
              setTerms({ PersonalInfoTerm: true, ServiceTerm: true });
            }
          }}
        >
          <Icon.Check opacity={agreement ? 0.87 : 0.38} />
          약관 전체 동의
          <div className={s.ButtonBackground} />
        </button>
        <div className={s.TermButtonLayout}>
          {TERMS_LIST.map((term) => (
            <TermButton
              key={term.key}
              text={term.text}
              details={term.details()}
              selected={terms[term.key]}
              onClick={() => handleTermAgree(term.key)}
              curProgress={curProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TermsAgreement;
