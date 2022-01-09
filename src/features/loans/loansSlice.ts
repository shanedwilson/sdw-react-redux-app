import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { string } from 'yargs';
import { RootState } from '../../app/store';
import { fetchLoans } from './loansAPI'


export interface Loan {
    id: string;
    borrower: string;
    loanDate: string;
    dueDate: string;
    recallDate: string;
    renewalDate: string;
    renewalCount: number;
    note: string;
}

export interface LoansState {
    loansData: Loan[]
}
  
  const initialState: LoansState = {
    loansData: [{
        id: '',
        borrower: '',
        loanDate: '',
        dueDate: '',
        recallDate: '',
        renewalDate: '',
        renewalCount: 0,
        note: ''
    }]
  };

  export const loansSlice = createSlice({
    name: 'loans',
    initialState,
    reducers: {
      setLoans: (state) => {
        let data = fetchLoans() as unknown as Loan[]
        state.loansData = data;
      },
    },
  });
  
  export const { setLoans } = loansSlice.actions;

  export const selectLoans = (state: RootState) => state.loans;
  
  export default loansSlice.reducer;
