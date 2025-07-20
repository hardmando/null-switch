import styled from 'styled-components'

interface InputBoxWrapperProps {
  label: string;
}

export const StyledInputBoxWrapper = styled.div<InputBoxWrapperProps>`
	display: flex;
	flex-direction: column;
	margin: 0 10%;
	padding: 1rem;
	justify-content: center;
	position: relative;

	&::before {
		content: '${props => props.label}';
		max-width: 40%;
		height: 1rem;
		color: #ffebf1;
		background: #213547;
		font-size: 1rem;
		padding: .5rem;
		top: 2%;
		right: 1%;
		position: absolute;
		border: 2px solid #ffebf1;
		border-radius: 5px;
	}
`

export const StyledInputBox = styled.input`
	padding: 1rem;
  outline: none;
  background: transparent;
  border-radius: 5px;
  color: #213547;
  border: 1px solid #213547;
  font-size: 1rem;
`
