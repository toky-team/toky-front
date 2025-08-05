import { useState } from 'react';

import * as s from './style.css';

type StatusType = 'default' | 'focus' | 'filled';

interface InputBoxProps {
  type?: 'new' | 'edit';
  inputType?: 'number' | 'text';
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  error?: boolean;
  clearError?: () => void;
  validationButton?: {
    text: string;
    onClick: () => void;
  };
  changeable?: boolean;
}
export function InputBox({
  type = 'new',
  inputType = 'text',
  value,
  setValue,
  placeholder,
  maxLength,
  error = false,
  validationButton,
  clearError,
  changeable = false,
}: InputBoxProps) {
  const [status, setStatus] = useState<StatusType>('default');

  return (
    <div className={s.Wrapper}>
      <input
        className={s.Container({ status: error ? 'error' : changeable ? 'changeable' : status })}
        inputMode={inputType === 'number' ? 'numeric' : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        onFocus={() => {
          setStatus('focus');
          clearError?.();
        }}
        onBlur={() => {
          if (value.length !== 0 && type === 'new') {
            setStatus('filled');
          } else {
            setStatus('default');
          }
        }}
        maxLength={maxLength}
      />
      {validationButton && (
        <button className={s.ValidationButton} onClick={validationButton.onClick}>
          {validationButton.text}
        </button>
      )}
    </div>
  );
}
