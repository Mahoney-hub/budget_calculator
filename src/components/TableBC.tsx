import React from 'react';

export const TableBC = () => {
    return (
        <section className="budget-section">
            <div className="budget__col">
                <h2 className="title title--income">Доходы</h2>
                <ul id="income__list" className="budget-list">

                </ul>
            </div>
            <div className="budget__col">
                <h2 className="title title--expenses">Расходы</h2>
                <ul id="expenses__list" className="budget-list">

                </ul>
            </div>
        </section>
    );
};

