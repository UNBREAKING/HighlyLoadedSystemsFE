import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CommonLinkButton } from '../common'
import { COLORS } from '../../constants'
import { getPlaceUrl } from '../../helpers'

const PlaceBlock = ({ 
  shortDescription, 
  name, 
  address, 
  time, 
  links: [{}, { href = '/' }] = []
}) => 
  <Wrapper>
    <Title>
      { name }
    </Title>
    <Description>
      { shortDescription }
    </Description>
    <CommonInfoWithLink>
      <Address to="/home">
        { address }
      </Address>
      <LastWorkingHour>
        до 23.00
      </LastWorkingHour>
      <CommonLinkButton to={ getPlaceUrl(href) }>
        Подробнее
      </CommonLinkButton>
    </CommonInfoWithLink>
  </Wrapper>

export default PlaceBlock

const Wrapper = styled.div`
  width: 80%;
  border: 1px solid ${COLORS.gray};
  box-shadow: 0 0 2px 0px  ${COLORS.gray};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px 20px;
  :hover {
    border-color: ${COLORS.green};
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