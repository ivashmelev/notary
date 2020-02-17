import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar'
import Title from '../Header/Title'
import Wall from '../Wall'
import _ from 'lodash'
import { UPDATE_SERVICE } from '../../helpers/constants'

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      current: 0
    }
    this.setActive = this.setActive.bind(this);
    this.handleChangeServices = this.handleChangeServices.bind(this);
  }

  componentDidMount() {
    try {
      (async () => {
        const response = await fetch('https://notary-nn.ru/api/v2/routes/service.php', { method: 'GET', mode: "cors" });
        if (await response.ok) {
          this.setState({ services: await response.json() });
        }
      })();
    } catch (err) {
      throw err;
    }
  }

  handleChangeServices(data, current) {
    const newServices = [...this.state.services];
    newServices[current] = data;
    this.setState((state, props) => {
      return {
        services: newServices
      }
    });
  }

  setActive(value) {
    this.setState({ current: value });
  }

  render() {
    return (
      <ServicesWrapper>
        <Title title='Услуги' nextTitle='' icon='' onDoThis />
        <ServicesContainer>
          <ServicesContainerSidebar>
            {this.state.services.map((element, index) =>
              <Sidebar active={this.state.current === index ? true : false} key={index} id={index} title={element.title} onSetActive={this.setActive} />
            )}
          </ServicesContainerSidebar>
          <ServicesContainerWall>
            {!_.isEmpty(this.state.services) ?
              <Wall
                event={UPDATE_SERVICE}
                data={this.state.services[this.state.current]}
                onHandleChangeServices={this.handleChangeServices}
                current={this.state.current}
              /> : null
            }
          </ServicesContainerWall>
        </ServicesContainer>
      </ServicesWrapper>
    );
  }
}

export default Services

const ServicesWrapper = styled.div`
  width: 100%;
`

const ServicesContainer = styled.div`
  display: flex;
`;

const ServicesContainerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 315px;
`;

const ServicesContainerWall = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 5px 0;
`;