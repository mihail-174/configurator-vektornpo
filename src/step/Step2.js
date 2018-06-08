import React, { Component } from 'react';
import Header from '../components2/Header';
import Footer from '../components2/Footer';

import Item from '../components2/Item';

// import PloshchadkaObsluzhivaniia from '../components/PloshchadkaObsluzhivaniia.js';
// import Osveshchenie from '../components/Osveshchenie.js';
// import PodogrevOtVs from '../components/PodogrevOtVs.js';
// import Ispolnenie from '../components/Ispolnenie.js';
// import KreplenieOgnetushitelia from '../components/KreplenieOgnetushitelia.js';
// import Kalibrovka from '../components/Kalibrovka';

// const Context = React.createContext()

export default class Step2 extends Component {
  render() {
    const { context } = this.props;
    const list = context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep].map((field, key) =>
      <div key={key} className={'b ' + field.system}>
        <div className='b__title'>{field.name}</div>
        <Item type={field.type} systemName={field.system} options={context.state['fields__' + context.state.currentAvto + '__' + context.state.currentStep  + '__' + field.id]} context={context} />
      </div>
    );

    return (
      <div className='step step_one'>
        <Header context={context} />
        <div className='content'>
          {list}
        </div>
        <Footer context={context} />
      </div>
    );

  }

}
