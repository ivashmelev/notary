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
      tariffs: [],
      current: 0,
      view: 'menu'
    }

    this.setActive = this.setActive.bind(this);

  }

  componentDidMount() {
    (
      // this.state.view === 'menu' ?
      async () => {
        const response = await fetch('http://foxstudio.site/api/v2/routes/section.php');
        if (await response.ok) {
          this.setState({ sections: await response.json() });
          console.log(this.state.sections);
        }
      }
      // :
    )();
  }

  setActive(value) {

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
    const newServices = [...this.state.services];
    console.log(newServices);
    console.log(data);
    newServices[current] = data;
    this.setState((state, props) => {
      return {
        services: newServices
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
                <Sidebar active={this.state.current === index ? true : false} key={index} id={index} title={element.title} onSetActive={this.setActive} />
              )}
            </TariffsContainerSidebar>
          </TariffsContainer>
          :
          this.state.view === 'wall' ?
            < TariffsContainer >
              <TariffsContainerSidebar>
                {this.state.tariffs.map((element, index) =>
                  <Sidebar active={this.state.current === index ? true : false} key={index} id={index} title={element.title} onSetActive={this.setActive} />
                )}
              </TariffsContainerSidebar>
              <TariffsContainerWall>
                {!_.isEmpty(this.state.tariffs) ?
                  <Wall
                    event={UPDATE_TARIFF}
                    data={this.state.tariffs[this.state.current]}
                    onhandleChangeTariffs={this.handleChangeTariffs}
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