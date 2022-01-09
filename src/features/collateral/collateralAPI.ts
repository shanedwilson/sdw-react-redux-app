let collateral = [
    {
        id: 1,
        loanId: '1',
        type: 'Existing real estate',
        value: '$17,000,000',
        createdDate: '5/4/2020',
        updatedDate: '',
        note: ''
    },
    {
        id: 2,
        loanId: '2',
        type: 'Vintage car collection',
        value: '$3,000,000',
        createdDate: '5/4/2020',
        updatedDate: '',
        note: ''
    }
]

export const fetchCollateral= () => {
    console.log('FETCH COLLATERAL!!!')
    return collateral
}
  