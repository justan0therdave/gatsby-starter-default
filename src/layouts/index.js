import React from 'react'
import palx from 'palx'
import { Provider } from 'rebass'
import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
  }
`

const palette = palx('#c92929')

const flattened = Object.keys(palette)
   .reduce((a, key) => {
     const value = palette[key]
     if (Array.isArray(value)) {
       a[key] = value[5]
       value.forEach((val, i) => {
         a[key + i] = val
       })
     } else {
       a[key] = value
     }
     return a
   }, {})

export const colors = Object.assign({}, flattened, {
  black: '#231f20',
  jet: '#070606',
  white: '#ffffff'
})

const TemplateWrapper = props => (
  <Provider
    theme={{
      font: '"FuturaStd-Book", sans-serif',
      fontSizes: [
        12, 16, 24, 32, 48, 64
      ],
      colors: colors
    }}
  >
    {props.children()}
  </Provider>
)

export default TemplateWrapper
