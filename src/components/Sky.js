import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Sun, Moon, Cloud, Raindrop, RaindropContainer, Snow, SnowContainer } from './weatherIcons/main.js'

const moon_to_sun_to_moon_color = keyframes`
  10% { background-color: #cadcfc; }
  40% { background-color: #fdda3f; }
  60% { background-color: #fdda3f; }
  80% { background-color: #cadcfc; }
`

const moon_to_sun_to_moon_mask = keyframes`
  20% { opacity: 1; }
  40% { opacity: 0; }
  60% { opacity: 0; }
  80% { opacity: 1; }
`

const moon_to_sun_to_moon = keyframes`
  from { transform: rotate(0deg);   }
  10%  { transform: rotate(0deg);   }
  40%  { transform: rotate(180deg); }
  60%  { transform: rotate(180deg); }
  90%  { transform: rotate(360deg); }
  to   { transform: rotate(360deg); }
`

// const shaking = keyframes`
//   from { transform: translate(0px, 0px);  }
//   50%  { transform: translate(10px, 0px); }
//   to   { transform: translate(0px, 0px);  }
// `

const shaking = (scale=1, other_before='', other_after='') => keyframes`
  from { transform: ${other_before} translate(0px, 0px) scale(${scale}) ${other_after};  }
  50%  { transform: ${other_before} translate(10px, 0px) scale(${scale}) ${other_after}; }
  to   { transform: ${other_before} translate(0px, 0px) scale(${scale}) ${other_after};  }
`

const IconContainer = styled.div`
  margin: 0 auto;
  padding: 53px;
  width: 150px;
  height: 170px;
  //background-color: ${props => props.daytime ? '#46b7e0' : '#7b3463'};
  overflow: hidden;
`

const IconsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 192px;

  > div {
    padding: 0;
    float: left;
  }

  > :nth-child(3) {
    transform: translate(0px, 25px) scale(0.8);
  }

  > :nth-child(6) {
    margin-right: 40px;
    float: right;
    display:block;
    animation: ${shaking()} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 0s infinite;
  }

  > :nth-child(5) {
    margin-right: 80px;
    float: right;
    display: block;
    transform: scale(0.5);
    animation: ${shaking(0.5)} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 0.5s infinite;
  }

  @media(max-width: 550px) {
    > :nth-child(3) {
      transform: translate(120px, 25px) scale(0.8);
    }
  }

  @media(max-width: 600px) {
    > :nth-child(6) {
      display: none;
    }
  }

  @media(max-width: 750px) {
    > :nth-child(5) {
      display: none;
    }
  }

  @media(max-width: 1000px) {
    > :nth-child(5) {
      margin-right: 0px;
    }

    > :nth-child(6) {
      margin-right: 0px;
    }
  }

  > :nth-child(1) {
    transform: translateX(-10px) scale(0.5);
  }

  > :nth-child(1) > :nth-child(1) {
    animation: ${shaking()} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 1s infinite;
  }

  > :nth-child(2) {
    position: absolute;
    left: calc((100% - 150px) / 2);
  }

  // > :nth-child(2) > :nth-child(1) > div {
  //   animation: ${moon_to_sun_to_moon} 4s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite;
  //   > :nth-child(1) {
  //     animation: ${moon_to_sun_to_moon_color} 4s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite;
  //   }
  //   > :nth-child(2) {
  //     animation: ${moon_to_sun_to_moon_mask} 4s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite;
  //   }
  // }

  > :nth-child(2) > :nth-child(2) {
    animation: ${shaking()} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 0s infinite;
  }

  // > :nth-child(3) {
  //   transform: translate(120px, 25px) scale(0.8);
  // }

  > :nth-child(3) > :nth-child(1) {
    animation: ${shaking()} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 1.5s infinite;
  }

  > :nth-child(4) {
    transform: translate(-35px, -75px) scale(0.3);
  }

  > :nth-child(4) > :nth-child(1) {
    animation: ${shaking()} 4s cubic-bezier(0.4, 0.01, 0.6, 1.00) 2s infinite;
  }
`

export default ({ daytime, cloudiness=1, rain=0, snow=0 }) => (
  <IconsContainer>
    <IconContainer daytime={daytime}>
      <Cloud shadow={true} cloudiness={cloudiness / 100} />
      {snow >= rain
        ? <SnowContainer snow={snow / 100} style={{top: 30}}><Snow /></SnowContainer>
        : <RaindropContainer rain={rain / 100} style={{top: -30, left: 40}}><Raindrop /></RaindropContainer>
      }
    </IconContainer>
    <IconContainer daytime={daytime}>
      {daytime
        ? <Sun daytime={daytime} with_small={true} />
        : <Moon daytime={daytime} with_small={true} />
      }
      <Cloud small={true} cloudiness={cloudiness / 100} />
    </IconContainer>
    <IconContainer daytime={daytime}>
      <Cloud shadow={true} cloudiness={cloudiness / 100} />
      {snow >= rain
        ?  <SnowContainer snow={snow / 100} style={{top: 30}}><Snow /><Snow /></SnowContainer>
        : <RaindropContainer rain={rain / 100} style={{top: -38, left: 42}}><Raindrop /><Raindrop /><Raindrop /></RaindropContainer>
      }

    </IconContainer>
    <IconContainer daytime={daytime}>
      <Cloud shadow={false} cloudiness={cloudiness / 100} />
    </IconContainer>

    <IconContainer daytime={daytime}>
      <Cloud shadow={true} cloudiness={cloudiness / 100} />
      {snow >= rain
        ? <SnowContainer snow={snow / 100} style={{top: 30}}><Snow /></SnowContainer>
        : <RaindropContainer rain={rain / 100} style={{top: -30, left: 40}}><Raindrop /></RaindropContainer>
      }
    </IconContainer>

    <IconContainer daytime={daytime}>
      <Cloud shadow={true} cloudiness={cloudiness / 100} />
      {snow >= rain
        ? <SnowContainer snow={snow / 100} style={{top: 30}}><Snow /><Snow /></SnowContainer>
        : <RaindropContainer rain={rain / 100} style={{top: -30, left: 40}}><Raindrop /><Raindrop /><Raindrop /></RaindropContainer>
      }
    </IconContainer>

  </IconsContainer>
)
