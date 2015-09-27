'use strict';

import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import SideMenu from 'react-native-side-menu';

import * as sideMenu from '../actions/sideMenu';
import Menu from '../components/menu';
import Content from '../components/content';

@connect((state) => ({
  sideMenu: state.sideMenu
}))
class SideMenuApp extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(newProps) {
    const sideMenuRef = this.refs['sideMenu'];
    const { sideMenu } = newProps;

    switch (sideMenu.status) {
      case "open":
        sideMenuRef.openMenu()
        break;
      case "close":
        sideMenuRef.closeMenu();
        break;
      case "toggle":
        sideMenuRef.toggleMenu();
        break;
      default:
    }

    return false;
  }

  render() {
    return (
      <SideMenu ref="sideMenu" menu={<Menu/>}>
        <Content/>
      </SideMenu>
    );
  }
}

export default SideMenuApp;
