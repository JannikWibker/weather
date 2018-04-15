import React from 'react'
import styled from 'styled-components'

import { Cloud, Raindrop, RaindropContainer } from './weatherIcons/main.js'

const DetailsStyled = styled.div`
  box-sizing: border-box;
  padding-left: 24px;
  color: white;

  > div {
    position: absolute;
  }

  .cloud-container {
    height: 100px;
    transform: translate(-10px, -40px) scale(0.2);
  }

  > div:nth-child(4) {
    top: 72px;
  }
`

export default ({ daytime=false, city, country, cloudiness, humidity }) => (
  <DetailsStyled>
    <span>{city}, {country}</span><br /><br />

    <div>{cloudiness}%</div>
    <Cloud className="cloud-container" small={false} shadow={true} />

    <div>{ humidity }%</div>
    <RaindropContainer no_animation={true} style={{transform: 'translate(38px, 20px) scale(0.37)'}}>
      <Raindrop />
      <Raindrop />
      <Raindrop />
    </RaindropContainer>
  </DetailsStyled>
)
