import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';


class AppNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Logistix"
          style={{ textAlign: 'center' }}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

export default AppNavBar;
