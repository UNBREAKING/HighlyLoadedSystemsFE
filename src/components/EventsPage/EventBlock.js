import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CommonLinkButton } from '../common'
import { COLORS } from '../../constants'

const EventBlock = () => 
  <Wrapper>
    <Title>
      Новый год 2018
    </Title>
    <CommonInfoWithLink>
      <Address to="/place">
        кальянная №1
      </Address>
      <LastWorkingHour>
        до 23.00
      </LastWorkingHour>
      <CommonLinkButton to="/place">
        Подробнее
      </CommonLinkButton>
    </CommonInfoWithLink>
  </Wrapper>

export default EventBlock

const Wrapper = styled.div`
  width: 80%;
  border: 3px solid ${COLORS.black};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px 20px;
  :hover {
    border-color: ${COLORS.lightblue};
  }
`

const Title = styled.h2`
`

const CommonInfoWithLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Address = styled(Link)`
`

const LastWorkingHour = styled.span`
`
