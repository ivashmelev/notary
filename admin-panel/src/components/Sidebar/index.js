import React, { Component } from 'react'
import styled from 'styled-components'


export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { id, title, active } = this.props;
    return (
      <SidebarWrapper className='sidebar'>
        <SidebarTitle onClick={() => this.props.onSetActive ? this.props.onSetActive(id) :
          this.props.onSetActiveSection ? this.props.onSetActiveSection(id) :
            this.props.onSetActiveTariff ? this.props.onSetActiveTariff(id) : null} active={active}>{title}</SidebarTitle>
      </SidebarWrapper >
    )
  }
}

const SidebarWrapper = styled.div`
  width: 100%;
  padding: 5px 0;
`;

const SidebarTitle = styled.div`
  max-width: 220px;
  width: 100%;
  background: ${props => props.active ? '#FFFFFF' : 'rgba(223, 223, 223, 0.5)'};
  box-shadow: ${props => props.active ? '0px 2px 8px rgba(0, 0, 0, 0.25)' : 'none'};
  border-radius: 12px;
  transition: .3s cubic-bezier(0.77, 0, 0.175, 1);
  padding: 12px 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #2D2D2D;
  cursor: pointer;
  &:hover{
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  }
`;
