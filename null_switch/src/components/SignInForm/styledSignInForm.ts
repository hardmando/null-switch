import styled from 'styled-components'
import { glitch } from '../../pages/Authorization/styledAuthorization';

export const StyledSignInForm = styled.div.attrs({ className: 'parent' })`
	position: relative;
	max-width: 50%;
	margin: auto;
`

export const FormsWrapperText = styled.p`
	z-index: 2;
	font-family: 'Roboto Flex', sans-serif;
  font-variation-settings: 'slnt' 0, 'wght' 400, 'opsz' 144, 'wdth' 150;
  transition: font-variation-settings 0.8s ease;

  .parent:hover & {
    font-variation-settings: 'slnt' -20, 'wght' 1200, 'opsz' 544, 'wdth' 550;
		animation: ${glitch} .2s;
  }
`
