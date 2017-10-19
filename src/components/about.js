import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import {
  Container,
  Lead
} from 'rebass'

const CustomLead = styled(Lead)`
  white-space:pre-wrap;
`

const About = props => (
  <Container
    mt={5}
    mb={5}
    w={[320, 540, 720]}
  >
    <Element
      name='about'
    >
      <CustomLead
        f={[1, 2, 3]}
        children={props.children}
      />
    </Element>
  </Container>
)

export default About
