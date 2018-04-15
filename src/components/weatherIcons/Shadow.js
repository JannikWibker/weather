import styled from 'styled-components'

const Shadow = styled.div`
  width: 100px;
  height: 100px;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(66, 66, 66, 0.1)), to(transparent));
  background-image: linear-gradient(rgba(66, 66, 66, 0.1) 0%, transparent 100%);
  -webkit-transform: skewX(45deg);
  transform: skewX(45deg);
`

export default Shadow
