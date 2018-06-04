import React, { Component } from 'react';
import '../css/ShooseAvto.css';

const avto = {
  fields: [
    {
      name: 'АКН',
      image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon.png'
    },
    {
      name: 'МВ',
      image: 'https://vektornpo.ru/sites/all/themes/vektor/images/config-icon-mb.png'
    }
  ]
}

export default class ShooseAvto extends Component {
  constructor(props) {
    super(props);
    this.shoose = this.shoose.bind(this);
  }
  shoose(e) {
    // console.log( e.currentTarget.getAttribute('data-val') );
    const {context} = this.props;
    context.methods.setAppState({
      selectedAvto: e.currentTarget.getAttribute('data-val')
    })
  }
  // componentDidMount() {
  //   const { context } = this.props;
  //   const val = {context.state.selectedAvto};
  //   console.log( val );
  // //   context.methods.setAppState({
  // //     selectedAvto:
  // //   })
  // }
  render() {
    const { context } = this.props;
    let value = parseInt(context.state.selectedAvto, 0);

    const list = avto.fields.map( (field, key) =>
      <div key={key} data-val={key} className={value === key ? 'item active' : 'item'} onClick={this.shoose}>
        <div className='image'><img src={field.image} alt={field.name}/></div>
        <div className='name'>{field.name}</div>
      </div>
    )
    return (
      <div className='ShooseAvto'>
        {list}
      </div>
    );
  }
}
