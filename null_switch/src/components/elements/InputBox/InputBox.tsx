import React from 'react'
import { StyledInputBoxWrapper, StyledInputBox } from './styledInputBox';

interface InputBoxProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const InputBox: React.FC<InputBoxProps> = ({ label, type = 'text', value, onChange, placeholder }) => {
  return (
    <StyledInputBoxWrapper label={label}>
      <StyledInputBox
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledInputBoxWrapper>
  );
};

export default InputBox;
