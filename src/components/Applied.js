// eslint-disable-next-line
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppForm from './forms/AppForm';

class Applied extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }));
  }
  render() {
    const { data } = this.props;
    const aForm = <AppForm />;
    const actions = ['Applied','Communications','Denied','Interview','Networking','Offer'];
    let actionButton;
    var newForm = this.state.showComponent ? <AppForm /> : null;

    const listActions = actions.map((action, i) => {
      console.log('list each one and I', action);
      console.log('list I', i);
    return (
        <li id={i}>
        <RaisedButton onClick={this.handleClick} label={action} />
        </li>
      )
    // return [actionButton, i];
    })
    console.log('find I', { listActions });
    return (

     )
  }
}

// module.exports =  AppForm;
export default Applied;
// <li id="1" >
// <RaisedButton onClick={this.handleClick} label="Applied" />
//
// {newForm}
// </li>
