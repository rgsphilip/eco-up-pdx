import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
         <Menu>
          <Menu.Item as={Link} to="/" name='ecoUp PDX'/>
          <Menu.Item as={Link} to="/about" name='About'/>
          <Menu.Item name='Putting it all together'/>
        </Menu> 
      </div>
    )
  }
}

export default Header;
