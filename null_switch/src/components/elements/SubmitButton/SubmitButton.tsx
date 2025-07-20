import React from 'react';
import { StyledSubmitButton } from './styledSubmitButton';

interface SubmitButtonProps {
  content: string
  type: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ content, type }) => {
  return (
    <StyledSubmitButton type={type}>{content}</StyledSubmitButton>
  )
}
export default SubmitButton;
