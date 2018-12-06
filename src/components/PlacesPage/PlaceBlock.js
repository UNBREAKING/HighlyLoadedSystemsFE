import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CommonLinkButton } from '../common'
import { COLORS } from '../../constants'


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

const Description = styled.p`
  width: 65%;
`

const CommonInfoWithLink = styled.div`
  display: flex;
  justify-content: space-between;
`

const Address = styled(Link)`
`

const LastWorkingHour = styled.span`
`