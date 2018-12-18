import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import { COLORS } from '../../../constants'

const Place = ({ withUpdateLink = false }) => 
  <Wrapper>
    <InfoContainer>
      <Icon fontSize="large">
        image
      </Icon>
      <MainInfo>
        <NameAndLink>
          <Name> День святого патрика</Name>
          {
            withUpdateLink && 
              <Link to="/">
                редактировать
              </Link>
          }
        </NameAndLink>
        <Address>
          Адрес: улица Зыбицкая, 13 г.Минск
        </Address>
      </MainInfo>
    </InfoContainer>
    <Button>
      <Icon fontSize="large">keyboard_arrow_right</Icon>
    </Button>
  </Wrapper>

export default Place 

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${COLORS.gray};
  box-shadow: 0 0 2px 0px  ${COLORS.gray};
  border-radius: 4px;
  padding: 20px 10px;
  margin-bottom: 10px;

  :first-child {
    margin-top: 10px;
  }
  
  :hover {
    border-color: ${COLORS.green};
  }
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

const MainInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Address = styled.div`
`

const NameAndLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

const Name = styled.div`
  font-size: 26px;
`

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: inherit;
`