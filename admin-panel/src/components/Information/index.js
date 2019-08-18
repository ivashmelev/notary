import React, { Component } from 'react';
import styled from 'styled-components'
import infoIco from '../../assets/icons/info.svg'
import closeIco from '../../assets/icons/close.svg'

export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false
    }
  }
  
  changeView() {
    this.setState({ view: !this.state.view })
  }

  render() {
    const { view } = this.state
    return (
      !view ? (
        <InformationWrapper onClick={() => this.changeView()}>
          <InformationIcon src={infoIco}/>
        </InformationWrapper>
      ) : (
        <InformationContentWrapper>
          <InformationContentBack onClick={() => this.changeView()}/>
          <InformationContent>
            <InformationContentHeader>
              <InformationContentTitle>
                Информация
              </InformationContentTitle>
              <InformationContentClose src={closeIco} onClick={() => this.changeView()}/>
            </InformationContentHeader>
            <InformationContentText>
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
              По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
            </InformationContentText>
          </InformationContent>
          </InformationContentWrapper>
      )
    );
  }
}

const InformationContentText = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #2d2d2d;
`
const InformationContentClose = styled.img`
  cursor: pointer;
`
const InformationContentTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
`
const InformationContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 35px;
`
const InformationContent = styled.div`
  width: 800px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 35;
  padding: 15px;
`
const InformationContentBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 31;
  top: 0; left: 0;
`
const InformationContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 30;
  top: 0; left: 0;
  background-color: rgba(45, 45, 45, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`
const InformationIcon = styled.img``
const InformationWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #4295FF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 30;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  }
`