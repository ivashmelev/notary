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
          <Element key={element.id} id={element.id} text={element.title} />
        )}
      </ServiceWrapper>
    )
  }
}

const ServiceWrapper = styled.div`

`;