import React, { Component } from 'react';
import Applied from './Applied';
import Communications from './Communications';
import Denied from './Denied';
import Networking from './Networking';
import Offer from './Offer';
import Interview from './Interview';



class ActionsList extends Component {
  render() {
    const { data } = this.props
    // var newForm = this.state.showComponent ? <AppForm /> : null;
    // console.log('newFrom', newForm);
    return (
      <div>
        <ul>
          <Applied data={data}/>
          <Communications data={data} />
          <Interview data={data} />
          <Offer data={data} />
          <Networking data={data} />
          <Denied data={data} />
        </ul>
      </div>
    )
  }
}
export default ActionsList;
