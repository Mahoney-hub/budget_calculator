import React from 'react';

export const HeaderBC = () => {
    return (
        <header className="header">
            <div className="header__title">
                Бюджет за
                <span id="month">Март</span>
                <span id="year">2020</span>
            </div>
            <div className="header__value" id="budget-value">+ 2,345.64</div>

            <div className="header__info info-box info-box--income">
                <div className="info-box__title">Доходы</div>
                <div className="info-box__right">
                    <div id="income-label" className="info-box__value">+ 14,300.00</div>
                    <div className="info-box__percents"></div>
                </div>
            </div>
            <div className="header__info info-box info-box--expenses">
                <div className="info-box__title">расходы</div>
                <div className="info-box__right">
                    <div id="expense-label" className="info-box__value">- 1,954.00</div>
                    <div className="info-box__percents">
                        <div id="expense-percent-label" className="badge">
                            1145%
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

