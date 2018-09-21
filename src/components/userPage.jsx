import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Cards from './userCard';
import Carousels from './images';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
    };
}

toggle() {
    console.log("toggling from "+ this.state.dropdownOpen);
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
    <div>
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Profile</DropdownItem>
          <DropdownItem disabled>Urls</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Cards />
      <Carousels />
    </div>
    );
  }
}

export default Profile;