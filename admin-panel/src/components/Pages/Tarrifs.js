import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import Title from '../Header/Title'
import Sidebar from '../Sidebar'
import Wall from '../Wall'
import { UPDATE_TARIFF } from '../../helpers/constants'
class Tariffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      tariffs: [{}],
      current: 0,
      view: 'menu'
    }

    this.setActiveSection = this.setActiveSection.bind(this);
    this.setActiveTariff = this.setActiveTariff.bind(this);
    this.handleChangeTariffs = this.handleChangeTariffs.bind(this);
  }

  componentDidMount() {
    console.log(this.state.current);
    (
      this.state.view === 'menu' ?
        async () => {
          const response = await fetch('https://foxstudio.site/api/v2/routes/section.php');
          if (await response.ok) {
            this.setState({ sections: await response.json() });
            console.log(this.state.sections);
          }
        }
        :
        async () => {
          // const response = await fetch(`http://foxstudio.site/api/v2/routes/section.php?id=${this.state.sections[this.state.current].id}`);
          // if (await response.ok) {
          //   this.setState({ tariffs: await response.json() });
          //   console.log(this.state.tariffs);
          // }
        }
    )();
  }

  setActiveTariff(value) {
    this.setState({ current: value });
  }

  setActiveSection(value) {
    this.setState({ current: value, view: 'wall' });
    // (this.state.view === 'wall' ?
    (async () => {
      const response = await fetch(`http://foxstudio.site/api/v2/routes/section.php?id=${this.state.sections[this.state.current].id}`);
      if (await response.ok) {
        this.setState({ tariffs: await response.json() });
        console.log(this.state.tariffs);
      }
    })();
    // : null)();
  }

  handleChangeTariffs(data, current) {
    const newServices = [...this.state.tariffs];
    console.log(newServices);
    console.log(data);
    newServices[current] = data;
    this.setState((state, props) => {
      return {
        tariffs: newServices
      }
    });
  }

  render() {
    return (
      <TariffsWrapper>
        <Title title='Тарифы' nextTitle='' icon='' onDoThis />
        {this.state.view === 'menu' ?
          <TariffsContainer>
            <TariffsContainerSidebar>
              {this.state.sections.map((element, index) =>
                <Sidebar active={this.state.current === index ? true : false} key={index} id={index} title={element.title} onSetActiveSection={this.setActiveSection} />
              )}
            </TariffsContainerSidebar>
          </TariffsContainer>
          :
          this.state.view === 'wall' ?
            < TariffsContainer >
              <TariffsContainerSidebar>
                {this.state.tariffs.map((element, index) =>
                  <Sidebar active={this.state.current === index ? true : false} key={index} id={index} title={element.title} onSetActiveTariff={this.setActiveTariff} />
                )}
              </TariffsContainerSidebar>
              <TariffsContainerWall>
                {!_.isEmpty(this.state.tariffs) ?
                  <Wall
                    event={UPDATE_TARIFF}
                    data={this.state.tariffs[this.state.current]}
                    onHandleChangeServices={this.handleChangeTariffs}
                    current={this.state.current}
                  /> : null
                }
              </TariffsContainerWall>
            </TariffsContainer> : null
        }
      </TariffsWrapper>
    );
  }
}

export default Tariffs

const TariffsWrapper = styled.div`
  width: 100%;
`
const TariffsContainer = styled.div`
  display: flex;
`;

const TariffsContainerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const TariffsContainerWall = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 0;
`;