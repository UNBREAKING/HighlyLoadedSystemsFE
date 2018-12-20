import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import { COLORS } from '../../../constants'
import { getEventUrl, getUpdateEventUrl } from '../../../helpers'
import { CommonLinkButton } from '../'

const Event = ({ 
  available = true,
  withUpdateLink = false, 
  name, 
  links: { 
    updateLink: {
      href = '/'
    } = {}
  } 
}) => 
  <Wrapper available={ available }>
    <NameContainer>
      <Icon fontSize="large">
        { available ? "event_available" : "event_busy" }
      </Icon>
      <MainInf>
        <Name>{ name }</Name>
        {
          withUpdateLink && 
            <Link to={ getUpdateEventUrl(href) }>
              редактировать
            </Link>
        }
      </MainInf>
    </NameContainer>
    <Button to={ getEventUrl(href) }>
      <Icon fontSize="large">keyboard_arrow_right</Icon>
    </Button>
  </Wrapper>

export default Event 

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

const Button = styled(CommonLinkButton)`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: inherit;
  color: ${COLORS.black};
  box-shadow: none;

  &:hover {
    background: none;
    color: ${COLORS.black};
  }
`