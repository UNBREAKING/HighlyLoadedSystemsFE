import React from 'react'
import styled from 'styled-components'
import { Button } from '../'

export default ({ title, buttonText, onClick }) =>
  <Header>
    <Title>
      { title }
    </Title>
    <Button onClick={ onClick }>
      { buttonText }
    </Button>
  </Header>

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
`