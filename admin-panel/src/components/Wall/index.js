import React, { Component } from 'react'
import styled from 'styled-components'
import Element from '../Element'

export default class Wall extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, id } = this.props;
    console.log(data.title);
    return (
      <WallWrapper>
        <WallTitle><Element view='input' id={data.id} text={data.title} /></WallTitle>
        <WallText><Element view='textarea' id={data.id} text={data.description} /></WallText>
      </WallWrapper>
    )
  }
}

const WallWrapper = styled.div`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  padding: 12px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #2D2D2D;
  cursor: pointer;
`;

const WallTitle = styled.span`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const WallText = styled.span`
  margin-top: 16px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;
