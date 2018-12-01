import React, { Fragment } from 'react'
import styled from 'styled-components'

const BigItemListWrapper = ({ children, text }) =>
<Fragment>
  { children }
  <CommonAddButton>
    { text }
  </CommonAddButton>
</Fragment>

export default BigItemListWrapper

const CommonAddButton = styled.button`

`
