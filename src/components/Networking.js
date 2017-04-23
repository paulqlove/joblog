import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import NetworkForm from './forms/NetworkForm';

class Networking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }));
  }
  render() {
    var newForm = this.state.showComponent ? <NetworkForm /> : null;
    return (
        <li id="7" >
          <RaisedButton onClick={this.handleClick} label="Networking" />
          { newForm }
        </li>
  )}
}

export default Networking;
