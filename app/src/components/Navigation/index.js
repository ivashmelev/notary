import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'


export default class Navigation extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <NavigationWrapper>
        <NavigationLink>
          <NavigationSubTitle>{subtitle}</NavigationSubTitle>
          <NavigationTitle>{title}</NavigationTitle>
        </NavigationLink>
      </NavigationWrapper>
    )
  }
}


const NavigationLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(25%);
  
  transition: all .5s cubic-bezier(0.77,0,0.175,1);

  @media ${responsive.tablet} {
    transform: translateY(-80%);
  }
`;

const NavigationSubTitle = styled.span`
  color: #D7D7D7;
  font-family: Montserrat Regular;
  font-size: 13px;
  letter-spacing: 0.13px;
  line-height: 18px;
  text-align: center;
  position: relative;
  opacity: 0.4;
  transition: all .5s cubic-bezier(0.77,0,0.175,1);

  @media ${responsive.tablet} {
    opacity: 1;
  }
`;

const NavigationTitle = styled.span`
  color: #D7D7D7;
  font-family: Montserrat Thin;
  font-size: 149px;
  line-height: 139px;
  text-align: center;
  position: relative;
  margin: 0;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  opacity: 0.4;
  transition: all .5s cubic-bezier(0.77,0,0.175,1);

  @media ${responsive.tablet} {
    opacity: 1;
    font-size: 69px
  }
`;

const NavigationWrapper = styled.div`
  margin-top: 190px;
  height: 406px;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(180deg, #363030 0%, #181616 100%);
  cursor: pointer;
  overflow: hidden;
  justify-content: center;
  transition: all .5s cubic-bezier(0.77,0,0.175,1);

  &:hover .${NavigationLink.componentStyle.componentId}{
    transform: translateY(-80%);
    margin-bottom: 0;
  }

  &:hover .${NavigationSubTitle.componentStyle.componentId},
  &:hover .${NavigationTitle.componentStyle.componentId}{
    opacity: 1;
  }

  @media ${responsive.tablet} {
    margin-top: 0;
  }

  
`;



