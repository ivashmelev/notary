import React, { Component } from 'react'
import styled from 'styled-components'
import Element from '../Element'

export default class Tariff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: []
    }
  }

  componentDidMount() {
    try {
      (async () => {
        const response = await fetch('http://foxstudio.site/api/v2/routes/contact.php');
        if (await response.ok) {
          this.setState({ section: await response.json() });
          console.log(this.state.section);
        }
      })();
    } catch (err) {
      throw err;
    }
  }

  render() {
    return (
      <TariffWrapper>
        {this.state.section.map((element, index) =>
          <TariffContainer key={index}>
            <Element id={element.id} text={element.title} />
          </TariffContainer>
        )}
      </TariffWrapper>
    )
  }
}

const TariffWrapper = styled.div`

`;

const TariffContainer = styled.div`
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

const TariffElement = styled.span`
  
`;