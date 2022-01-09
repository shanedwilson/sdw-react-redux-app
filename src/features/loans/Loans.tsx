import React, { useEffect, useState } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectLoans, setLoans } from './loansSlice';
import './Loans.css';

const Loans = () => {
    const dispatch = useAppDispatch();
    const loansData = useAppSelector(selectLoans).loansData

    const onCellValueChanged = (event: { data: any; }) => {
        console.log('data after changes is: ', event.data);
      };

    useEffect(() => {
        dispatch(setLoans())
      }, [dispatch])

    return(
        <div className='grid-container'>
        {loansData.length &&
            <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
                <AgGridReact
                    rowData={loansData as any}
                    onCellValueChanged={onCellValueChanged}
                    >
                    <AgGridColumn field="borrower" editable={true}></AgGridColumn>
                    <AgGridColumn field="loanDate" editable={true}></AgGridColumn>
                    <AgGridColumn field="dueDate" editable={true}></AgGridColumn>
                    <AgGridColumn field="recallDate" editable={true}></AgGridColumn>
                    <AgGridColumn field="renewalDate" editable={true}></AgGridColumn>
                    <AgGridColumn field="renewalCount" editable={true}></AgGridColumn>
                    <AgGridColumn field="note" editable={true}></AgGridColumn>
                </AgGridReact>
            </div>
        }
        </div>
    )
}

export default Loans