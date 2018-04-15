import styled from 'styled-components'

// Animations
import shaking from './shaking.js'

const RaindropContainer = styled.div`
  position: relative;
  width: 53px;
  height: 50px;
  opacity: ${props => props.rain};

  > div {
    position: absolute;
    transform: translate(-18px, -15px) scale(0.25);
  }

  > :nth-child(1) {
    top: 0px;
    left: 20px;
    ${props => props.no_animation ? '' : `animation: ${shaking(0.25, 'translate(-18px,-15px)')} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 1.5s infinite;`}
  }

  > :nth-child(2) {
    top: 22.5px;
    left: 0px;
    ${props => props.no_animation ? '' : `animation: ${shaking(0.25, 'translate(-18px,-15px)')} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 1s infinite;`}
  }

  > :nth-child(3) {
    top: 27.5px;
    left: 37.5px;
    ${props => props.no_animation ? '' : `animation: ${shaking(0.25, 'translate(-18px,-15px)')} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 2s infinite;`}
  }
`

const Raindrop = styled.div`
  width: 50px;
  height: 50px;
  background: #01e5ff;
  border-radius: 50%;
  transform: scale(0.25);

  :after {
    content: "";
    position: absolute;
    top: -10%;
    left: 50%;
    width: 50%;
    height: 50%;
    border-radius: 2px;
    background: inherit;
    transform: translate(-50%, 0) rotate(45deg);
  }
`

export {
  Raindrop,
  RaindropContainer
}
