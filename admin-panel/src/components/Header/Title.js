import React, { Component } from 'react'
import styled from 'styled-components'
import chevron from '../../assets/icons/chevron-left.svg'
import plus from '../../assets/icons/plus.svg'

const USERS_VIEW_PAGE = 'USERS_VIEW_PAGE'
const USERS_VIEW_NEW = 'USERS_VIEW_NEW'

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    const { title, nextTitle, icon, onDoThis, action } = this.props
    return (
      <TitleWrapper>
        <TitleName>
          {title}&nbsp;
          {
            nextTitle ? (
              <TitleNextName>
                / {nextTitle}
              </TitleNextName>
            ) : null
          }
        </TitleName>
        {
          icon ? (
            <TitleButton>
              <TitleButtonImg src={icon === 'plus' ? plus : chevron} onClick={action === 'edit' ? () => onDoThis(USERS_VIEW_NEW) : action === 'exit' ? () => onDoThis(USERS_VIEW_PAGE) : action ? () => onDoThis() : null}/>
            </TitleButton>
          ) : null
        }
      </TitleWrapper>
    );
  }
}

export default Title

const TitleButtonImg = styled.img`

`
const TitleButton = styled.div`
  width: 40px;
  height: 40px;
  background: #FFFFFF;
  border-radius: 50%;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  }
`
const TitleNextName = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`
const TitleName = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  display: flex;
  align-items: center;
`
const TitleWrapper = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`