import {ActionType, CalculatorType} from '../store/reducers/CalculatorSlice';

export const formatNumber = (arr: CalculatorType[]) => {
    const num = arr.reduce((a, b) => a + b.sum, 0)
    let int, dec, newInt, resultNumber;

    [int, dec] = Math.abs(num).toFixed(2).split('.');
    // newInt = new Intl.NumberFormat("en-GB").format(int);
    resultNumber = int + '.' + dec + ' \u20BD';
    // if (int !== "0") {
    //     resultNumber = type ? type === "exp" ? "- " + resultNumber : "+ " + resultNumber : "";
    // }
    return resultNumber;
}

export const getSum = (arr: CalculatorType[], type: ActionType) => {
    let num = arr
        .filter(item => item.type === type)
        .reduce((a, b) => a + b.sum, 0);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.00'
    // let int, dec;
    // [int, dec] = Math.abs(num).toFixed(2).split('.');
    // return int + '.' + dec + ' \u20BD';
}

export const displayMonth = () => {
    let now, year, month, monthArr;

    now = new Date();
    year = now.getFullYear(); // Возвращает год
    month = now.getMonth(); // Возвращает индекс месяца

    monthArr = [
        'Январь', 'Февраль', 'Март',
        'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь',
        'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    month = monthArr[month];

    return {year, month}
}

export const getDifference = (arr: CalculatorType[]) => {
    const sumInc = arr.filter(item => item.type === 'inc').reduce((a, b) => a + b.sum, 0)
    const sumExp = arr.filter(item => item.type === 'exp').reduce((a, b) => a + b.sum, 0)
    const budget = sumInc - sumExp
    if (budget === 0) return 0
    return (budget > 0) ? `+ ${budget}` : budget
}

export const getPercent = (arr: CalculatorType[]) => {
    // Посчитать все Доходы
    const sumInc = arr.filter(item => item.type === 'inc').reduce((a, b) => a + b.sum, 0)

    // Посчитать все Расходы
    const sumExp = arr.filter(item => item.type === 'exp').reduce((a, b) => a + b.sum, 0)

    // Посчитать общий Бюджет
    const budget = sumInc - sumExp

    // Посчитать % для расходов
    return (budget > 0) ? Math.round((sumInc / sumExp) * 100) : -1
}