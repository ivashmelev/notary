import React, { Component } from 'react';
import styled from 'styled-components'
import _ from 'lodash'
import deleteIco from '../../../assets/icons/trash-empty.svg'
import editIco from '../../../assets/icons/pen-create.svg'

const USERS_VIEW_EDIT = 'USERS_VIEW_EDIT'

class InfoLine extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { page, infoLine, onDoThis, onDeleteUser } = this.props
    return (
      <InfoLineWrapper>
        {
          !_.isEmpty(infoLine) ? (
            page === 'users' ? (
              _.map(infoLine, (item, index) => {
                return (
                  <LineContainer key={index}>
                    <LineContentContainer>
                      <LineContent size='0 1 240px' padding='0 7.5px 0 0'>{item.name}</LineContent>
                      <LineContent size='0 1 240px' textAlign='center'>{item.mail}</LineContent>
                      <LineContent size='0 1 240px' textAlign='center' padding='0 0 0 7.5px'>{item.login}</LineContent>
                    </LineContentContainer>
                    <LineButtonContainer>
                      <LineButtonImg src={editIco} onClick={() => onDoThis(USERS_VIEW_EDIT, index)} />
                      {
                        item.login !== 'admin' && item.login !== 'Admin' ? (
                          <LineButtonImg src={deleteIco} onClick={() => onDeleteUser(item, index)} />
                        ) : (
                            null
                          )
                      }
                    </LineButtonContainer>
                  </LineContainer>
                )
              })
            ) :
              page === 'appointment' ? (
                _.map(infoLine, (item, index) => {
                  return (
                    <LineContainer key={index}>
                      <LineContent size='0 1 240px' padding='0 7.5px 0 0'>{item.name}</LineContent>
                      <LineContent size='0 1 160px'>{item.date ? `Дата: ${item.date.split('-').reverse().join('.')}` : null} </LineContent>
                      <LineContent size='0 1 240px' textAlign='center'>{item.mail}</LineContent>
                      <LineContent size='0 1 170px' textAlign='center'>{item.phone}</LineContent>
                      {/* <LineContent size='1 1' padding='0 0 0 7.5px'>{item.comment}</LineContent> */}
                    </LineContainer>
                  )
                })
              ) : (
                  <LineContainer>
                    <LineContent size='1 1' textAlign='center' padding='0'>Нет информации</LineContent>
                  </LineContainer>
                )
          ) : (
              <LineContainer>
                <LineContent size='1 1' textAlign='center' padding='0'>Нет информации</LineContent>
              </LineContainer>
            )
        }

      </InfoLineWrapper>
    );
  }
}

export default InfoLine

const LineButtonImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 0 0 0 15px;
`
const LineButtonContainer = styled.div`
  display: flex;
`
const LineContentContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
`
const LineContent = styled.div`
  flex: ${props => props.size ? `${props.size}` : '0 1 auto'};
  padding: ${props => props.padding ? `${props.padding}` : '0 7.5px'};
  text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`
const LineContainer = styled.div`
  width: 100%;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  display: flex;
  padding: 13px 15px;
  margin: 0 0 10px 0;
`
const InfoLineWrapper = styled.div`
  width: 100%;
`