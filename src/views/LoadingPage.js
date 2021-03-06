import React from 'react'
import styled from 'styled-components'
import { fullWindow } from './../styles/mixins'
import { Spinner, Logo } from './../components'
import { colors } from './../styles/theme.json'
import { meta_defaults } from './../config.json'

export default () =>
  <LoadingWrapper>
    <Logo theme={'a'} title={meta_defaults.title}/>
    <Spinner size={'40vmin'} color={colors.black} stroke={1} />
  </LoadingWrapper>

// STYLES
const LoadingWrapper = styled.div`
  ${fullWindow};
  background-color: ${colors.white};
`