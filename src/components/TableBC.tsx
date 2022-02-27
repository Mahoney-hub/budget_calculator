import React from 'react';
import {useAppSelector} from '../hooks/redux';
import {v1} from 'uuid';
import {ListItem} from './ListItem';

export const TableBC = () => {
    const {operations} = useAppSelector(state => state.calculator)
    return (
        <section className="budget-section">
            <div className="budget__col">
                <h2 className="title title--income">Доходы</h2>
                <ul id="income__list" className="budget-list">
                    {operations.filter(item => item.type === 'inc')
                        .map(item => <ListItem key={v1()} {...item}/>)}
                </ul>
            </div>
            <div className="budget__col">
                <h2 className="title title--expenses">Расходы</h2>
                <ul id="expenses__list" className="budget-list">
                    {operations.filter(item => item.type === 'exp')
                        .map(item => <ListItem key={v1()} {...item}/>)}
                </ul>
            </div>
        </section>
    );
};

