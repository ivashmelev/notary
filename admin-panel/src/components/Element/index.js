import React, { Component } from 'react'
import styled from 'styled-components'
import { UPDATE_SERVICE, UPDATE_TARIFF, UPDATE_CONTACT, GET_RECEPTION } from '../../helpers/constants'

export default class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'text',
      value: '',
      changeText: (e) => this.setState({ value: this.props.text })
    }
  }

  componentDidMount() {
    this.setState((state, props) => {
      return {
        value: props.text
      }
    });
  }

  componentWillReceiveProps() {
    this.setState((state, props) => {
      return {
        value: props.text
      }
    });
  }

  handleTextChange(e) {
    this.setState(e);
  }

  onKeyPress = event => {
    document.addEventListener('keydown', this.onKeyPress);

    if (event.key === 'Enter' && event.ctrlKey) {
      this.setState({ view: 'text', value: event.target.value });

      // this.sendRequest(event.target.id, event.target.value, 'description');
      document.removeEventListener('keydown', this.onKeyPress);
    }
  }

  render() {
    const { event, text, id, view, name } = this.props;
    return (
      <ElementWrapper >
        {this.state.view === 'text' ?
          <ElementText className='wall-input' data-name={name} onClick={() => this.setState({ view: this.props.view })}>{this.state.value}</ElementText> :
          this.state.view === 'input' ?
            <ElementInput id={id} onKeyPress={this.onKeyPress} type='text' placeholder={this.state.value} onChange={e => this.handleTextChange({ value: e.target.value })} value={this.state.value} /> :
            this.state.view === 'textarea' ?
              <ElementTextarea id={id} onKeyPress={this.onKeyPress} placeholder={this.state.value} onChange={e => this.handleTextChange({ value: e.target.value })} value={this.state.value} /> : null
        }
      </ElementWrapper>
    )
  }
}

const ElementWrapper = styled.div``;

const ElementText = styled.span``;

const ElementInput = styled.input`
  width: 300px;
`;

const ElementTextarea = styled.textarea`

`;
