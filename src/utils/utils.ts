import {CalculatorType} from '../store/reducers/CalculatorSlice';

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

export const getDifference = (inc: CalculatorType[], exp: CalculatorType[]) => {
    const sumInc = inc.reduce((a, b) => a + b.sum, 0)
    const sumExp = inc.reduce((a, b) => a + b.sum, 0)
    const difference = sumInc - sumExp
    if (difference === 0) return 0
    return (difference > 0) ? `+ ${difference}` : `- ${difference}`
}