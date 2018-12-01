import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CommonLinkButton } from '../common'

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
`

const Title = styled.h2`
`

const CommonInfoWithLink = styled.div`
`

const Address = styled(Link)`
`

const LastWorkingHour = styled.span`
`
