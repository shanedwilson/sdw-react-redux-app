import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import Loans from './Loans';
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
      setLoans: (state: { loansData: Loan[] }) => {
        let data = fetchLoans() as unknown as Loan[]
        state.loansData = data;
      },
      updateLoan: (state: any, action: PayloadAction<Loan>) => {
        const loansData = current(state).loansData
        const loanIndex =loansData.findIndex((loan: { id: string; }) => loan.id === action.payload.id)
        state.loansData[loanIndex] = action.payload
      }
    },
  });
  
  export const { setLoans } = loansSlice.actions;
  export const { updateLoan } = loansSlice.actions;


  export const selectLoans = (state: RootState) => state.loans;
  
  export default loansSlice.reducer;
