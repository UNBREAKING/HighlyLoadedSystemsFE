import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import { COLORS } from '../../../constants'

const Event = ({ available = true, withUpdateLink = false }) => 
  <Wrapper available={ available }>
    <NameContainer>
      <Icon fontSize="large">
        { available ? "event_available" : "event_busy" }
      </Icon>
      <MainInf>
        <Name> День святого патрика</Name>
        {
          withUpdateLink && 
            <Link to="/">
              редактировать
            </Link>
        }
      </MainInf>
    </NameContainer>
    <Button>
      <Icon fontSize="large">keyboard_arrow_right</Icon>
    </Button>
  </Wrapper>

export default Event 

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${COLORS.black};
  border-radius: 4px;
  padding: 20px 10px;
  margin-bottom: 10px;

  :first-child {
    margin-top: 10px;
  }
  
  :hover {
    border-color: ${COLORS.lightblue};
  }

  ${props => !props.available && css`
    background: ${COLORS.lightred}
  `}
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Name = styled.span`
  font-size: 26px;
`

const MainInf = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: inherit;
`