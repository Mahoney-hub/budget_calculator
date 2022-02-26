import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type AddStateType = {
    type: 'exp' | 'inc'
    sum: number
    description: string
}

export type CalculatorType = {
    description: string
    sum: number
}

export type CalculatorSliceType = {
    income: CalculatorType[]
    expenses: CalculatorType[]
}

const initialState: CalculatorSliceType = {
    income: [],
    expenses: []
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addSum(state, action: PayloadAction<AddStateType>) {
            const description = action.payload.description
            const sum = action.payload.sum
            if (action.payload.type === 'inc') state.income.push({description, sum})
            if (action.payload.type === 'exp') state.expenses.push({description, sum})
        }
    }
})

export const {addSum} = calculatorSlice.actions

export default calculatorSlice.reducer