// eslint-disable-next-line
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';

class DeniedForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: ''
  //   };
  //
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  handleSubmit(e) {
    console.log("FORM SUBMITTED", this.state.value);
  }
  render() {
    return (
      <div>
        <h1>Denied</h1>
          <form onSubmit={this.handleSubmit}>
            <TextField hintText="Company" underlineShow={false}/>
            <Divider />
            <DatePicker hintText="Date" mode="landscape" underlineShow={false} />
        </form>
      </div>
    )
  }

}

export default DeniedForm;
