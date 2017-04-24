import React, { Component } from 'react';
// import Applied from './Applied';
// import Communications from './Communications';
// import Denied from './Denied';
// import Networking from './Networking';
// import Offer from './Offer';
// import Interview from './Interview';
import RaisedButton from 'material-ui/RaisedButton';
import AppForm from './forms/AppForm';
import Comm from './forms/Comm';
import DeniedForm from './forms/DeniedForm';
import FormInt from './forms/FormInt';
import FormOffer from './forms/FormOffer';
import NetworkForm from './forms/NetworkForm';

class ActionsList extends Component {
  constructor(props, value) {
    super(props);
    this.state = {
      showComponent: false,
      value: value
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick(value) {
    console.log('this', value);
    this.setState(prevState => ({
      showComponent: !prevState.showComponent,
      value: value
    }));
  }
  // changeValue(value, i) {
  //   console.log("changeValue ", value, i);
  //   this.setState({
  //     value: value
  //   })
  // }
  render(i) {
    const { data } = this.props;
    const { active } = this.props;
    var aForm = <AppForm />;
    var actions = ['Applied','Communications','Denied','Interview','Networking','Offer'];
    var Forms = [
      <AppForm data={data} value='Applied' />,
      <Comm value='Communications' />,
      <DeniedForm value='Denied' />,
      <FormInt value='Interview' />,
      <FormOffer value='Networking' />,
      <NetworkForm value='Offer' />
    ];
    var listForms;
    var listActions;
    let NewForm;
    let Form;

    listForms = Forms.map((Form) => {
      // console.log("checking forms", Form.props.value);
      return Form;
    })

    listActions = actions.map((action, i, Form) => {

      // console.log('index', this, Forms[i].props.value);
      let value = Form[i];
      console.log('form value', Form[i]);
      let handleClick = this.handleClick.bind(this, value);
      return (
          <li key={i}>
          <RaisedButton onClick={handleClick} label={action} value={value} />
          </li>
        )
    })

    NewForm = this.state.showComponent ? aForm : null;
    // console.log('active ', Forms[1].props.value, Forms);
    return (
      <div>
        <ul>
          { listActions }
        </ul>
        { NewForm }
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
