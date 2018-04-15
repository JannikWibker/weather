import React from 'react'
import styled from 'styled-components'

const MoonStyled = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  > .moon-color {
    background-color: #cadcfc;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
  }

  > .moon-mask {
    position: absolute;
    top: calc(-25px * ${props => props.phase});
    left: calc(45px * ${props => props.phase});
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.daytime ? '#46b7e0' : '#7b3463'};
  }
`

const MoonWrapper = styled.div`
  width: 150px;
  height: 150px;

  > div {
    top: calc(100% / 6);
  }

  > div.small {
    z-index: 0;
    transform: scale(0.5) translateY(-300px) rotate(-5deg) ;
    top: -10px;
    left: 30px;
}
`

const Moon = ({ className='', daytime=false, shadow=false, small=false, with_small=false, phase=1, children }) => (
  <MoonWrapper className={className}>
    <MoonStyled phase={phase} className={`moon${shadow ? ' with_shadow' : ''}${small ? ' small' : ''}${with_small ? ' with_small' : ''}`}>
      <div className="moon-color" />
      <div className="moon-mask" />
      {children}
    </MoonStyled>
  </MoonWrapper>
)

export default Moon
