import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainInformation = ({ address, description, time = [] }) => 
  <Wrapper>
    <Description>
      <Header>
        Описание
      </Header>
      <Content>
        { description }
      </Content>
    </Description>
    <Header>
      Общая информация
    </Header>
    <CommonInfo>
      <InfoBlock>
        <SmallHeader>
          Адрес
        </SmallHeader>
        <Address to='/home'>
          { address }
        </Address>
      </InfoBlock>
      <InfoBlock>
        <SmallHeader>
          Время работы
        </SmallHeader>
        {
          time.map(({ day, start, end}) =>
            <SmallContent key={day}>
              {`${day} ${start} - ${end}`}
            </SmallContent>
          )
        }
      </InfoBlock>
    </CommonInfo>
  </Wrapper>

export default MainInformation

const Wrapper = styled.div`
  display: inline-block;
  width: 50%;
  padding-left: 20px;
  vertical-align: top;
`

const Description = styled.div`
`

const Header = styled.h3`
`

const Content = styled.div`
`

const CommonInfo = styled.div`
  padding-left: 20px;
`

const InfoBlock = styled.div`
`

const SmallHeader = styled.h4`
`

const Address = styled(Link)`
`

const SmallContent = styled.div`
`

const WebSite = styled.a`
`