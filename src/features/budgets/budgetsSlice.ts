import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { string } from 'yargs';
import { RootState } from '../../app/store';
import { fetchBudgets } from './budgetsAPI'


export interface Budget {
    id: string;
    borrower: string;
    materials: string;
    labor: string;
    createdDate: string;
    updatedDate: string;
    note: string;
}

export interface BudgetsState {
    budgetsData: Budget[]
}
  
  const initialState: BudgetsState = {
    budgetsData: [{
        id: '',
        borrower: '',
        materials: '',
        labor: '',
        createdDate: '',
        updatedDate: '',
        note: ''
    }]
  };

  export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState,
    reducers: {
      setBudgets: (state) => {
        let data = fetchBudgets() as unknown as Budget[]
        state.budgetsData = data;
      },
    },
  });
  
  export const { setBudgets } = budgetsSlice.actions;

  export const selectBudgets = (state: RootState) => state.budgets;
  
  export default budgetsSlice.reducer;
