import React from 'react'
import styled, { css } from 'styled-components'

const HomePage = () => 

  <Wrapper>
    <InformationBlock>
      <TitleText>
        Ресторан
      </TitleText>
      <Text>
        Предприятие общественного питания с широким ассортиментом блюд сложного приготовления, включая заказные и фирменные.
        Владелец ресторанного бизнеса называется ресторатором; оба слова произошли от французского глагола restaurer (восстанавливать, укреплять, кормить). 
        Следует отметить, что restaurant в американском английском — любое предприятие общепита вообще, а не только ресторан в привычном смысле.
        Зачастую более крупные предприятия (например, гостиницы) имеют свои рестораны, расположенные на их территории, где услуги питания предоставляются 
        для удобства проживающих и для увеличения потенциального дохода гостиницы.
      </Text>
    </InformationBlock>
    <InformationBlock>
      <TitleText>
        Красный гид Мишлен
      </TitleText>
      <Text>
        Наиболее известный и влиятельный из ресторанных рейтингов на данный момент. Первый гид был выпущен в 1900 году Андре Мишленом,
        одним из основателей компании «Мишлен». Гид изначально представлял собой список различных мест, которые бы могли пригодиться путешественнику, 
        например: отели, ремонтные мастерские, закусочные или платные автомобильные стоянки. Он распространялся бесплатно и имел весьма умеренный спрос. 
        В 1920 году гид стали продавать за умеренную плату, также в него одновременно добавили рейтинг ресторанов, согласно их ценам. Таким образом,
        рестораны с высокими ценами помечались одной звездой, слегка напоминавшей цветок.
        В 1926 году политика рейтинга кардинально поменялась, и с тех пор звёздочка рядом с именем ресторана стала означать отменную кухню.
        В начале 1930-х годов было добавлено ещё две звезды.
      </Text>
    </InformationBlock>
    <InformationBlockLast>
      <TitleText>
        Над проектом работали:
      </TitleText>
      <InformationBlockDevelopers>
        <Developer>
          Голенков Алексей 
        </Developer>
        <Developer>
          Пасейшвили Алексей 
        </Developer>
        <Developer>
          Сорокина Виктория
        </Developer>
      </InformationBlockDevelopers>
    </InformationBlockLast>
 </Wrapper>

export default HomePage

const Wrapper = styled.div`
  display: flex;
  padding: 0 30px;
  justify-content: space-around;
  flex-wrap: wrap;
`
const InformationBlock = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgb(166, 29, 85);
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  :last-child {
    margin-right: 0;
  }
`
const InformationBlockLast = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgb(166, 29, 85);
  border-radius: 10px;
  width: 1200px;
`

const InformationBlockDevelopers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const Developer = styled.div`
  font-size: 30px;
  font-weight: bold;
`

const TitleText = styled.h1`
  padding-bottom: 30px;
`

const Text = styled.p`
  width: 600px;
`

const Image = styled.img`
`