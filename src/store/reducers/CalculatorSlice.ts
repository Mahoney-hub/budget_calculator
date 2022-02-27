import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';

type ChangeType = {
    type: 'exp' | 'inc'
}

type AddItemType = {
    id: string
    type: 'exp' | 'inc'
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
    type: 'exp' | 'inc'
}

export type CalculatorSliceType = {
    operations: CalculatorType[]
}

const initialState: CalculatorSliceType = {
    operations: [
        {id: v1(), type: 'exp', description: 'asdf', sum: 234324},
        {id: v1(), type: 'inc', description: 'asdf', sum: 234324},
    ]
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<AddItemType>) {
            const description = action.payload.description
            const sum = action.payload.sum
            if (action.payload.type === 'inc') state.operations.push({id: v1(), type: 'inc', description, sum})
            if (action.payload.type === 'exp') state.operations.push({id: v1(), type: 'exp', description, sum})
        },
        removeItem(state, action: PayloadAction<RemoveItemType>) {

        }
    }
})

export const {addItem, removeItem} = calculatorSlice.actions

export default calculatorSlice.reducer