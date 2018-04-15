import React, { Component } from 'react'
import styled from 'styled-components'

import backend from '../utils/backend.js'

const SetupWrapper = styled.main`
  position: relative;
  width: 100%;
  height: calc(100% - 48px);

  > div {
    top: 72px;
    position: relative;
  }
`

const InputStyled = styled.div`
  box-sizing: border-box;
  //position: relative;
  width: 320px;
  height: 50px;
  margin: 0 auto;
  font-family: sans-serif;

  > div {
    width: 84px;
    //position: relative;
    display: inline-block;
    margin-right: -1px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
  }

  > div > span {
    box-sizing: border-box;
    width: 84px;
    display: inline-block;
    padding: .250rem .375rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 2.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  > input {
    width: calc(320px - 84px);
    box-sizing: border-box;
    margin: 0px;
    padding: .250rem .375rem;
    font-size: 1rem;
    line-height: 2.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
`

const Seperator = styled.div`
  //position: relative;
  width: 100%;
  font-size: 18px;
  color: white;
  text-align: center;
  margin: 48px 0px;

  :before, :after {
  content: '';
  //position: relative;
  height: 2px;
  width: 36%;
  max-width: 180px;
  display: inline-block;
  margin: 5px 8px;
  background-color: white;
  }
`

const Button = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 128px auto;
  height: 48px;
  width: 192px;
  text-align: center;
  line-height: 48px;
  color: #46b7e0;
  background-color: white;

  > span {
    font-size: 18px;
  }
`

const Headline = styled.h2`
  color: white;
  width: 340px;
  margin: 18px auto;
`


const Input = ({id, label, type='text', placeholder='', innerRef, initialValue='' }) => (
  <InputStyled>
    <div>
      <span id={id}>{label}</span>
    </div>
    <input defaultValue={initialValue} ref={innerRef} aria-describedby={id} aria-label={label} type={type} placeholder={placeholder} />
  </InputStyled>
)

export default class Setup extends Component {

  city_code_el
  city_name_el

  constructor() {
    super()

    this.onDone = this.onDone.bind(this)
  }

  onDone() {
    console.log(this.city_code_el.value, this.city_name_el.value, this.props.initialValue.city_code, this.props.initialValue.city_name)
    // this.props.onChange('UNIT', 'C' / 'F' / 'K')
    if(this.city_code_el.value !== this.props.initialValue.city_code) {
      console.log('city_code changed')
      this.props.onChange('CITY_CODE', this.city_code_el.value, null)
    } else if(this.city_name_el.value !== this.props.initialValue.city_name) {
      console.log('city_name changed')
      backend.city(this.city_name_el.value)
        .then(({id, nm}) =>
          this.props.onChange('CITY_NAME', id, nm)
        )
    } else {
      console.log('nothing changed')
      this.props.onChange('NOTHING', this.city_code_el.value, this.city_name_el.value)
    }
  }

  render() {
    return (
      <SetupWrapper>
        <div><Headline>City</Headline></div>
        <Input initialValue={this.props.initialValue.city_code} innerRef={el => this.city_code_el = el} id='city_code' label='City Code' type='text' placeholder='12345...' />
        <Seperator>or</Seperator>
        <Input initialValue={this.props.initialValue.city_name} innerRef={el => this.city_name_el = el} id='city_name' label='City Name' type='text' placeholder='Cologne...' />
        <div><Headline>Unit</Headline></div>

        <Button
          tabIndex={0}
          onKeyPress={e => e.charCode === 13 || e.charCode === 31 ? this.onDone() : null}
          onClick={this.onDone}
        >
          <span>Done</span>
        </Button>
      </SetupWrapper>
    )
  }
}
