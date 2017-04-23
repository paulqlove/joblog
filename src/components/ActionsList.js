import React, { Component } from 'react';
// import Applied from './Applied';
// import Communications from './Communications';
// import Denied from './Denied';
// import Networking from './Networking';
// import Offer from './Offer';
// import Interview from './Interview';
import RaisedButton from 'material-ui/RaisedButton';
import AppForm from './forms/AppForm';


class ActionsList extends Component {
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
    const { data } = this.props
    const aForm = <AppForm />;
    const actions = ['Applied','Communications','Denied','Interview','Networking','Offer'];
    let actionButton;
    var newForm = this.state.showComponent ? <AppForm /> : null;

    const listActions = actions.map((action, i) => {
      console.log('list each one and I', action);
      console.log('list I', i);
    return (
        <li key={i}>
        <RaisedButton onClick={this.handleClick} label={action} />
        </li>
      )
    })
    return (
      <div>
        <ul>
          { listActions }
        </ul>
        { newForm }
      </div>
    )
  }
}
export default ActionsList;
// <Applied data={data}/>
// <Communications data={data} />
// <Interview data={data} />
// <Offer data={data} />
// <Networking data={data} />
// <Denied data={data} />
