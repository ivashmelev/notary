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
      currentSection: NaN,
      current: 0,
      view: 'menu'
    }

    this.setActiveSection = this.setActiveSection.bind(this);
    this.setActiveTariff = this.setActiveTariff.bind(this);
    this.handleChangeTariffs = this.handleChangeTariffs.bind(this);
    this.unSetActive = this.unSetActive.bind(this);
  }

  componentDidMount() {
    (
      this.state.view === 'menu' ?
        async () => {
          const response = await fetch('https://notary-nn.ru/api/v2/routes/section.php');
          if (await response.ok) {
            this.setState({ sections: await response.json() });
          }
        }
        :
        async () => {
        }
    )();
  }

  setActiveTariff(value) {
    this.setState({ current: value });
  }

  setActiveSection(value) {
    this.setState({ currentSection: value, view: 'wall' });
    (async () => {
      const response = await fetch(`http://foxstudio.site/api/v2/routes/section.php?id=${this.state.sections[value].id}`);
      if (await response.ok) {
        this.setState({ tariffs: await response.json() })
      }
    })();
  }

  unSetActive(value) {
    this.setState({ view: 'menu', current: 0 });
  }


  handleChangeTariffs(data, current) {
    const newServices = [...this.state.tariffs]
    newServices[current] = data;
    this.setState((state, props) => {
      return {
        tariffs: newServices
      }
    })
  }

  render() {
    return (
      <TariffsWrapper>
        <Title 
          title='Тарифы' 
          nextTitle={this.state.view === 'wall' ? this.state.sections[this.state.currentSection].title : ''} 
          icon={this.state.view === 'wall' ? 'chevron' : ''}
          onDoThis={this.state.view === 'wall' ? this.unSetActive : null}
          action
        />
        {this.state.view === 'menu' ?
          <TariffsContainer>
            <TariffsContainerSidebar>
              {this.state.sections.map((element, index) =>
                <Sidebar active={false} key={index} id={index} title={element.title} onSetActiveSection={this.setActiveSection} />
              )}
            </TariffsContainerSidebar>
          </TariffsContainer>
          :
          this.state.view === 'wall' ?
            < TariffsContainer >
              <TariffsContainerSidebar>
                {
                  !_.isEmpty(this.state.tariffs) > 0 ? (
                    this.state.tariffs.map((element, index) =>
                      <Sidebar active={this.state.current === index ? true : false} key={index} id={index} title={element.title} onSetActiveTariff={this.setActiveTariff} />
                    )
                  ) : null
                }
              </TariffsContainerSidebar>
              <TariffsContainerWall>
                {!_.isEmpty(this.state.tariffs) ?
                  <Wall
                    title='Hello'
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
  flex: 0 1 315px;
`;

const TariffsContainerWall = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  padding: 5px 0;
`;