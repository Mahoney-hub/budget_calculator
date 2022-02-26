import {createSlice} from '@reduxjs/toolkit';

export type CalculatorSliceType = {
    income: number[]
    expenses: number[]
}

const initialState: CalculatorSliceType = {
    income: [],
    expenses: []
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {}
})

export const {} = calculatorSlice.actions

export default calculatorSlice.reducer