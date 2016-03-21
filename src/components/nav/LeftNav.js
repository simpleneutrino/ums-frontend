'use strict';

import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AppBar from 'material-ui/lib/app-bar';
import { browserHistory } from 'react-router'

import EditorInsertChart from 'material-ui/lib/svg-icons/editor/insert-chart';
import AvLibraryBooks from 'material-ui/lib/svg-icons/av/library-books';
import SocialPeople from 'material-ui/lib/svg-icons/social/people';

//import ContentFilterList from 'material-ui/lib/svg-icons/content/filter-list';
//import ActionAccountCircle from 'material-ui/lib/svg-icons/action/account-circle';

const menuItems = [
  {text: 'Статистика', link: '/statistics', icon: <EditorInsertChart/>},
  {text: 'Заяви', link: '/enrolment/list', icon: <AvLibraryBooks/>},
  {text: 'Персони', link: '/person/list', icon: <SocialPeople/>}
];

export default class UmsLeftNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  toggleRoute = (link) => {
    return () => {
      this.handleClose();
      //this.props.history.push(link);
      browserHistory.push(link);
    }
  };

  render() {
    const menuList = menuItems.map((item, i) => {
      return <MenuItem key={i} onTouchTap={this.toggleRoute(item.link)}>
        {item.icon} {item.text}
      </MenuItem>
    });
    return (
        <div>
          <LeftNav
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={open => this.setState({open})}
          >
            <AppBar title="UMS"
                    onLeftIconButtonTouchTap={this.handleClose}/>
            { menuList }
            <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
          </LeftNav>
        </div>
    );
  }
}
