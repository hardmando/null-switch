import SignInForm from '../../components/SignInForm/SignInForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { StyledAuthorization, FormsWrapper, BgRunningLine } from './styledAuthorization'

const Authorization = () => {
  return (
    <StyledAuthorization>
      <BgRunningLine>null_switch null_switch null_switch null_switch </BgRunningLine>
      <FormsWrapper>
        <SignInForm />
        <SignUpForm />
      </FormsWrapper>
    </StyledAuthorization>
  );
};

export default Authorization;
