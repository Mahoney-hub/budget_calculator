import React from 'react';
import greenСircle from '../img/circle-green.svg';
import redСircle from '../img/circle-red.svg';

type ListItemPropsType = {
    id: string
    type: 'inc' | 'exp'
    description: string
    sum: number
}

export const ListItem = ({id, type, description, sum}: ListItemPropsType) => {
    // Components before rendering
    const componentSum = (type: 'inc' | 'exp') => {
        switch (type) {
            case 'exp':
                return (
                    <div className="item__amount color-exp">
                        - {sum}
                        <div className="item__badge">
                            <div className="badge badge--dark">
                                15%
                            </div>
                        </div>
                    </div>
                )
            case 'inc':
                return <div className="item__amount color-inc">+ {sum}</div>
        }
    }
    return (
        <li className="budget-list__item item">
            <div className="item__title">{description}</div>
            <div className="item__right">
                {componentSum(type)}
                <button className="item__remove">
                    <img src={(type === 'inc') ? greenСircle : redСircle} alt="delete"/>
                </button>
            </div>
        </li>
    );
};

