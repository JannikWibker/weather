import React, { Component } from 'react'
import styled from 'styled-components'
import backend from '../utils/backend.js'

import Weather from './Weather.js'
import Header from './Header.js'
import Setup from './Setup.js'

const AppWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${props => props.daytime ? '#46b7e0' : '#7b3463'};
  background: ${props => props.daytime
    ? 'linear-gradient(#46b7e0 325px, #3eacd4)'
    : 'linear-gradient(#7b3463 325px, #3e102f)'
  };
`

const Loading = styled.div`
  position: relative;
  width: 100vw;
  height: 48px;
  margin-top: 96px;
  text-align: center;
  color: white;
`

export default class App extends Component {
  constructor() {
    super()

    this.fetchData = this.fetchData.bind(this)
    this.onViewChange = this.onViewChange.bind(this)
    this.onCityUpdate = this.onCityUpdate.bind(this)

    this.state = {
      city_name: localStorage.getItem('WEATHER_city_name') || 'Münster',
      city_code: localStorage.getItem('WEATHER_city_code') || '2867543',
      unit: localStorage.getItem('WEATHER_unit') || 'C',
      response: {},
      fetching: false,
      done: false,
      view: localStorage.getItem('WEATHER_city_code') && localStorage.getItem('WEATHER_city_name') ? 'weather' : 'setup'
    }
  }

  onViewChange(view) {
    this.setState({
      view: view || (this.state.view === 'setup' ? 'weather' : 'setup')
    })
  }

  onCityUpdate(type, city_code, city_name, unit) {
    if(type === 'CITY_CODE' || type === 'CITY_NAME' || type === 'UNIT' || type === 'NOTHING') {
      if(this.state.city_code !== city_code || this.state.city_name !== city_name || this.state.unit !== unit) {
        console.log(city_code, city_name)
        this.fetchData(city_code, city_name, unit || this.state.unit)
      }
    }
    this.onViewChange('weather')
  }

  fetchData(city_code, city_name, unit) {
    console.log(city_code, city_name)
    backend.weather(city_code, unit)
      .catch(x => this.setState({
        response: x,
        done: false,
      }))
      .then(x => {
        localStorage.setItem('WEATHER_city_code', x.location.city_code)
        localStorage.setItem('WEATHER_city_name', city_name || x.location.city_name)
        localStorage.setItem('WEATHER_unit', unit || 'C')
        this.setState({
        response: x,
        done: true,
        city_code: x.location.city_code,
        city_name: city_name || x.location.city_name,
        unit: unit || 'C'
      }, x => console.log(this.state))
    })
  }

  componentDidMount() {
    this.fetchData(this.state.city_code, this.state.city_name, this.state.unit)
  }

  render() {
    return (
      <AppWrapper daytime={this.state.done ? this.state.response.sun.isDaytime : false}>
        <Header
          isSetup={this.state.view === 'setup'}
          city={this.state.city_name}
          onViewChange={this.onViewChange}
        />
        {this.state.view === 'weather'
          ? (
            this.state.done
              ? <Weather
                  weather={this.state.response}
                  daytime={this.state.response.sun.isDaytime}
                />
              : <Loading><span>Loading</span></Loading>
          ) : (
            <Setup
              initialValue={{ city_name: this.state.city_name || null, city_code: this.state.city_code || null, unit: this.state.unit || 'C' }}
              onChange={this.onCityUpdate}
            />
          )
        }
      </AppWrapper>
    )
  }
}
