import React from 'react'
import styled from 'styled-components'

// Components
import Sun from './Sun.js'
import Moon from './Moon.js'
import Cloud from './Cloud.js'
import { Raindrop, RaindropContainer } from './Raindrop.js'
import { Snow, SnowContainer } from './Snow.js'

const MoonContainer = styled.div`
  .moon-left .bg {
    fill: ${props => props.color_mask};
  }

  .moon-left .fg {
    fill: ${props => props.color_moon};
  }
`

const MoonTest = ({ phase=1, color_moon='white', color_mask='black', diameter=100 }) => (
  <MoonContainer color_moon={color_moon} color_mask={color_mask} className="moon" style={{position: 'relative', width: diameter, height: diameter, transform: 'rotate(150deg)'}}>
  <svg height={diameter} width={diameter/2} className="moon-left">
    <circle cx={diameter/2} cy={diameter/2} r={diameter/2} fill={color_moon} className="bg"></circle>
    <circle cx={diameter/2} cy={diameter/2} r={diameter/2} fill={color_mask} className="fg" style={{transform: phase >= 1
      ? `translate(${diameter/2 * (1-(phase-1))}px, 0px) scaleX(${1-(phase-1)})`
      : `translate(${diameter/2}px, 0px) scaleX(0)`
    }}></circle>
    </svg>
    <svg height={diameter} width={diameter/2} className="moon-right">
      <circle cx={0} cy={diameter/2} r={diameter/2} fill={color_moon} className="bg"></circle>
      <circle cx={0} cy={diameter/2} r={diameter/2} fill={color_mask} className="fg" style={{transform: phase < 1
        ? `scaleX(${1-phase})`
        : 'scaleX(0)'
      }}></circle>
    </svg>
  </MoonContainer>
)

export {
  Sun,
  Moon,
  Cloud,
  MoonTest,
  Raindrop,
  RaindropContainer,
  Snow,
  SnowContainer,
}
