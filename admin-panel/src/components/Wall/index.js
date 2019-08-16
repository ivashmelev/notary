import React, { Component } from 'react'
import styled from 'styled-components'
import Element from '../Element'



export default class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: ''
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.data,
      title: this.props.data.title
    })
  }

  handleTextChange(e) {
    this.setState(e)
  }

  sendRequest(event) {
    const getBody = () => {
      const inputs = document.querySelectorAll('.wall-input');
      let bodyStr = ``;
      for (let input of inputs) {
        bodyStr += `${input.name}=${input.value}&`;
      }
      console.log(inputs)
      return bodyStr;
    }

    const body = getBody();

    const request = async (api, method, body) => {
      try {
        const response = await fetch(`https://foxstudio.site/api/v2/routes/${api}.php`, {
          method: method,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body,
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
      case 'UPDATE_SERVICE': request('service', 'POST', body);
        break;
      case 'UPDATE_TARIFF': request('tariff', 'POST', body);
        break;
      case 'UPDATE_CONTACT': request('contact', 'POST', body);
        break;
    }

  }

  render() {
    const { data, event } = this.props;
    console.log(event);
    return (
      <WallWrapper>
        <WallId type='hidden' className='wall-input' name='id' value={data.id} />
        <WallTitle className='wall-input' type='text' name='title' onChange={e => this.handleTextChange({ title: e.target.value })} value={this.state.title} />
        <WallText value={data.description} className='wall-input' name='description' />
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
const WallId = styled.input`
`;

const WallTitle = styled.input`
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const WallText = styled.textarea`
  margin-top: 16px;
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const WallButton = styled.button`
  margin-top: 16px;
  width: 100px;
  height: 20px;
`;