import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  margin: 2rem auto;
  width: 25%;
  @media (min-width: 32em) { width: 12.5%; }
`
const P = styled.p`
  text-align: center;
`

const Logo = props => (
  <P>
    <Svg
      viewBox='0 0 90 150'
    >
      <g fill='none' fillRule='evenodd'>
        <path fill='#FFF' d='M0 0h90v150H0z' />
        <path d='M2.49 59.02c0-6.877 3.212-10.884 8.39-10.884 5.52 0 8.428 4.688 8.428 10.13 0 1.02 0 1.132-.34 1.132l-6.992.267c-.34 0-.68-.305-.68-.757v-2.38c0-.53-.303-.72-.605-.72-.3 0-.6.267-.6.683v11.76c0 .38.27.65.61.65.38 0 .61-.3.61-.68V64.4c0-.23.15-.568.46-.53l7.148.265c.188 0 .3.15.3.303 0 9.104-3.74 12.24-8.503 12.24-5.252 0-8.2-4.722-8.2-10.127v-7.53zm29.667-10.807c.264 0 .453.228.49.49l5.18 27.024c.075.416-.116.832-.53.832h-6.123c-.227 0-.453-.15-.49-.38l-.757-5.67c-.038-.19-.188-.31-.378-.31H27.5c-.15 0-.302.15-.34.38l-.718 5.55c-.04.26-.304.42-.49.42H19.72c-.34 0-.53-.27-.454-.65l5.063-27.25c.04-.19.22-.46.45-.46h7.37zM28.83 62.46c-.074-.528-.15-.868-.264-.868-.114 0-.188.265-.265.87l-.49 3.59c-.03.19.04.377.23.377 1.21 0 1.32 0 1.29-.34l-.49-3.63zm23.734 6.274c.266 0 .416.19.416.38v7.03c0 .226-.188.415-.416.415h-13.53c-.228 0-.416-.23-.416-.5V48.74c0-.23.227-.53.49-.53h6.39c.227 0 .377.188.377.416v19.84c0 .15.113.263.227.263h6.462zm15.72 0c.267 0 .417.19.417.38v7.03c0 .226-.18.415-.41.415H54.76c-.23 0-.417-.23-.417-.5V48.74c0-.23.228-.53.49-.53h6.388c.23 0 .38.188.38.416v19.84c0 .15.11.263.23.263h6.46zM2.49 86.59c0-5.856 3.665-8.692 7.86-8.692s7.86 2.836 7.86 8.693v11.19c0 5.82-3.703 8.66-7.86 8.66s-7.86-2.79-7.86-8.65v-11.2zm7.256 11.076c0 .565.188.98.604.98.415 0 .604-.415.604-.98v-10.96c0-.493-.19-1.022-.604-1.022-.416 0-.604.49-.604 1.02v10.962zm9.75-19.163c0-.266.188-.53.453-.53h13.6c.26 0 .45.19.45.417v6.576c0 .264-.23.49-.49.49h-6.12c-.23 0-.42.152-.42.416v2.268c0 .19.11.342.38.342h3.23c.18 0 .41.188.41.377v6.84c0 .22-.19.41-.46.41h-3.2c-.188 0-.378.26-.378.49v9.18c0 .34-.19.53-.49.53H19.9c-.19 0-.415-.23-.415-.49V78.5zm23.62 27.817c-.265 0-.53-.228-.53-.53V86.063c0-.266-.226-.453-.49-.453h-3.78c-.227 0-.49-.304-.49-.53v-6.728c0-.225.112-.377.34-.377H54.34c.266 0 .49.152.49.454v6.65c0 .3-.227.53-.528.53h-3.778c-.266 0-.453.18-.453.52v19.69c0 .26-.22.49-.52.49h-6.43zm13.038-27.97c0-.224.15-.376.377-.376h6.35c.23 0 .35.113.35.303v9.902c0 .15.11.26.27.26h.76c.19 0 .34-.15.34-.27v-9.86c0-.19.12-.34.31-.34h6.39c.23 0 .38.15.38.34v27.59c0 .19-.114.41-.304.41h-6.43c-.19 0-.34-.23-.34-.42v-9.86c0-.15-.075-.3-.23-.3h-.87c-.185 0-.26.15-.26.3v9.9c0 .19-.153.38-.344.38h-6.24c-.26 0-.49-.265-.49-.568v-27.4zm17.006.114c0-.227.227-.49.492-.49h13.416c.227 0 .377.19.377.416v6.803c0 .228-.188.377-.416.377h-6.32c-.15 0-.27.115-.27.267v2.115c0 .15.15.266.26.266h2.99c.15 0 .26.113.26.267v6.877c0 .188-.15.34-.305.34H80.6c-.15 0-.263.113-.263.303v2.23c0 .15.112.264.226.264h6.54c.265 0 .415.18.415.37v7.03c0 .22-.188.41-.416.41h-13.53c-.228 0-.416-.23-.416-.49V78.46zM2.72 108.362c0-.268.153-.457.42-.457h7.086c4.952 0 7.77 3.695 7.77 6.857 0 2.285-.037 5.79-3.885 6.97v.077c2.4.87 4 3.42 4 6.4 0 1.94-.03 8.26-7.92 8.26H3.1c-.267 0-.38-.19-.38-.42v-27.69zm6.82 10.285c0 .154.115.27.268.27.533 0 1.104-.346 1.104-1.105v-3.275c0-.686-.647-.99-1.104-.99-.152 0-.267.076-.267.23v4.87zm0 11.85c0 .15.077.268.268.268.61 0 1.144-.457 1.144-1.105v-4c0-.646-.572-1.03-1.182-1.03-.152 0-.23.116-.23.308v5.558zm18.78-22.592c3.353 0 7.353 2.59 7.353 7.238 0 2.058-.38 5.828-4 6.36v.077c4.647 1.334 4.647 3.81 4.647 7.695 0 .457.19.914 1.028 1.256.19.12.344.39.344.54 0 5.18-3.81 5.49-5.067 5.49-2.742 0-4.57-1.9-4.57-5.48v-5.87c0-1.22-.534-1.82-.953-1.82-.23 0-.266.19-.266.46v12.185c0 .23-.19.46-.458.46h-6.515c-.266 0-.457-.19-.457-.497v-27.62c0-.27.19-.457.42-.457h8.495zm-1.485 11.848c0 .268.075.342.266.342.92 0 .92-1.064.92-2.818 0-.875-.53-1.37-.87-1.37-.19 0-.3.114-.3.344v3.51zm24.075-11.848c.267 0 .457.23.496.496l5.218 27.24c.076.42-.113.84-.533.84h-6.17c-.22 0-.45-.15-.49-.38l-.76-5.71c-.04-.19-.19-.3-.38-.3h-2.06c-.15 0-.3.15-.34.38l-.72 5.6c-.04.27-.3.42-.49.42h-6.29c-.34 0-.53-.26-.454-.64l5.104-27.47c.037-.19.23-.45.457-.45h7.43zm-3.353 14.362c-.074-.533-.15-.875-.267-.875-.113 0-.188.267-.267.875l-.496 3.62c-.037.19.04.38.23.38 1.22 0 1.333 0 1.295-.342l-.495-3.658zm15.14-2.057c.037.19.15.305.19.305.075 0 .19-.115.19-.305l1.6-11.81c.075-.268.228-.495.457-.495h6.553c.228 0 .38.23.342.496l-5.3 27.62c-.04.27-.23.46-.5.46H58.8c-.23 0-.417-.27-.456-.46L53.2 108.33c-.037-.19.038-.42.27-.42h6.817c.23 0 .42.115.457.385l1.943 11.92zm10.46-11.81c0-.228.227-.495.493-.495h13.522c.23 0 .382.19.382.42v6.857c0 .228-.19.38-.418.38h-6.363c-.15 0-.267.114-.267.268v2.133c0 .15.152.27.267.27h3.01c.152 0 .268.114.268.265v6.934c0 .19-.15.344-.3.344h-3.09c-.15 0-.26.113-.26.306v2.248c0 .15.12.266.23.266h6.59c.27 0 .42.19.42.384v7.084c0 .23-.19.42-.42.42H73.58c-.23 0-.42-.23-.42-.496V108.4z' fill='#231f20' />
        <path d='M60.633 13.447H3.21c-.46 0-.844.23-.844.77v13.4c0 15.862 12.722 15.94 16.632 15.94 5.977 0 11.11-3.22 12.874-8.047h.098c1.763 4.827 6.897 8.048 12.874 8.048 3.91 0 16.63-.078 16.63-15.94V14.216c0-.537-.384-.77-.843-.77zm-36.5 16.068h-8.047c-1.303 0-2.222-1.438-2.222-2.664 0-.38.23-.53.537-.53h11.19c.39 0 .62.16.62.46 0 1.23-.76 2.74-2.07 2.74zm23.625 0H39.71c-1.303 0-2.07-1.514-2.07-2.74 0-.308.23-.46.614-.46h11.188c.308 0 .537.153.537.537 0 1.224-.92 2.663-2.23 2.663z' fill='#C92929' />
        <path d='M22.227 27.774c-.115.037-.235.062-.362.062-.655 0-1.187-.532-1.187-1.188 0-.116.02-.23.05-.337h-2.473c-.215.34-.34.74-.34 1.17 0 .94.602 1.74 1.44 2.04h1.456c.75-.26 1.31-.93 1.42-1.74zm23.728 0c-.115.037-.234.062-.362.062-.656 0-1.188-.532-1.188-1.188 0-.116.02-.23.052-.337h-2.474c-.216.34-.34.74-.34 1.17 0 .94.6 1.74 1.438 2.04h1.46c.75-.26 1.3-.93 1.42-1.74z' fill='#231f20' />
      </g>
    </Svg>
  </P>
)

export default Logo
