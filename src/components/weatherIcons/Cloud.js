import React from 'react'
import styled from 'styled-components'

import Shadow from './Shadow.js'

const CloudStyled = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  background-color: #e9e9e9;
  border-radius: 0% 20% 20% 0%;
  position: relative;
  opacity: ${props => props.cloudiness};

  :before, :after {
    box-sizing: border-box;
    content: "";
    position: absolute;
    border-radius: 50%;
    background: inherit !important;
  }

  :before {
    width: 150%;
    height: 150%;
    background: tomato;
    bottom: 0;
    left: -75%;
  }

  &.with_shadow:before {
    z-index: 15;
    border-right: 2px solid rgba(208, 208, 208, 0.1);
  }

  :after {
    width: 100%;
    height: 100%;
    background: orange;
    right: -30%;
  }

  &.with_shadow .shadow {
    position: absolute;
    z-index: 10;
    width: 50px;
    left: 0px;
    height: 35px;
    top: -2px;
  }
`

const CloudWrapper = styled.div`

  width: 150px;
  height: 150px;

  > div {
    background-color: white;

    top: 50%;
    left: 50%;
    transform: translate(-30%, -50%);
  }

  > div.small {
    transform: scale(0.45) translateY(-300px);
    top: 65px;
    left: 25px;
    background-color: white;
  }

  > div.with_small {
    z-index: 1;
  }
`

const Cloud = ({ className='', shadow=false, small=false, with_small=false, cloudiness=1, children }) => (
  <CloudWrapper className={className}>
    <CloudStyled cloudiness={cloudiness} className={`cloud${shadow ? ' with_shadow' : ''}${small ? ' small' : ''}${with_small ? ' with_small' : ''}`}>
      {shadow ? <Shadow className={'shadow'} /> : null}
      {children}
    </CloudStyled>
  </CloudWrapper>
)

export default Cloud
