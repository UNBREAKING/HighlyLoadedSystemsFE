import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from '../../constants'

const Header = ({ links, indexOfMenuItem, setMenuItem }) =>
  <Wrapper>
    <ClickbleWrapper>
      <Links>
        {
          links.map(({ link, name }, index) =>
            <LinkWrapper
              selected={ indexOfMenuItem === index }
              key={`${index}_${name}`} 
              onClick={ () => setMenuItem(index)}>
              <LinkButton to={link}>
                {name}
              </LinkButton>
            </LinkWrapper>
          )
        }
      </Links>
    </ClickbleWrapper>
  </Wrapper>

export default Header

const Wrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  background: ${COLORS.white};
  box-shadow: 0 0 2px 0px ${COLORS.gray};
  position: fixed;
  z-index: 1000;
`

const LinkButton = styled(Link)`
  color: ${COLORS.darkGray};
  font-size: 20px;
  padding: 10px 20px;
  text-decoration:none;
  cursor: pointer;
`

const Links = styled.div`
  box-shadow: 0 0 2px 0px  ${COLORS.gray};
`

const LinkWrapper = styled.div`
  display: inline-block;
  border-right: 1px solid ${COLORS.gray};
  transition: 0.3s background ease;
  :hover {
    background: ${COLORS.darkred};
    ${LinkButton} {
      color: ${COLORS.white};
      text-decoration:none;
    }
  }
  :last-child {
    border-right: none;
  }
  ${props => props.selected && css`
    background: ${COLORS.darkred};
    ${LinkButton} {
      color: ${COLORS.white};
      text-decoration:none;
    }
  `}
`

const ClickbleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`