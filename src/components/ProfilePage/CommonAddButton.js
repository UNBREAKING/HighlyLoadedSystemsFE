import React from 'react'
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { getTrueUrl } from '../../helpers'
import { CommonLinkButton } from '../common'

const CommonAddButton = ({ to }) =>
  <AddButton to={ getTrueUrl(to) }>
    <Icon fontSize="large">add_box</Icon>
  </AddButton>

export default CommonAddButton

const AddButton = styled(CommonLinkButton)`
  display: block;
  width: 100%;
  text-align: center;
`