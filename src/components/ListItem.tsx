import React from 'react';
import greenСircle from '../img/circle-green.svg';
import redСircle from '../img/circle-red.svg';
import {ActionType, removeItem} from '../store/reducers/CalculatorSlice';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {getPercent} from '../utils/utils';

type ListItemPropsType = {
    id: string
    type: ActionType
    description: string
    sum: number
}

export const ListItem = ({id, type, description, sum}: ListItemPropsType) => {
    const dispatch = useAppDispatch()
    // Functions
    const clickHandler = () => {
        dispatch(removeItem({id}))
    }
    // Components before rendering
    const componentSum = (type: ActionType) => {
        switch (type) {
            case 'exp':
                return <div className="item__amount color-exp">- {sum}</div>
            case 'inc':
                return <div className="item__amount color-inc">+ {sum}</div>
        }
    }
    return (
        <li className="budget-list__item item">
            <div className="item__title">{description}</div>
            <div className="item__right">
                {componentSum(type)}
                <button className="item__remove" onClick={clickHandler}>
                    <img src={(type === 'inc') ? greenСircle : redСircle} alt="delete"/>
                </button>
            </div>
        </li>
    );
};

