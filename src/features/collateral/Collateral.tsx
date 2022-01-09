import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCollateral, setCollateral } from './collateralSlice';
import styles from './Counter.module.css';

class Collateral extends React.Component {
    render() {
        console.log('PROPS: ', this.props)
        return(
            <></>
        )
    }

}

const mapStateToProps = (state: { collateral: any; }) => ({
    collateral: state.collateral,
  })

  const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    setCollateral: dispatch(setCollateral())
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Collateral)
