import React, { Component } from 'react'
import styled from 'styled-components'
import Element from '../Element'


export default class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: '',
      changeText: (e) => { this.setState({ data: this.props.data }); console.log(e.target); }
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
      return bodyStr;
    }

    const body = getBody();

    const request = async (api, method, id, body) => {
      try {
        const response = await fetch(`https://foxstudio.site/api/v2/routes/${api}.php`, {
          method: method,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `id=${id}&${body}`,
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
      case 'UPDATE_SERVICE': const response = request('service', 'POST', this.state.data.id, body);
        break;
      case 'UPDATE_TARIFF': request('tariff', 'POST', this.state.data.id, body);
        break;
      case 'UPDATE_CONTACT': request('contact', 'POST', this.state.data.id, body);
        break;
    }


  }

  render() {
    const { data, event } = this.props;
    console.log(data);
    return (
      <WallWrapper>
<<<<<<< HEAD
        <WallTitle><Element name='title' view='input' text={this.state.data.title} active={this.state.active} onHandleActiveButton={this.handleActiveButton} /></WallTitle>
        <WallText><Element name='description' className='wall-input' view='textarea' active={this.state.active} text={this.state.data.description} /></WallText>
        <WallButton active={this.state.active} onClick={() => this.sendRequest(event)}>Ok</WallButton>
=======
        <WallTitle><Element name='title' view='input' text={this.state.data.title} /></WallTitle>
        <WallSubTitle><Element name='subtit' view='input' text={this.state.data.subtitle} /></WallSubTitle>
        <WallText><Element name='tariff' className='wall-input' view='textarea' text={this.state.data.tariff} /></WallText>
        <WallText><Element name='price' className='wall-input' view='textarea' text={this.state.data.price} /></WallText>
        <WallButton onClick={() => this.sendRequest(event)}>Ok</WallButton>
>>>>>>> 7a01779930cbb2b8a03e944fa4a537c6a864a3db
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
const WallId = styled.input`
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