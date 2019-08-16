import React, { Component } from 'react'
import styled from 'styled-components'
import userAvatar from '../../../assets/icons/user-icon.svg'

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    const { link, size } = this.props
    return (
      <AvatarWrapper size={size}>
        <AvatarImg src={link ? link : userAvatar}/>
      </AvatarWrapper>
    )
  }
}

export default Avatar;

const AvatarImg = styled.img`
  width: 100%;
`
const AvatarWrapper = styled.div`
  width: ${props => props.size ? props.size : '40px'};
  height: ${props => props.size ? props.size : '40px'};
  /* background-color: #2D2D2D; */
  border-radius: 50%;
  overflow: hidden;
`