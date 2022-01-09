import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { setCollateral } from './collateralSlice';

interface ICollateralProps {
  collateralData: [];
  setCollateral: Function;
}
class Collateral extends React.Component<ICollateralProps> {
    render() {
        const { collateralData } = this.props
        return(
          <div className='grid-container'>
          <h2>Collateral</h2>
          {collateralData &&
              <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
                  <AgGridReact
                      rowData={collateralData as any}
                      immutableData={true}
                      getRowNodeId={data => data.id}
                      defaultColDef={{
                          flex: 1,
                          resizable: true,
                          editable: true,
                      }}
                      >
                      <AgGridColumn field="loanId" ></AgGridColumn>
                      <AgGridColumn field="type"></AgGridColumn>
                      <AgGridColumn field="value"></AgGridColumn>
                      <AgGridColumn field="createdDate"></AgGridColumn>
                      <AgGridColumn field="updatedDate"></AgGridColumn>
                      <AgGridColumn field="note"></AgGridColumn>
                  </AgGridReact>
              </div>
          } 
      </div>        
      )
    }

}

const mapStateToProps = (state: any) => ({
    collateralData: state.collateral.collateralData,
  })

  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    setCollateral: dispatch(setCollateral())
  });
  
export default connect<{}>(mapStateToProps, mapDispatchToProps)(Collateral)
