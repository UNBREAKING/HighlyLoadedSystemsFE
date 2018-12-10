import React from 'react'
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'
import { Button } from '../common'

const CommonAddButton = () =>
  <AddButton>
    <Icon fontSize="large">add_box</Icon>
  </AddButton>

export default CommonAddButton

const AddButton = styled(Button)`
  display: block;
  width: 100%;
`