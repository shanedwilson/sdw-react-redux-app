import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCollateral, setCollateral } from './collateralSlice';
import styles from './Counter.module.css';

const Collateral = () => {
    const dispatch = useAppDispatch();
    const collateral = useAppSelector(selectCollateral);

    console.log('BudgetsState:', collateral)

    useEffect(() => {
        dispatch(setCollateral())
      }, [dispatch])
    return(
        <></>
    )
}

export default Collateral