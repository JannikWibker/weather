import React, { Component } from 'react'
import styled from 'styled-components'
import Close from './SVG_Close.js'
import Settings from './SVG_Settings.js'

const HeaderWrapper = styled.header`
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: right;
  overflow: hidden;

  > div:nth-child(2) {
    top: 0px;
    right: 0px;
    display: inline-block;
    position: relative;
    height: 48px;
    width: 48px;
  }

  > div:nth-child(2) > svg {
    padding: 12px;
  }

  > div:nth-child(1) {
    display: inline-block;
    position: relative;
    font-size: 20px;
    padding: 0px 8px;
    color: white;
    top: -18px; // THIS DOES NOT MAKE ANY SENSE ON ANY FUCKING LEVEL; WHY IS THIS NEEDED??? CAN CSS NOT JUST LIKE WORK LIKE ITS TOLD TO DO??? WHY DO I HAVE TO 'HACK' EVERYTHING I JUST WANT THIS TO BE AT THE TOP BUT ITS OFFSET BY 18PX FOR SOME FUCKING REASON THAT DOES NOT EXIST AND I NEED TO 'COUNTER-OFFSET' IT BY -18PX TO 'FIX' THIS... WHY???
  }
`

export default class Header extends Component {

  el = null

  render() {
    return (
      <HeaderWrapper>
        <div>{this.props.isSetup ? 'Setup' : this.props.city}</div>
        <div onClick={x => this.props.onViewChange(this.props.isSetup ? 'weather' : 'setup')}>
          {this.props.isSetup
            ? <Close color={'#ffffff'} />
            : <Settings color={'#ffffff'} />
          }
        </div>
      </HeaderWrapper>
    )
  }
}
