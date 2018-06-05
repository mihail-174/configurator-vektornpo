import React, { Component } from 'react';
import '../css/vacNasos.css';
import Item from '../components/Item.js'

const arr = {
  name: 'Вакуумный насос',
  machine_name: 'vacuum_pump',
  fields: [
    {
      name: "KO-505A",
      subname: "коммунальный тип 310 куб./час",
      for_avto: 'АКН',
    },
    {
      name: "KO-505A",
      subname: "коммунальный тип 310 куб./час",
      for_avto: 'МВ'
    },
    {
      name: "BP-8/3",
      subname: "взрывозащищенный компрессор 480 куб./час",
      for_avto: 'МВ'
    },
  ],
  // akn: [
  //   {name: "KO-505A", subname: "коммунальный тип 310 куб./час"},
  //   {name: "BP-8/3", subname: "взрывозащищенный компрессор 480 куб./час",}
  // ],
  // mb: [
  //   {name: "BK-6М2", subname: "взрывозащищенный компрессор 240 куб./час"},
  //   {name: "PNR.122", subname: "взрывозащищенный компрессор 730 куб./час"}
  // ]



    // {
    //   name: "BK-6М2",
    //   subname: "взрывозащищенный компрессор 240 куб./час",
    //   aaa: 'МВ',
    //   for_avto: ['МВ'],
    //   for_avto2: [
    //     {item2: 'МВ'}
    //   ]
    // },
    // {
    //   name: "PNR.122",
    //   subname: "взрывозащищенный компрессор 730 куб./час",
    //   aaa: 'АКН',
    //   for_avto: ['АКН', 'МВ'],
    //   for_avto2: [
    //     {item1: 'АКН'},
    //     {item2: 'МВ'}
    //   ]
    // }
};

export default class VacNasos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selected = event.target.parentNode.querySelector('.block__name').innerText;
    let value = event.target.getAttribute('value');
    // let descr = event.target.getAttribute('value');
    const { context } = this.props.context;
    context.methods.setAppState({
      vacNasos: {
        ...context.state.vacNasos,
        selected: selected,
        value: value
      }
    });
  }
  componentDidMount() {
    const { context } = this.props.context;
    context.methods.setAppState({
      vacNasos: {
        ...context.state.vacNasos,
        name: arr.name
      }
    });
    // console.log( context.state.selectedAvto );

    // const NewList = arr.fields.map((field, key) =>
    //   <div>
    //     {field.for_avto}
    //   </div>
    // );
    // NewList.forEach(function(item, i){
    //   console.log( item.props.children )
    // })
    // console.log( NewList )


  }
  componentDidUpdate() {}
  render() {
    const { context } = this.props.context;

    const NewList = arr.fields.map((field, key) =>
      <div>
        <Item for_avto={field.for_avto} name={arr.name} selected={field.name} subname={field.subname} value={key} key={key} machine_name={arr.machine_name} context={context} />
      </div>
    );

    return (
      <div className={"b b_row " + arr.machine_name}>
        <div className="b__title">{arr.name}</div>
        <div className="b__list">{NewList}</div>
      </div>
    );

  }
}


// ---------------------------------------------------------
    // const list = arr.fields.map((field, key) =>
    //   <div>
    //     {context.state.selectedAvto === 'АКН' && field.aaa === 'АКН' &&
    //     <div key={key} className={value === key ? 'block__item active': 'block__item'}>
    //       <input className="block__input" id={"vacNasosCheck-" + key} onChange={this.handleChange} type='radio' name='vacNasosFields' value={key} checked={value === key ? true: false} />
    //         <label htmlFor={"vacNasosCheck-" + key}>
    //         <div className="block__name">{field.name}</div>
    //         <div className="block__subname">{field.subname}</div>
    //       </label>
    //     </div>
    //     }
    //     {context.state.selectedAvto === 'МВ' && field.aaa === 'МВ' &&
    //     <div key={key} className={value === key ? 'block__item active': 'block__item'}>
    //       <input className="block__input" id={"vacNasosCheck-" + key} onChange={this.handleChange} type='radio' name='vacNasosFields' value={key} checked={value === key ? true: false} />
    //         <label htmlFor={"vacNasosCheck-" + key}>
    //         <div className="block__name">{field.name}</div>
    //         <div className="block__subname">{field.subname}</div>
    //       </label>
    //     </div>
    //     }
    //   </div>
    // );

    // <div className="block block_row vacNasos">
    //   <div className="block__title">{context.state.vacNasos.name}</div>
    //   <div className="block__list">{list}</div>
    // </div>
// ---------------------------------------------------------


// const avtoArr = arr.fields[0].avto.map((field, key) =>
//   <div>
//     {field}
//   </div>
// );
// {avtoArr}

// let avto='';
// switch (context.state.selectedAvto) {
//   case 'АКН':
//     avto = 'АКН';
//     break;
//   case 'МВ':
//     avto = 'МВ';
//     break;
//   case 'АЦН':
//     avto = 'АЦН';
//     break;
//   default:
//     avto = '';
// }
// componentsole.log( avto );

// {context.state.selectedAvto === 'МВ' ? '1' : '0' }

// let aaa;
// let mb;
// if ( context.state.selectedAvto === 'МВ' ) {
//   mb = 'МВ 1';
// } else {
//   mb = 'МВ 0';
// }

// {(() => {
//   switch (context.state.selectedAvto) {
//     case 'АКН':
//       list
//       break;
//     case 'МВ':
//       list
//       break;
//     default: 'гыы'
//   }
// })()}

// const mb = context.state.selectedAvto === 'МВ' ? '1': '0';
// const akn = context.state.selectedAvto === 'АКН' ? '1': '0';
// {field.aaa === 'МВ' &&
