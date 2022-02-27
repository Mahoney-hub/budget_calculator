import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';

export type ActionType = 'exp' | 'inc'

type AddItemType = {
    type: ActionType
    description: string
    sum: number
}

type RemoveItemType = {
    id: string
}

export type CalculatorType = {
    id: string
    description: string
    sum: number
    type: ActionType
}

export type CalculatorSliceType = {
    operations: CalculatorType[]
}

const initialState: CalculatorSliceType = {
    operations: []
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<AddItemType>) {
            const description = action.payload.description
            const sum = action.payload.sum
            const type = action.payload.type
            state.operations.push({id: v1(), type, description, sum})
        },
        removeItem(state, action: PayloadAction<RemoveItemType>) {
            state.operations = state.operations.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {addItem, removeItem} = calculatorSlice.actions

export default calculatorSlice.reducer