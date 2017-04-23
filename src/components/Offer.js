import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FormOffer from './forms/FormOffer';

class Offer extends React.Component {
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
    var newForm = this.state.showComponent ? <FormOffer /> : null;
    return (
        <li id="4" >
          <RaisedButton onClick={this.handleClick} label="Offer" />
          {newForm}
        </li>
  )}
}

export default Offer;
