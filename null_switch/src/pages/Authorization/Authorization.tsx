import SignInForm from '../../components/SignInForm/SignInForm'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { StyledAuthorization, FormsWrapper, BgRunningLine, FormsWrapperText } from './styledAuthorization'

const Authorization = () => {
	return (
		<StyledAuthorization>
			<BgRunningLine>null_switch null_switch null_switch null_switch </BgRunningLine>
			<FormsWrapper>
				<FormsWrapperText>LOG IN</FormsWrapperText>
				<SignInForm />
				<FormsWrapperText>or</FormsWrapperText>
				<FormsWrapperText>SIGN UP</FormsWrapperText>
				<SignUpForm />
			</FormsWrapper>
		</StyledAuthorization>
	);
};

export default Authorization;
