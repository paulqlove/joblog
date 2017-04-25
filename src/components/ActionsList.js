import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppForm from './forms/AppForm';
import Comm from './forms/Comm';
import DeniedForm from './forms/DeniedForm';
import FormInt from './forms/FormInt';
import FormOffer from './forms/FormOffer';
import NetworkForm from './forms/NetworkForm';
import Card from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import _ from 'lodash';

class ActionsList extends Component {
  constructor(props, value) {
    super(props);
    this.state = {
      showComponent: false,
      value: value
    };
  }
  handleClick(value, prevState) {
    let preValue = JSON.stringify(this.state.value);
        preValue = preValue.replace(/"/g,"");

    if (preValue === '{}' || value === preValue ) {
        this.setState(prevState => ({
          showComponent: !prevState.showComponent,
          value: value
        }));
    } else if(value !== preValue && !this.state.showComponent) {
      this.setState(prevState => ({
        showComponent: !prevState.showComponent,
        value: value
      }));
    } else {
      this.setState(prevState => ({
        value: value
      }));
    }
  }
  render(i) {
    const { data } = this.props;

    var actions = ['Applied','Communications','Denied','Interview','Networking','Offer'];
    var Forms = [
      <AppForm data={data} />,
      <Comm />,
      <DeniedForm />,
      <FormInt />,
      <NetworkForm />,
      <FormOffer />
    ];
    var listActions;
    let NewForm;
    let matchForm;
    let DComp;

    matchForm = _.indexOf(actions, this.state.value, 0);
    DComp = Forms[matchForm];

    NewForm = this.state.showComponent ? DComp : null;

    listActions = actions.map((action, i, Form) => {
      let value = Form[i];
      let handleClick = this.handleClick.bind(this, value);

      return (
          <Tab key={i} label={action} onClick={handleClick} value={action} />
        )
    })

    return (
      <div>
        <Card>
          <Tabs>
            { listActions }
          </Tabs>
        </Card>
        <Card>
          { NewForm }
        </Card>
      </div>
    )
  }
}
export default ActionsList;
// <li key={i}>
// </li>
// <Applied data={data}/>
// <Communications data={data} />
// <Interview data={data} />
// <Offer data={data} />
// <Networking data={data} />
// <Denied data={data} />
