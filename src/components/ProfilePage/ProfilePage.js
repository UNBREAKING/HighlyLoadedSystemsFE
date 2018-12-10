import React from 'react'
import styled, { css } from 'styled-components'
import { SmallItemListWrapper } from '../common'
import Events from './Events'
import Places from './Places'

const ProfilePage = ({ hidePlaces = false, hideEvents = false }) =>
  <Wrapper>
    <MainInfo>
      <PhotoBlock>
        это блок конкретной ширины и высоты, тут будет фотка, если фотки нет - будет заменитель
      </PhotoBlock>
      <PersonalInfo>
        <Name>Дмитрий Ларин</Name>
        <CommonInfoBlock>Почта: larin@gmail.com</CommonInfoBlock>
        <CommonInfoBlock>Пол: мужской</CommonInfoBlock>
      </PersonalInfo>
    </MainInfo>
    <PlacesAndEvents>
      <Column hide={ hidePlaces }>
        <SmallItemListWrapper title="Ваши заведения">
          <Places />
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
`

const MainInfo = styled.div`
`

const PhotoBlock = styled.div`
`

const PersonalInfo = styled.div`
`

const Name = styled.h2`
`

const CommonInfoBlock = styled.div`
`

const PlacesAndEvents = styled.div`
`

const Column = styled.div`

  ${props => props.hide && css`
    display: none;
  `}
`