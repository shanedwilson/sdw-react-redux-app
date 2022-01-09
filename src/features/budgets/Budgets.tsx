import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectBudgets, setBudgets, updateBudget } from './budgetsSlice';

const Budgets = () => {
    const dispatch = useAppDispatch();
    const budgetsData = useAppSelector(selectBudgets).budgetsData;

    const saveNewValue = (params: any) => {
        let field = params.column.colId;
        let newRow = { ...params.data };
        newRow[field] = params.newValue;
        dispatch(updateBudget(newRow));
        return true;
      }

    useEffect(() => {
        dispatch(setBudgets())
      }, [dispatch])

    return(
        <div className='grid-container'>
            <h2>BUDGETS</h2>
            {budgetsData.length &&
                <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
                    <AgGridReact
                        rowData={budgetsData as any}
                        immutableData={true}
                        getRowNodeId={data => data.id}
                        defaultColDef={{
                            flex: 1,
                            resizable: true,
                            editable: true,
                        }}
                        >
                        <AgGridColumn field="borrower" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="materials" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="labor" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="createdDate" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="updatedDate" valueSetter={saveNewValue}></AgGridColumn>
                        <AgGridColumn field="note" valueSetter={saveNewValue}></AgGridColumn>
                    </AgGridReact>
                </div>
            }
        </div>
    )   
}

export default Budgets
