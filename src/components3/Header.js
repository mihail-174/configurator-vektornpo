import React, { Component } from 'react';
import '../scss/header.scss';

export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.setStep = this.setStep.bind(this);
  // }
  setStep(step) {
    const { context } = this.props;
    context.methods.setAppState( { currentStep: step } );
  }
  render() {
    const { context } = this.props;
    const state = context.state;
    const currentStep = context.state.currentStep;

    const list = state.steps.map((field, key) =>
      <div key={key} className={ 'hd__item hd__item_step-' + field.id + ' '+ (currentStep === field.id ? 'active' : '') } onClick={()=>this.setStep(field.id)}>
        {field.name}
      </div>
    );
    return (
      <div className="hd">
        <div className='hd__title'>
          <div className='hd__ico'>
              <img src={require('../img/avto-ico/' + context.state.listCar[context.state.currentAvto].ico)} alt=''/>
          </div>
          <div className='hd__name'>{context.state.listCar[context.state.currentAvto].name}</div>
        </div>
        {list}
      </div>
    );

  }

}
