import React from 'react'
import styled, { css } from 'styled-components'
import { SmallItemListWrapper, Places } from '../common'
import Events from './Events'
import CommonAddButton from './CommonAddButton'

const ProfilePage = ({ 
  hidePlaces = false, 
  hideEvents = false,
  currentUserProfile: {
    name = "",
    email,
    surnname = "",
    sex = "",
    _links: {
      linkToAddPlace: { 
        href = '/'
      } = {}
    } = {} 
  } = {}
}) =>
  <Wrapper>
    <MainInfo>
      <PhotoBlock>
        это блок конкретной ширины и высоты, тут будет фотка, если фотки нет - будет заменитель
      </PhotoBlock>
      <PersonalInfo>
        <Name>{ `${name} ${surnname}` }</Name>
        <CommonInfoBlock>Почта: { email }</CommonInfoBlock>
        <CommonInfoBlock>Пол: { sex } </CommonInfoBlock>
      </PersonalInfo>
    </MainInfo>
    <PlacesAndEvents>
      <Column hide={ hidePlaces }>
        <SmallItemListWrapper title="Ваши заведения">
          <Places />
          <CommonAddButton to={ href } />
        </SmallItemListWrapper>
      </Column>
      <Column hide={ hideEvents }>
        <SmallItemListWrapper title="Ваши события">
          <Events />
        </SmallItemListWrapper>
      </Column>
    </PlacesAndEvents>
  </Wrapper>

export default ProfilePage

const Wrapper = styled.div`
  padding: 0 20px;
`

const MainInfo = styled.div`
  display: flex;
`

const PhotoBlock = styled.div`
  width: 200px;
  height: 285px;
  margin-right:20px;
  margin-bottom: 30px;
  background-color: grey;
`

const PersonalInfo = styled.div`
`

const Name = styled.h2`
`

const CommonInfoBlock = styled.div`
`

const PlacesAndEvents = styled.div`
  display: flex;
  justify-content: space-around;
`

const Column = styled.div`
  width: 700px;
  margin-right: 20px;
  :last-child{
    margin-right: 0;
  }
  ${props => props.hide && css`
    display: none;
  `}
`