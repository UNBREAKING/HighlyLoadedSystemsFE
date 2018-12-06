import React from 'react'
import styled from 'styled-components'

const SmallItemListWrapper = ({ children, title }) =>
  <Wrapper>
    <Header>
      { title }
    </Header>
    <Content>
      { children }
    </Content>
  </Wrapper>

export default SmallItemListWrapper

const Wrapper = styled.div`
`

const Header = styled.h3`
`

const Content = styled.div`
  width: 100%;
  height: 400px;
  overflow-x: none;
  overflow-y: scroll;
  padding: 10px 20px;
`