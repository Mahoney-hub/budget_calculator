import React from 'react';
import {useAppSelector} from '../hooks/redux';
import {displayMonth, formatNumber, getDifference} from '../utils/utils';

export const HeaderBC = () => {
    // BLL
    const {income} = useAppSelector(state => state.calculator)
    const {expenses} = useAppSelector(state => state.calculator)
    const sumIncome = formatNumber(income)
    const sumExpenses = formatNumber(expenses)
    const {year} = displayMonth()
    const {month} = displayMonth()
    const difference = getDifference(income, expenses)
    return (
        <header className="header">
            <div className="header__title">
                Бюджет за
                <span> {month}</span>
                <span> {year}</span>
            </div>
            <div className="header__value">{difference}</div>

            <div className="header__info info-box info-box--income">
                <div className="info-box__title">Доходы</div>
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

