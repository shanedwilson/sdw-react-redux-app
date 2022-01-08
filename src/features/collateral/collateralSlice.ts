import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { string } from 'yargs';
import { RootState } from '../../app/store';
import { fetchCollateral } from './collateralAPI'


export interface Collateral {
    id: string;
    loanId: string;
    type: string;
    value: string;
    createdDate: string;
    updatedDate: string;
    note: string;
}

export interface CollateralState {
    collateralData: Collateral[]
}
  
  const initialState: CollateralState = {
    collateralData: [{
        id: '',
        loanId: '',
        type: '',
        value: '',
        createdDate: '',
        updatedDate: '',
        note: ''
    }]
  };

  export const collateralSlice = createSlice({
    name: 'collateral',
    initialState,
    reducers: {
      setCollateral: (state) => {
        let data = fetchCollateral() as unknown as Collateral[]
        state.collateralData = data;
      },
    },
  });
  
  export const { setCollateral } = collateralSlice.actions;

  export const selectCollateral = (state: RootState) => state.collateral;
  
  export default collateralSlice.reducer;
