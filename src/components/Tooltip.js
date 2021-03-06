import React, { Component } from 'react';

import '../scss/tooltip.scss';

export default class Tooltip extends Component {

    render() {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        const itemId = this.props.itemId;
        const step_x = 'step_' + state.currentStep;
        console.log( itemGroupId );
        console.log( itemId );
        console.log( step_x );

        return (
            <div className={'tooltip tooltip_' + state.car[step_x + '_field_' + itemGroupId].values[itemId].radio[0].tooltip_position}>
                <div className='tooltip__arrow'></div>
                { state.car[step_x + '_field_' + itemGroupId].values[itemId].tooltip }
            </div>
        )
    }

    componentDidMount() {
        const { context } = this.props;
        const state = context.state;
        const itemGroupId = this.props.itemGroupId;
        const itemGroupName = this.props.itemGroupName;
        const itemId = this.props.itemId;
        const step_x = 'step_' + state.currentStep;

        let width='',
            height='';

        switch ( state.car[step_x + '_field_' + itemGroupId].values[itemId].tooltip_position ) {
            case 'bottom':
                width = document.querySelector('.' + itemGroupName).querySelectorAll('.item__item')[itemId].clientWidth / 2;
                document.querySelector('.' + itemGroupName).querySelectorAll('.item__item')[itemId].querySelector('.tooltip__arrow').style.left = width - 5 + 'px';
                break;
            case 'left':
                height = document.querySelector('.' + itemGroupName).querySelectorAll('.item__item')[itemId].clientHeight / 2;
                document.querySelector('.' + itemGroupName).querySelectorAll('.item__item')[itemId].querySelectorAll('.tooltip__arrow')[0].style.top = height - 5 + 'px';
                break;
            case 'top':
                width = document.querySelector('.' + itemGroupName).querySelectorAll('.item__item')[itemId].clientWidth / 2;
                document.querySelector('.' + itemGroupName).querySelectorAll('.item__item')[itemId].querySelectorAll('.tooltip__arrow')[0].style.left = width - 5 + 'px';
                break;
            case 'right':
                height = document.querySelector('.' + itemGroupName).querySelectorAll('.item__item')[itemId].clientHeight / 2;
                document.querySelector('.' + itemGroupName).querySelectorAll('.item__item')[itemId].querySelectorAll('.tooltip__arrow')[0].style.top = height - 5 + 'px';
                break;
            default:
        }
    }

}
