import React, { Component } from 'react'
import styled from 'styled-components'
import Element from '../Element'

export default class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    }
  }

  componentDidMount() {
    try {
      (async () => {
        const response = await fetch('http://foxstudio.site/api/v2/routes/service.php');
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
    return (
      <ServiceWrapper>
        {this.state.services.map((element, index) =>
          <ServiceContainer key={index}>
            <Element id={element.id} text={element.title} />
          </ServiceContainer>
        )}
      </ServiceWrapper>
    )
  }
}

const ServiceWrapper = styled.div`

`;

const ServiceContainer = styled.div`
  margin-bottom: 15px;
  height: 60px;
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  padding: 10px;
  display: flex;
  align-items: center;

  :hover{
    cursor: pointer;
  }
`;

const ServiceElement = styled.span`
  
`;