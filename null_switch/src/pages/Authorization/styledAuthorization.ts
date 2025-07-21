import styled, { keyframes } from 'styled-components'


export const flicker = keyframes`
  0% {
  opacity: 0.27861;
  }
  5% {
  opacity: 0.34769;
  }
  10% {
  opacity: 0.23604;
  }
  15% {
  opacity: 0.90626;
  }
  20% {
  opacity: 0.18128;
  }
  25% {
  opacity: 0.83891;
  }
  30% {
  opacity: 0.65583;
  }
  35% {
  opacity: 0.67807;
  }
  40% {
  opacity: 0.26559;
  }
  45% {
  opacity: 0.84693;
  }
  50% {
  opacity: 0.96019;
  }
  55% {
  opacity: 0.08594;
  }
  60% {
  opacity: 0.20313;
  }
  65% {
  opacity: 0.71988;
  }
  70% {
  opacity: 0.53455;
  }
  75% {
  opacity: 0.37288;
  }
  80% {
  opacity: 0.71428;
  }
  85% {
  opacity: 0.70419;
  }
  90% {
  opacity: 0.7003;
  }
  95% {
  opacity: 0.36108;
  }
  100% {
  opacity: 0.24387;
  }
}
`

export const StyledAuthorization = styled.div`
	width: 100vw;
	background: #213547;
	scrollbar-width: none;
	position: relative;
	height: 100vh;
	margin-top: -4rem;
	z-index: 0;

	&::before{
		content: " ";
  	display: block;
  	position: absolute;
  	top: 0;
  	left: 0;
  	bottom: 0;
  	right: 0;
  	background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  	z-index: 0;
  	background-size: 100% 3px, 5px 100%;
  	pointer-events: none;
}

&::after {
	content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 0;
  pointer-events: none;
  animation: ${flicker} 0.15s infinite;
}
`
export const FormsWrapper = styled.div`
	background: #FFEBF1;
	width: 70%;
	height: 100%;
	margin-left: 15%;
	z-index: 2;
	position: relative;
	text-align: center;
	font-family: 'Roboto Flex';
	font-variation-settings: 'wght' 900, 'wdth' 150, 'opsz' 144;
	font-size: 64px;
`

export const glitch = keyframes`
  0% {
    text-shadow: 1.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.6389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  5% {
    text-shadow: 3.7928974010788217px 0 1px rgba(0,30,255,0.5), -3.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  10% {
    text-shadow: 1.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.12956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  15% {
    text-shadow: 1.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.80218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  20% {
    text-shadow: 4.4794037899852017px 0 1px rgba(0,30,255,0.5), -5.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  25% {
    text-shadow: 2.6125630401149584px 0 1px rgba(0,30,255,0.5), -2.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  30% {
    text-shadow: 1.7015590085143956px 0 1px rgba(0,30,255,0.5), -1.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  35% {
    text-shadow: 4.896914047650351px 0 1px rgba(0,30,255,0.5), -4.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  40% {
    text-shadow: 4.870905614848819px 0 1px rgba(0,30,255,0.5), -4.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  45% {
    text-shadow: 3.231056963361899px 0 1px rgba(0,30,255,0.5), -3.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  50% {
    text-shadow: 1.08084290417898504px 0 1px rgba(0,30,255,0.5), -1.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  55% {
    text-shadow: 3.3758461067427543px 0 1px rgba(0,30,255,0.5), -3.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  60% {
    text-shadow: 3.202193051050636px 0 1px rgba(0,30,255,0.5), -3.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  65% {
    text-shadow: 3.8638780614874975px 0 1px rgba(0,30,255,0.5), -3.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  70% {
    text-shadow: 1.48874025155497314px 0 1px rgba(0,30,255,0.5), -1.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  75% {
    text-shadow: 2.8948491305757957px 0 1px rgba(0,30,255,0.5), -2.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  80% {
    text-shadow: 1.0833037308038857px 0 1px rgba(0,30,255,0.5), -1.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  85% {
    text-shadow: 1.09769827255241735px 0 1px rgba(0,30,255,0.5), -1.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  90% {
    text-shadow: 4.443339761481782px 0 1px rgba(0,30,255,0.5), -4.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  95% {
    text-shadow: 3.1841838852799786px 0 1px rgba(0,30,255,0.5), -3.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  100% {
    text-shadow: 3.6208764473832513px 0 1px rgba(0,30,255,0.5), -3.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
`

const runningLine = keyframes`
	0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-50vw, 0);
`

export const BgRunningLine = styled.p`
	font-size: 100px;
	color: #ffebf1;
	animation: ${glitch} 1.6s infinite, ${runningLine} 5s infinite linear;
	position: absolute;
	font-weight: 900;
	font-size: 200px;
	top: 20%;
	font-family: 'Roboto Flex';
	font-variation-settings: 'slnt' -10;
	white-space: nowrap;
	width: 200vw;
	left: 0;
	z-index: -1;
`
