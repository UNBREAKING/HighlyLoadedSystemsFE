import React from 'react'
import styled, { css } from 'styled-components'

class Container extends React.Component {
  render() {
    return <Wrapper container> Container</Wrapper>;
  }
}

const App = () => 
  <Wrapper>
    <Button red>
      Red button
    </Button>
    <Button blue>
      Blue button
    </Button>
    <Container />
    <Container />
  </Wrapper>

const Wrapper = styled.div`
  width: 100%;
  ${ props => props.container && css `
    background: black;
    color: #fff;
  `}
`

const Button = styled.button`
  color: #fff;
  border-radius: 2px;
  border: none;
  padding: 10px 20px;
  ${props => props.red && css`
    background: red;
  `}
  ${props => props.blue && css`
    background: blue;
  `}
`

export default App
