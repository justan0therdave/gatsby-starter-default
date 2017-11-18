import React from 'react'
import styled from 'styled-components'

import {
  Button
} from 'rebass'

const StyledButton = styled(Button)`
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.25),
              0 2px 10px 0 rgba(0,0,0,0.1);
  &:hover {
    cursor: pointer;
  }
`

const CustomButton = props => (
  <StyledButton
    {...props}
  />
)

export default CustomButton
