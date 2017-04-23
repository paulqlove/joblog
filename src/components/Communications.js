import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Comm from './forms/Comm';

class Communications extends React.Component {
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
    var newForm = this.state.showComponent ? <Comm /> : null;
    return (
        <li id="2" >
          <RaisedButton onClick={this.handleClick} label="Communications" />
          { newForm }
        </li>
  )}
}

export default Communications;
