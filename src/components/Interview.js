import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FormInt from './forms/FormInt';

class Interview extends React.Component {
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
      var newForm = this.state.showComponent ? <FormInt /> : null;
    return (
       <li id="3" >
        <RaisedButton onClick={this.handleClick} label="Interview" />
        { newForm }
      </li>
  )}
}

export default Interview;
