import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainInformation = () => 
  <Wrapper>
    <Description>
      <Header>
        Описание
      </Header>
      <Content>
        Рестран, он же клуб, он же музей восковых фигур. Бла-бла-бла
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
          г.Минск, улица Боярского 13
        </Address>
      </InfoBlock>
      <InfoBlock>
        <SmallHeader>
          Номер
        </SmallHeader>
        <SmallContent>
          + 375(29) 321-21-32 
        </SmallContent>
      </InfoBlock>
      <InfoBlock>
        <SmallHeader>
          Почта
        </SmallHeader>
        <SmallContent>
          mail@hollywood.by
        </SmallContent>
      </InfoBlock>
      <InfoBlock>
        <SmallHeader>
          Сайт
        </SmallHeader>
        <WebSite href="http://www.walmart.com" target="_blank">
          hollywood.by
        </WebSite>
      </InfoBlock>
      <InfoBlock>
        <SmallHeader>
          Время работы
        </SmallHeader>
        <SmallContent>
          пн. 8.00 - 22.00 
        </SmallContent>
        <SmallContent>
          вт. 8.00 - 22.00 
        </SmallContent>
        <SmallContent>
          ср. 8.00 - 22.00 
        </SmallContent>
        <SmallContent>
          чт. 8.00 - 22.00 
        </SmallContent>
        <SmallContent>
          пт. 8.00 - 24.00 
        </SmallContent>
        <SmallContent>
          сб. 8.00 - 24.00 
        </SmallContent>
        <SmallContent>
          вс. 8.00 - 22.00 
        </SmallContent>
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