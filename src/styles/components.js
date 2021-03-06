import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { heights, spacing, shared, colors, widths } from './theme.json'
import * as _ from './mixins'

// DOM NODES
const Section = styled.section`
  width: 100%;
  ${_.flexColumn};
`

const Article = styled.article`
  ${_.wrapperWidths};
  padding-left: ${spacing.double_pad};
  padding-right: ${spacing.double_pad};
`

const PadWrapper = styled.div`
  ${_.mainPadding};
  &.add-top-border {
    border-top: ${shared.border_thin};
  }
`

const GridWrapper = styled.ul`
  ${_.wrapperWidths};
  ${_.flexRowWrap};
  ${_.grid};
`

const ProportionWrapper = styled.div`
  height: 0;
  overflow-y: visible;
  position: relative;
  width: 100%;
  padding-bottom: ${props => `${props.Mobile}%` || `100%`};
  ${_.media.medium`
    padding-bottom: ${props => `${props.Desktop}%` || `50%`};
  `}
  ${_.media.big`
    padding-bottom: ${props => `${props.Maximum}%` || `45%`};
  `}
`

// TYPE
const H1 = styled.h1`
  ${_.bigType};
  padding-bottom: ${spacing.single_pad};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.display_font};
  text-transform: ${props => props.theme.display_case};
`

const H2 = styled.h2`
  ${_.mediumType};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.display_font};
`

const H3 = styled.h3`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.display_font};
`

const H4 = styled.h4`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.display_font};
`

const H5 = styled.h5`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  font-family: ${props => props.theme.display_font};
`

const H6 = styled.h6`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  font-family: ${props => props.theme.display_font};
`

const P = styled.p`
  ${_.bodyType};
  font-family: ${props => props.theme.body_copy_font};
`

const SmallP = styled.p`
  ${_.smallType};
  font-family: ${props => props.theme.body_copy_font};
`

const StyledButton = styled.button`
  ${_.buttonStyle};
`

const ButtonLink = styled(Link)`
  ${_.buttonStyle};
`

const StyledMarkup = styled.div`
  &.pad-top {
    padding-top: ${spacing.double_pad};
  }
  h1 {
    ${_.bigType};
    color: ${props => props.theme.display_font_color}!important;
    font-family: ${props => props.theme.display_font}!important;
  }
  h2 {
    ${_.mediumType};
    color: ${props => props.theme.display_font_color}!important;
    font-family: ${props => props.theme.display_font}!important;
  }
  h3 {
    ${_.bodyType};
    color: ${props => props.theme.body_copy_color}!important;
    font-family: ${props => props.theme.display_font}!important;
  }
  h4 {
    ${_.bodyType};
    color: ${props => props.theme.body_copy_color}!important;
    font-family: ${props => props.theme.body_copy_font}!important;
  }
  h5 {
    ${_.bodyType};
    color: ${props => props.theme.body_copy_color}!important;
    font-family: ${props => props.theme.body_copy_font}!important;
  }
  h6 {
    ${_.bodyType};
    color: ${props => props.theme.body_copy_color}!important;
    font-family: ${props => props.theme.body_copy_font}!important;
  }
  p {
    ${_.bodyType};
    color: ${props => props.theme.body_copy_color}!important;
    font-family: ${props => props.theme.body_copy_font}!important;
    margin-bottom: ${spacing.single_pad};
    max-width: ${widths.max_medium};
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    ${_.defaultLink};
    color: ${props => props.theme.display_font_color}!important;
    font-family: ${props => props.theme.body_copy_font}!important;
  }
`

// UI
const StyledLink = styled(Link)`
  ${_.defaultLink};
  color: ${props => props.theme.display_font_color}!important;
`

const NavItem = styled.li`
  padding-bottom: ${spacing.double_pad};
  &:last-child {
    padding-bottom: 0;
  }
  ${_.media.medium`
    padding-right: ${spacing.double_pad};
    padding-bottom: 0;
    &:last-child {
      padding-right: 0;
    }
  `}
  &.active {
    pointer-events: none!important;
    text-decoration: underline;
    * { color: ${colors.active_color}; }
  }
  &.sidebar {
    ${_.media.desktopNav`
      padding-bottom: ${spacing.double_pad};
      padding-right: 0;
      &.footer {
        padding-bottom: 0;
        padding-right: ${spacing.double_pad};
        &:last-child {
          padding-right: 0;
        }
      }
    `}
  }
  &.top-horizontal {}
`

const SocialLink = styled.a`
  display: block;
  width: 3rem;
  height: 3rem;
  svg {
    width: 100%;
    height: auto;
  }
`

// WRAPPERS
const LogoWrapperFixedTopRight = styled.div`
  position: fixed;
  top: ${props => props.position_sm};
  right: ${props => props.position_sm};
  z-index: 9000;
  ${_.media.medium`
    top: ${props => props.position_med};
    right: ${props => props.position_med};
  `}
`

const FullPageBgWrapper = styled.aside`
  ${_.fixedTopLeft};
  width: 100%;
  height: 100vh;
  z-index: 0;
`

const ModalWrapper = styled.div`
  ${_.flexCenteredAll};
  position: fixed;
  z-index: 12000;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.popup_bg_color || colors.black};
  padding: calc(${heights.header} / 2) 0;
  ${_.media.desktopNav`
    padding: calc(${heights.header} / 2);
  `}
`

const ModalContentWrapper = styled.div`
  ${_.flexCenteredAll};
  max-height: ${props => props.maxHeight};
  width: 100%;
  height: 100%;
  max-width: 100rem;
  position: relative;
`

const CloseButton = styled.button`
  ${_.buttonInit};
  width: ${props => props.size || '5rem'};
  height: ${props => props.size || '5rem'};
  position: absolute;
  top: .75rem;
  right: .75rem;
  padding: 0;
  z-index: 11000;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`

// POST COLLECTION
const ExcerptWrapper = styled.div`
  ${_.opacityTransition};
  padding: ${spacing.double_pad} ${spacing.double_pad} 0;
`

const ProjectTitle = styled.h3`
  ${_.bigType};
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.display_font};
  text-transform: ${props => props.theme.display_case};
  padding: ${spacing.double_pad} ${spacing.double_pad} 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
`

const CardP = styled(P)`
  color: ${props => props.theme.display_font_color}!important;
  font-family: ${props => props.theme.body_copy_font};
  max-width: ${widths.max_small};
`

const ImgFit = styled.img`
  ${_.absoluteCentered};
  width: 100%;
  height: 100%;
  object-fit: ${props => props.Fit};
`

const CarouselWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 56.25vw;
  position: relative;
  max-height: 100vh;
  ${_.fixedHero(0, 0, 0)}
  &.sidebar {
    padding-left: ${widths.sidebar_desktop};
  }
`

const CloseWrapper = styled.div`
  ${_.flexRowCenteredVert};
  justify-content: flex-end;
  width: calc(${heights.header} - .5rem);
  height: ${heights.header};
  margin-left: ${spacing.single_pad};
`

const CaptionWrapper = styled.div`
  position: fixed;
  bottom: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  ${_.media.desktopNav`
    bottom: 0;
    left: ${spacing.single_pad};
    justify-content: flex-start;
    * { 
      text-align: left!important;
    }
  `}
`

export {
  Section,
  Article,
  PadWrapper,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  SmallP,
  StyledMarkup,
  SocialLink,
  StyledLink,
  LogoWrapperFixedTopRight,
  FullPageBgWrapper,
  NavItem,
  ButtonLink,
  StyledButton,
  GridWrapper,
  ProportionWrapper,
  ModalWrapper,
  ModalContentWrapper,
  CloseButton,
  ExcerptWrapper,
  ProjectTitle,
  CardP,
  ImgFit,
  CarouselWrapper,
  CloseWrapper,
  CaptionWrapper
}