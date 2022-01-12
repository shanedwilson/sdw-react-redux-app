import { Action } from 'redux'

import loansReducer, {
  LoansState,
  initialState,
} from './loansSlice'

const checkReducerState = (
  initialState: LoansState,
  expectedState: LoansState,
  action: Action<any>
) => {
  expect(loansReducer(initialState, action))
    .toEqual(expectedState)
}

describe('loans reducer', () => {
  it('has good default state', () => {
    expect(loansReducer(undefined, [] as unknown as Action<LoansState>))
      .toEqual(initialState)
  })
})
