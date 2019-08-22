import React, { Component } from 'react'
import ServiceElement from '../ServiceElement'
import styled from 'styled-components'
import responsive from '../../responsive'

export default class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      current: '9'
    }
  }

  componentDidMount() {
    (async () => {
      const response = await fetch('https://foxstudio.site/api/v2/routes/service.php');
      if (response.ok) {
        this.setState({ services: await response.json() })
        if (this.state.services.length > 0) {
          this.setState({ current: this.state.services[0].id })
        }
      }
    })();
  }

  render() {
    const { services, current } = this.state
    return (
      <ServiceListWrapper>
        <ServiceListTitleWrap>
          <ServiceListTitleBlock>
            <ServiceListTitle>
              {services.map((element, index) =>
                current === element.id ?
                  <ServiceListTitleElement
                    key={index}
                    style={{ color: '#E6B980' }}
                    onClick={() => {
                      this.setState({ current: element.id });
                    }}
                  >
                    {element.title}
                  </ServiceListTitleElement>
                  :
                  <ServiceListTitleElement
                    key={index}
                    onClick={() => {
                      this.setState({ current: element.id });
                    }}
                  >
                    {element.title}
                  </ServiceListTitleElement>
              )}
            </ServiceListTitle>
          </ServiceListTitleBlock>
        </ServiceListTitleWrap>
        <ServiceListDescriptionWrap>
          <ServiceListDescription>
            {services.map((element, index) =>
              current === element.id ?
                <ServiceElement
                  key={index}
                  title={element.title}
                  description={element.description}
                  current={index + 1}
                />
                : null)}
          </ServiceListDescription>
        </ServiceListDescriptionWrap>
      </ServiceListWrapper >
    )
  }
}

const ServiceListWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 0 200px 0;

  @media ${responsive.tabletB} {
    flex-direction: column;
    flex-flow: column-reverse;
    padding: 0;
  }
`;

const ServiceListTitle = styled.div`
  width: calc(100% + 17px);
  height: 780px;
  overflow: auto;
  padding: 90px 40px 90px 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #2D2D2D;
  box-sizing: border-box;
  @media ${responsive.notebook} {
    padding: 90px 40px 90px 30px;
  }
  @media ${responsive.tabletB} {
    padding: 60px 30px 0 30px;
    width: 100%;
    align-items: flex-start;
  }
  @media ${responsive.tablet} {
    padding: 40px 15px 0 15px;
    height: 400px;
  }
`;

const ServiceListTitleWrap = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 0 120px 0 0;
  @media ${responsive.tabletB} {
    width: 100%;
    padding: 0;
    padding: 0 0 50px 0;
    background: #2D2D2D;
  }
`

const ServiceListTitleBlock = styled.div`
  overflow: hidden;
  position: relative;

  :before{
    content: '';
    display: block;
    width: 100%;
    height: 100px;
    background: linear-gradient(0deg, rgba(45, 45, 45, 0) 0%, #2D2D2D 95.83%);
    position: absolute;
    top: 0;
  }

  :after{
    content: '';
    display: block;
    width: 100%;
    height: 100px;
    background: linear-gradient(0deg,#2D2D2D 9.9%,rgba(45,45,45,0) 100%);
    position: absolute;
    bottom: 0;
  }
  @media ${responsive.tabletB} {
    :before{
      height: 60px;
    }
    :after{
      height: 60px;
    }
  }
  @media ${responsive.tablet} {
    :before{
      height: 40px;
    }
    :after{
      height: 100px;
    }
  }
`;

const ServiceListTitleElement = styled.span`
  max-width: 420px;
  width: 100%;
  font-size: 18px;
  line-height: 30px;
  font-family: Montserrat Bold;
  text-align: right;
  letter-spacing: 0.05em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover{
    color: #E6B980;
    cursor: pointer;
  }
  @media ${responsive.notebookB} {
    font-size: 16px;
    line-height: 30px;
  }
  @media ${responsive.tabletB} {
    text-align: left;
    justify-content: flex-start;
    max-width: 100%;
  }

  @media ${responsive.tablet} {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0;
    margin-bottom: 20px;
  }
`;

const ServiceListDescription = styled.div`
  max-width: 556px;
  width: 100%;
  @media ${responsive.tabletB} {
    max-width: 100%;
  }
`;

const ServiceListDescriptionWrap = styled.div`
  width: 50%;
  box-sizing: border-box;
  @media ${responsive.notebook} {
    padding: 0 30px 0 0;
  }
  @media ${responsive.tabletB} {
    width: 100%;
    padding: 0 30px 50px 30px;
  }
  @media ${responsive.tabletB} {
    padding: 0 15px 100px 15px;
  }
`
