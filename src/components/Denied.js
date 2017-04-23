import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DeniedForm from './forms/DeniedForm';

class Denied extends React.Component {
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
    var newForm = this.state.showComponent ? <DeniedForm /> : null;
    return (
       <li id="8" >
        <RaisedButton onClick={this.handleClick} label="Denied" />
        { newForm }
      </li>
  )}
}

export default Denied;
