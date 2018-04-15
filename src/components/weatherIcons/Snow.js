import styled from 'styled-components'

import shaking from './shaking.js'

const SnowContainer = styled.div`
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  opacity: ${props => props.snow};

  > :nth-child(1) {
    top: 80px;
    left: 60px;
    transform: scale(0.7);
    ${props => props.no_animation ? '' : `animation: ${shaking(0.7)} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 1.5s infinite;`}
  }

  > :nth-child(2) {
    top: 73px;
    left: 90px;
    transform: scale(0.35);
    ${props => props.no_animation ? '' : `animation: ${shaking(0.35)} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 1s infinite;`}
  }
`

const Snow = styled.div`
  position: absolute;
  background: white;
  height: 40px;
  width: 6px;

  :before, :after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background: inherit;
    left: 0;
  }

  :before {
    transform: rotate(60deg);
  }

  :after {
    transform: rotate(-60deg);
  }
`

export { Snow, SnowContainer }
