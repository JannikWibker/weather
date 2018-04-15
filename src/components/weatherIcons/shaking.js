import { keyframes } from 'styled-components'

const shaking = (scale=1, other_before='', other_after='') => keyframes`
  from { transform: ${other_before} translate(0px, 0px) scale(${scale}) ${other_after};  }
  50%  { transform: ${other_before} translate(10px, 0px) scale(${scale}) ${other_after}; }
  to   { transform: ${other_before} translate(0px, 0px) scale(${scale}) ${other_after};  }
`

export default shaking
