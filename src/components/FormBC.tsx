import React from 'react';
import icon from '../img/check-square.svg';

export const FormBC = () => {
    return (
        <div className="form-wrapper">
            <form className="form" id="budget-form" action="">
                <select
                    id="input__type"
                    className="form__input form__select"
                    name="action"
                >
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <input
                    id="input__description"
                    className="form__input form__input--description"
                    type="text"
                    placeholder="Описание"
                />
                <input
                    id="input__value"
                    className="form__input form__input--sum"
                    type="number"
                    placeholder="Сумма"
                />
                <button id="submit-btn" className="form__button">
                    Добавить
                    <img
                        className="form__button-icon"
                        src={icon}
                        alt="icon"
                    />
                </button>
            </form>
        </div>

    );
};

