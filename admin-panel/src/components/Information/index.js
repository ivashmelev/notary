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
              <b>Элементы навигации и экраны</b>
            </InformationContentText>
            <InformationContentText>
              <InfoUl>
                <InfoLi>Кнопка в правом верхнем углу (Выход из админ панели)</InfoLi>
                <InfoLi>Левое меню:</InfoLi>
                  <InfoUl>
                    <InfoLi>Записи на прием (Список пользователей записавшихся на прием)</InfoLi>
                    <InfoLi>Услуги (Список услуг для редактирования)</InfoLi>
                    <InfoLi>Тарифы (Список тарифов для редактирования)</InfoLi>
                    <InfoLi>Контакты (Список контактов для редактирования)</InfoLi>
                    <InfoLi>Пользователи (Список учетных записей для создания и редактирования)</InfoLi>
                  </InfoUl>
                <InfoLi>Правая панель (Экран вывода информации раздела):</InfoLi>
                  <InfoUl>
                    <InfoLi>Шапка с именем раздела</InfoLi>
                    <InfoLi>Справа в шапке появляются кнопки: </InfoLi>
                      <InfoUl>
                        <InfoLi>Стрелка (Подняться на уровень выше)</InfoLi>
                        <InfoLi>Плюс (Добавление новой учетной записи)</InfoLi>
                      </InfoUl>
                    <InfoLi>Левое боковое меню (Меню переключения разделов)</InfoLi>
                    <InfoLi>Правая форма редактирования</InfoLi>
                  </InfoUl>
              </InfoUl>
            </InformationContentText>
            <InformationContentText>
              <b>Инструкция по редактированию</b>
            </InformationContentText>
            <InformationContentText>
              <InfoUl>
                <InfoLi>Нажмите на текст</InfoLi>
                <InfoLi>Если текст изменяемый, то появится поле ввода</InfoLi>
                <InfoLi>После всех изменений необходимо нажать сочетание клавиш <b>ctrl + enter</b></InfoLi>
                <InfoLi>Инпут должен вернуться к первоначальному виду</InfoLi>
                <InfoLi>Нажмите кнопку <b>Ок</b></InfoLi>
                <InfoLi>Данные сохранены</InfoLi>
              </InfoUl>
            </InformationContentText>
          </InformationContent>
          </InformationContentWrapper>
      )
    );
  }
}

const InfoLi = styled.li``;
const InfoUl = styled.ul`
  padding: 0 0 0 20px;
`;
const InformationContentText = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #2d2d2d;
  margin: 0 0 10px;
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
  height: 470px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.25);
  position: relative;
  z-index: 35;
  padding: 15px;
  overflow: auto;
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