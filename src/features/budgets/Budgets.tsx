import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectBudgets, setBudgets } from './budgetsSlice';
import styles from './Counter.module.css';

const Collateral = () => {
    const dispatch = useAppDispatch();
    const budgetsData = useAppSelector(selectBudgets);

    console.log('BudgetsState:', budgetsData)

    useEffect(() => {
        dispatch(setBudgets())
      }, [dispatch])
    return(
        <></>
    )
}

export default Collateral