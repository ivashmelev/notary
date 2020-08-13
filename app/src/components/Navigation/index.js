import React, { Component } from 'react'
import styled from 'styled-components'
import responsive from '../../responsive'
import history from '../../helpers/history'
import Developer from '../Developer'


export default class Navigation extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <NavigationContainer>
        <NavigationWrapper>
          <NavigationLink
            onClick={
              title === 'НАЗАД' ? () => {
                this.props.onReturnBack(false)
                window.scrollTo(0, 0)
              } :
                title === 'НОТАРИАЛЬНЫЕ ДЕЙСТВИЯ' ? () => {
                  history.push({ pathname: '/service' })
                  window.scrollTo(0, 0)
                } :
                  title === 'ТАРИФЫ' ? () => {
                    history.push({ pathname: '/tariff' })
                    window.scrollTo(0, 0)
                  } :
                    title === 'КОНТАКТЫ' ? () => {
                      history.push({ pathname: '/contact' })
                      window.scrollTo(0, 0)
                    } :
                      null
            }
          >
            <NavigationSubTitle>{subtitle}</NavigationSubTitle>
            <NavigationTitle>{title}</NavigationTitle>
          </NavigationLink>
        </NavigationWrapper>
        <Developer />
      </NavigationContainer>
    )
  }
}


const NavigationContainer = styled.div`
  width: 100%;
`
const NavigationLink = styled.a`
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(50%);
  transition: all .5s cubic-bezier(0.77,0,0.175,1);
  @media ${responsive.tablet} {
    transform: translateY(0);
  }
`;

const NavigationSubTitle = styled.div`
  text-transform: uppercase;
  color: #FFFFFF;
  font-family: Montserrat Regular;
  font-size: 16px;
  letter-spacing: 0.13px;
  line-height: 18px;
  text-align: center;
  position: relative;
  opacity: 0.4;
  transition: all .5s cubic-bezier(0.77,0,0.175,1);
  @media ${responsive.tablet} {
    
  }
`;

const NavigationTitle = styled.div`
  text-transform: uppercase;
  color: #FFFFFF;
  font-family: Montserrat Thin;
  font-size: 144px;
  text-align: center;
  position: relative;
  margin: 0;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  opacity: 0.4;
  transition: all .5s cubic-bezier(0.77,0,0.175,1);
  @media ${responsive.notebookS} {
    font-size: 100px;
  }
  @media ${responsive.tablet} {
    font-size: 48px;
  }
`;

const NavigationWrapper = styled.div`
  height: 369px;
  display: flex;
  background: #2D2D2D;
  cursor: pointer;
  overflow: hidden;
  justify-content: center;
  transition: all .5s cubic-bezier(0.77,0,0.175,1);

  &:hover .${NavigationLink.componentStyle.componentId}{
    margin-bottom: 0;
    transform: translateY(0);
  }

  &:hover .${NavigationSubTitle.componentStyle.componentId},
  &:hover .${NavigationTitle.componentStyle.componentId}{
    opacity: 1;
  }

  @media ${responsive.tablet} {
    height: 218px;
  }
`;