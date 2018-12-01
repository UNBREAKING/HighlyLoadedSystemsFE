import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CommonLinkButton } from '../common'

const PlaceBlock = () => 
  <Wrapper>
    <Title>
      Ресторан "Hollywood"
    </Title>
    <Description>
      Описание заведения. Очень много текста.
      Описание заведения. Очень много текста.
      Описание заведения. Очень много текста.
      Описание заведения. Очень много текста.
      Описание заведения. Очень много текста.
    </Description>
    <CommonInfoWithLink>
      <Address to="/home">
        проспект Газеты звезда 23, 13
      </Address>
      <LastWorkingHour>
        до 23.00
      </LastWorkingHour>
      <CommonLinkButton to="/place">
        Подробнее
      </CommonLinkButton>
    </CommonInfoWithLink>
  </Wrapper>

export default PlaceBlock

const Wrapper = styled.div`
`

const Title = styled.h2`
`

const Description = styled.p`
`

const CommonInfoWithLink = styled.div`
`

const Address = styled(Link)`
`

const LastWorkingHour = styled.span`
`