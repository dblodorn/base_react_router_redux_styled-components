import React from 'react'
import styled from 'styled-components'
import { StyledLink } from './../../styles/components'
import { flexRowCenteredVert, bodyType } from './../../styles/mixins'
import { heights, spacing, colors } from './../../styles/theme.json'
import Menu from './../menus/Menu'
import withStore from './../HOC/withStore'

export default withStore((props) =>
  <HeaderWrapper>
    <Logo to={'/'}>
      <span>{props.content.meta_defaults.title}</span>
    </Logo>
    <Menu location={0}/>
  </HeaderWrapper>
)

/* STYLES */
const HeaderWrapper = styled.header`
  width: 100vw;
  ${flexRowCenteredVert};
  height: ${heights.header};
  padding: 0 ${spacing.double_pad};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  border-bottom: 1px solid ${colors.black};
  background-color: ${colors.header_bg_color};
  * {
    color: ${colors.header_type_color}!important;
  }
`

const Logo = styled(StyledLink)`
  ${bodyType};
`
