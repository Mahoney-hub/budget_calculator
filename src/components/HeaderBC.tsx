import React from 'react';
import {useAppSelector} from '../hooks/redux';
import {displayMonth, formatNumber, getDifference, getSum} from '../utils/utils';

export const HeaderBC = () => {
    // BLL
    const {operations} = useAppSelector(state => state.calculator)
    const sumIncome = getSum(operations, 'inc')
    const sumExpenses = getSum(operations, 'exp')
    const {year} = displayMonth()
    const {month} = displayMonth()
    const difference = getDifference(operations)
    return (
        <header className="header">
            <div className="header__title">
                Бюджет за
                <span> {month}</span>
                <span> {year}</span>
            </div>
            <div className="header__value">{difference}</div>

            <div className="header__info info-box info-box--income">
                <div className="info-box__title">доходы</div>
                <div className="info-box__right">
                    <div className="info-box__value">+ {sumIncome}</div>
                    <div className="info-box__percents"></div>
                </div>
            </div>
            <div className="header__info info-box info-box--expenses">
                <div className="info-box__title">расходы</div>
                <div className="info-box__right">
                    <div className="info-box__value">- {sumExpenses}</div>
                    <div className="info-box__percents">
                        <div className="badge">
                            1145%
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

