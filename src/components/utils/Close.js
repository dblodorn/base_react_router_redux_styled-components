import React from 'react'
import styled from 'styled-components'
import { buttonInit } from './../styles'

export default (props) =>
  <CloseButton onClick={props.ClickFunction}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" width="100%" height="100%">
      <g fill={props.Color}>
        <line fill="none" stroke={props.color} strokeWidth="3px" strokeLinecap="square" strokeMiterlimit="10" x1="54" y1="10" x2="10" y2="54" strokeLinejoin="miter"></line>
        <line fill="none" stroke={props.color} strokeWidth="3px" strokeLinecap="square" strokeMiterlimit="10" x1="54" y1="54" x2="10" y2="10" strokeLinejoin="miter"></line>
      </g>
    </svg>
  </CloseButton>

// STYLES
const CloseButton = styled.button`
  ${buttonInit};
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 6vmin;
  height: 6vmin;
  padding: 0;
  z-index: 11000;
  svg {
    width: 100%;
    height: 100%;
  }
`