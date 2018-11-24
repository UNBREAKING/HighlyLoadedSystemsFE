import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../constants'

const Modal = ({ children, header, onClose }) =>
  <Wrapper>
    <Content>
      <Header>
        <Title>
          { header }
        </Title>
        <Close onClick={ onClose }>
          &times;
        </Close>
      </Header>
      { children }
    </Content>
  </Wrapper>

export default Modal

const Wrapper = styled.div`
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.4); 
`

const Content = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px 0;
  border: 1px solid #888;
  width: 80%;
`

const Header = styled.div`
  text-align: center;
  border-bottom: 1px solid ${COLORS.black};
  padding: 0 10px 10px 10px;
  font-size: 20px;
`

const Close = styled.span`
  color: #aaaaaa;
  float: right;
  margin-top: -10px;
  font-size: 28px;
  font-weight: bold;

  &:hover, &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`

const Title = styled.span`
`