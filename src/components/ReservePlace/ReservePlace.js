import React from 'react'
import styled from 'styled-components'
import { PlaceSelector, ReserveForm } from '../common'

const typesOfTables = [
  {
    "name": "столик на 2",
    "available": false,
    "id": "id123123"
  },
  {
    "name": "столик на 4",
    "available": true,
    "id": "id123123"
  },
  {
    "name": "столик на 4",
    "available": true,
    "id": "id123123"
  }
]

const ReservePlace = () => 
  <Wrapper>
    <Title>Место: Irish Clever Pub</Title>
    <ImageWrapper />
    <SelectContent>
      <LeftContent>
        <PlaceSelector typesOfTables={ typesOfTables} />
      </LeftContent>
      <RightContent>
        <ReserveForm />
      </RightContent>
    </SelectContent>
  </Wrapper>

export default ReservePlace

const Wrapper = styled.div`
`

const Title = styled.h1`
`

const ImageWrapper = styled.div`
  background: gray;
  height: 300px;
  padding-bottom: 15px;
`

const SelectContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 40px;
`

const LeftContent = styled.div`
  width: 30%;
`

const RightContent = styled.div`
  width: 70%;
  padding-left: 20px;
`