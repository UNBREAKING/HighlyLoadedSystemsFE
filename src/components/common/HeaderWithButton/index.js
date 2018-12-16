import React from 'react'
import styled from 'styled-components'
import { Button } from '../'

export default ({ title, buttonText }) =>
  <Header>
    <Title>
      { title }
    </Title>
    <Button>
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