import React, { Component } from 'react'
import styled from 'styled-components'
import Element from '../Element'


export default class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: '',
      changeText: (e) => { this.setState({ data: this.props.data }); }
    }
  }

  componentDidMount() {
    this.setState((state, props) => {
      return {
        data: props.data
      }
    });
  }

  componentWillReceiveProps() {
    this.setState((state, props) => {
      return {
        data: props.data
      }
    });
  }

  handleTextChange(e) {
    const newData = { ...this.state.data };
    newData[e.target.name] = e.target.value;
    this.setState({ data: newData });
  }

  sendRequest(event) {
    const getBody = async () => {
      const inputs = document.querySelectorAll('.wall-input');
      let bodyStr = ``;
      const newData = {};
      newData.id = this.props.data.id;
      for (let input of inputs) {
        newData[input.dataset.name] = input.innerText;
        bodyStr += `${input.dataset.name}=${input.innerText}&`;
      }
      this.setState((state, props) => {
        return {
          data: newData
        }
      });
      this.props.onHandleChangeServices(newData, this.props.current);
      return await bodyStr;
    }

    const body = getBody();

    const request = async (api, method, id, body) => {
      try {
        const response = await fetch(`https://notary-nn.ru/api/v2/routes/${api}.php`, {
          method: method,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `id=${id}&${await body}`,
          mode: 'no-cors'
        });
        if (await response.ok) {
          return await response.json();
        }
      } catch (err) {
        throw err;
      }
    }
    switch (event) {
      case 'UPDATE_SERVICE': request('service', 'POST', this.state.data.id, body);
        break;
      case 'UPDATE_TARIFF': request('tariff', 'POST', this.state.data.id, body);
        break;
      case 'UPDATE_CONTACT': request('contact', 'POST', this.state.data.id, body);
        break;
      default: break;
    }
  }

  render() {
    const { data, event } = this.props;
    return (
      <WallWrapper>
        {data.title ? <WallTitle><Element name='title' view='input' text={this.state.data.title} /></WallTitle> : null}
        {data.subtitle ? <WallSubTitle><Element name='subtitle' view='input' text={this.state.data.subtitle} /></WallSubTitle> : null}
        {data.tariff ? <WallText><Element name='tariff' view='textarea' text={this.state.data.tariff} /></WallText> : null}
        {data.price ? <WallText><Element name='price' view='textarea' text={this.state.data.price} /></WallText> : null}
        {data.description ? <WallText><Element name='description' view='textarea' text={this.state.data.description} /></WallText> : null}
        {data.address ? <WallText><Element name='address' view='textarea' text={this.state.data.address} /></WallText> : null}
        {data.phone ? <WallText><Element name='phone' view='input' text={this.state.data.phone} /></WallText> : null}
        {data.mail ? <WallText><Element name='mail' view='input' text={this.state.data.mail} /></WallText> : null}
        <WallButton onClick={() => this.sendRequest(event)}>Ok</WallButton>
      </WallWrapper>
    )
  }
}

const WallWrapper = styled.div`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  padding: 12px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #2D2D2D;
  cursor: pointer;
`;

const WallTitle = styled.span`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const WallSubTitle = styled.span`
  margin-top: 16px;
  font-family: Roboto;
  font-style: italic;  
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

const WallText = styled.span`
  margin-top: 16px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const WallButton = styled.div`
  width: 140px;
  height: 40px;
  margin-top: 25px;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  background: #efefef;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  &:hover {
    background-color: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  }
`;