import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Button } from '../'

const BigItemListWrapper = ({ children, text }) =>
<Fragment>
  { children }
  <AddItemsToListButton>
    { text }
  </AddItemsToListButton>
</Fragment>

export default BigItemListWrapper

const AddItemsToListButton = styled(Button)`
  width: 80%;
  margin-bottom: 20px;
  font-size: 20px;
`
