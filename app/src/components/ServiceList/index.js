import React, { Component } from 'react'
import ServiceElement from '../ServiceElement'
import styled from 'styled-components'
import responsive from '../../responsive'

export default class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      current: '1'
    }
  }

  componentDidMount() {
    try {
      (async () => {
        const response = await fetch('http://api.loc/api/v1/routes/service.php');
        if (await response.ok) {
          this.setState({ services: await response.json() });
          console.log(this.state.services);
        }
      })();
    } catch (err) {
      throw err;
    }
  }

  render() {
    const { services, current } = this.state;
    return (
      <ServiceListWrapper>
        <ServiceListTitle>
          {services.map((element, index) =>
            current === element.id ?
              <ServiceListTitleElement
                key={index}
                style={{ color: '#E6B980' }}
                onClick={() => {
                  this.setState({ current: element.id });
                  console.log(window.innerWidth)
                  if (window.innerWidth < 720) { window.scrollTo(10, 542) }
                }}
              >
                {element.title}
              </ServiceListTitleElement>
              :
              <ServiceListTitleElement
                key={index}
                onClick={() => {
                  this.setState({ current: element.id });
                  console.log(window.innerWidth)
                  if (window.innerWidth < 720) { window.scrollTo(10, 542) }
                }}
              >
                {element.title}
              </ServiceListTitleElement>
          )}
        </ServiceListTitle>
        <ServiceListDescription>
          {services.map((element, index) =>
            current === element.id ?
              <ServiceElement
                key={index}
                description={element.description}
                current={index + 1}
              />
              : null)}
        </ServiceListDescription>
      </ServiceListWrapper >
    )
  }
}

const ServiceListWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;

  @media ${responsive.tablet} {
    flex-direction: column;
    flex-flow: column-reverse;
  }
`;

const ServiceListTitle = styled.div`
  padding: 60px 40px 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 600px;
  background: #2D2D2D;
  box-sizing: border-box;

  @media ${responsive.tablet} {
    margin-top: 150px;
    align-items: flex-start;
    max-width: unset;
  }
`;

const ServiceListTitleElement = styled.span`
  font-size: 16px;
  height: 60px;
  line-height: 30px;
  font-family: Montserrat Bold;
  text-align: right;
  letter-spacing: 0.05em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
  
  &:hover{
    color: #E6B980;
    cursor: pointer;
  }

  @media ${responsive.tablet} {
    align-items: flex-start;
    text-align: left;
    height: unset;
  }
`;

const ServiceListDescription = styled.div`
  max-width: 556px;
  padding-left: 120px;
  overflow: auto;

  @media ${responsive.tablet} {
    overflow: unset;
    padding-left: 20px;
  }
`;
