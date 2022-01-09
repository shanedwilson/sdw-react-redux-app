import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import budgetsReducer from '../features/budgets/budgetsSlice'
import collateralReducer from '../features/collateral/collateralSlice'
import loansReducer from '../features/loans/loansSlice'


export const store = configureStore({
  reducer: {
    loans: loansReducer,
    budgets: budgetsReducer,
    collateral: collateralReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
