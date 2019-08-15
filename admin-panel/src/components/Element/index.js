import React, { Component } from 'react'
import styled from 'styled-components'

export default class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'text',
      value: ''
    }
  }

  componentDidMount() {
    this.setState({ value: this.props.text });
  }

  sendRequest(id, title, description) {
    try {
      (async () => {
        const response = await fetch('http://foxstudio.site/api/v2/routes/section.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `id=${id}, title=${title}, description=${description}`,
          mode: 'no-cors'
        });
      })();
    } catch (err) {
      throw err;
    }
  }

  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.setState({ view: 'text', value: event.target.value });
      this.sendRequest(event.target.id, event.target.value, '');
    }
    console.log(this.state.value);
  }

  render() {
    const { text, id } = this.props;
    return (
      <ElementWrapper >
        {this.state.view === 'text' ?
          <ElementText onClick={() => this.setState({ view: 'input' })}>{this.state.value}</ElementText>
          :
          <ElementInput id={id} onKeyPress={this.onKeyPress} type={text} placeholder={this.state.value} />
        }
      </ElementWrapper>
    )
  }
}

const ElementWrapper = styled.div``;

const ElementText = styled.span`
  font-size: 14px;
  color: #2D2D2D;
  font-weight: 500;
  flex: 1 1 auto;
  padding: 0 10px;
  font-weight: bold;
`;

const ElementInput = styled.input`
  font-size: 14px;
  color: #2D2D2D;
  font-weight: 500;
  flex: 1 1 auto;
  padding: 0 10px;
  font-weight: bold;
  width: 300px;
`;
