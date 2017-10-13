import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {
  Box,
  Button,
  Flex,
  Container
} from 'rebass'

const CustomButton = styled(Button)`
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.25),
              0 2px 10px 0 rgba(0,0,0,0.1);
`

const Cta = props => (
  <Container>
    <Flex>
      <Box
        mx='auto'
        mb={5}
      >
        <Link
          to={props.callToActionLink}
        >
          <CustomButton
            bg='base'
            fontSize={[1, 2, 3]}
            children={props.callToAction}
          />
        </Link>
      </Box>
    </Flex>
  </Container>
)

export default Cta