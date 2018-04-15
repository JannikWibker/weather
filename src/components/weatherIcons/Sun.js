import React from 'react'
import styled from 'styled-components'

import Shadow from './Shadow.js'

const SunStyled = styled.div`
  background-color: #fdda3f;

  border-radius: 50%;

  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  &.with_shadow .shadow {
    position: relative;
    top: 76px;
    left: -36px;
    height: 45px;
  }
`

const SunWrapper = styled.div`
  width: 150px;
  height: 150px;

  > div {
    top: calc(100% / 6);
  }

  > div.small {
    z-index: 0;
    transform: scale(0.5) translateY(-300px);
    top: -5px;
    left: 26px;
  }
`

const Sun = ({ className='', shadow=false, small=false, with_small=false, children }) => (
  <SunWrapper className={className}>
    <SunStyled className={`sun${shadow ? ' with_shadow' : ''}${small ? ' small' : ''}${with_small ? ' with_small' : ''}`}>
      {shadow ? <Shadow className={'shadow'} /> : null}
      {children}
    </SunStyled>
  </SunWrapper>
)

export default Sun
