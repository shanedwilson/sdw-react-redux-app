let loans = [
    {
        id: '1',
        borrower: 'SDW Construction',
        loanDate: '6/4/2020',
        dueDate: '6/4/2022',
        recallDate: '',
        renewalDate: '',
        renewalCount: 0,
        note: 'Building many buildings bigly.'
    },
    {
        id: '2',
        borrower: 'Boss Hogg Building, Inc.',
        loanDate: '6/4/2020',
        dueDate: '6/4/2022',
        recallDate: '',
        renewalDate: '',
        renewalCount: 0,
        note: 'Building a new jail for those Duke boys.'
    }
]

export function fetchLoans() {
    return loans
}
  