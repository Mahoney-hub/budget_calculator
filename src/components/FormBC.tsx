import React, {ChangeEvent, MouseEvent, useState} from 'react';
import icon from '../img/check-square.svg';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
// import {addSum, changeType} from '../store/reducers/CalculatorSlice';

export const FormBC = () => {
    // const {type} = useAppSelector(state => state.calculator)
    // BLL
    const [description, setDescription] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()
    // Functions
    const changeDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }
    const changeSumHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const type = e.currentTarget.value
        // if ((type) === 'exp' || (type) === 'inc') dispatch(changeType({type}))
    }
    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const sum = +value
        // dispatch(addSum({type, description, sum}))
        setValue('')
        setDescription('')
    }
    return (
        <div className="form-wrapper">
            <form className="form" action="">
                <select
                    className="form__input form__select"
                    name="action"
                    // value={type}
                    onChange={changeSelectHandler}
                >
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>
                <input
                    className="form__input form__input--description"
                    type="text"
                    placeholder="Описание"
                    value={description}
                    onChange={changeDescriptionHandler}
                />
                <input
                    className="form__input form__input--sum"
                    type="number"
                    placeholder="Сумма"
                    value={value}
                    onChange={changeSumHandler}
                />
                <button className="form__button" onClick={clickHandler}>
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

