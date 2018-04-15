import React, { Component } from 'react'
import styled from 'styled-components'

import { Sun, Moon, Cloud } from './weatherIcons/main.js'

import Sky from './Sky.js'
import Details from './Details.js'


const TemperatureStyled = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 150px;

  padding-left: 24px;
  //color: ${props => props.daytime ? 'black' : 'white'};
  color: white;

  > div strong {
    font-size: 56px;
  }

  > div > div {
    width: 100px;
    height: 100px;
    transform: scale(0.3);
    display: inline-block;
    left: -20px;
    top: 20px;
    position: relative;
  }

  > span {
    display: inline-block;
    position: relative;
    top: -20px;
    padding-left: 4px;
  }
`

const DetailsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;

  > :nth-child(1) {
    position: absolute;
    width: 100%;
    height: 150px;
  }

  > :nth-child(2) {
    position: absolute;
    top: 150px;
    width: 100%;
    height: 100px;
  }
`

const Temperature = ({ temp, unit, icon, daytime=false }) => (
  <TemperatureStyled daytime={daytime}>
    <div>
      <strong>{temp.current}{'°'}</strong>
      <div>
        {daytime
          ? <Sun daytime={daytime} with_small={true} />
          : <Moon daytime={daytime} with_small={true} />
        }
        <Cloud small={true} />
      </div>
    </div>
    <br />
    <span>{temp.min}° / {temp.max}°{unit}</span>
  </TemperatureStyled>
)

export default class Weather extends Component {

  render() {
    return (
      <div>
        <Sky
          daytime={this.props.daytime}
          cloudiness={this.props.weather.clouds}
          rain={this.props.weather.rain}
          snow={this.props.weather.snow}
        />

        <DetailsContainer>

          <Temperature
            temp={this.props.weather.temp}
            unit={'C'}
            daytime={this.props.daytime}
          />

          <Details
            city={this.props.weather.location.city_name}
            country={this.props.weather.location.country}
            cloudiness={this.props.weather.clouds}
            humidity={this.props.weather.humidity}
          />

        </DetailsContainer>
      </div>
    )
  }
}
