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
  background: ${COLORS.orange};
  padding: 20px 0;
  width: 100%;
  box-shadow: 0 0 10px ${COLORS.black};
  position: fixed;
  z-index: 1000;
`

const LinkButton = styled(Link)`
  color: ${COLORS.black};
  font-size: 20px;
  padding: 10px 20px;
  text-decoration:none;
  cursor: pointer;
`

const Links = styled.div`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

const LinkWrapper = styled.div`
  display: inline-block;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s background ease;
  :hover {
    background: ${COLORS.lightblue};
    ${LinkButton} {
      color: ${COLORS.black};
      text-decoration:none;
    }
  }
  :last-child {
    border-right: none;
  }
  ${props => props.selected && css`
    background: ${COLORS.lightblue};
  `}
`

const ClickbleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`