import { useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectLoans, setLoans, updateLoan } from './loansSlice';
import './Loans.css';

const Loans = () => {
    const dispatch = useAppDispatch();
    const loansData = useAppSelector(selectLoans).loansData

    const saveNewValue = (params: any) => {
        let field = params.column.colId;
        let newRow = { ...params.data };
        newRow[field] = params.newValue;
        dispatch(updateLoan(newRow));
        return true;
      };

    useEffect(() => {
        dispatch(setLoans())
      }, [dispatch])

    return(
        <div className='grid-container'>
            <h2>LOANS</h2>
            {loansData.length &&
                <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
                    <AgGridReact
                        rowData={loansData as any}
                        immutableData={true}
                        getRowNodeId={data => data.id}
                        defaultColDef={{
                            flex: 1,
                            resizable: true,
                            editable: true,
                        }}
                        >
                        <AgGridColumn field="borrower" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="loanDate" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="dueDate" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="recallDate" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="renewalDate" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="renewalCount" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="note" valueSetter={saveNewValue}></AgGridColumn>
                    </AgGridReact>
                </div>
            }
        </div>
    )
}

export default Loans
