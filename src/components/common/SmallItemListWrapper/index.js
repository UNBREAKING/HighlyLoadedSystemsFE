import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../constants'

const SmallItemListWrapper = ({ children, title }) =>
  <div>
    <h3>
      { title }
    </h3>
    <Content>
      { children }
    </Content>
  </div>

export default SmallItemListWrapper

const Content = styled.div`
  width: 100%;
  height: 400px;
  overflow-x: none;
  overflow-y: scroll;
  padding: 10px 20px;
  border: 1px solid ${COLORS.black};
  margin-bottom: 20px;
`
