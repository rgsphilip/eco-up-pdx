import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
class Header extends Component {
  render() {
    return (
      <div>
         <Menu>
          <Menu.Item name='ecoUp PDX'/>
          <Menu.Item name='About'/>
          <Menu.Item name='Putting it all together'/>
        </Menu> 
      </div>
    )
  }
}

export default Header;
