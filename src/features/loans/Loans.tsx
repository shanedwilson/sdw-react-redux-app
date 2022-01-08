import React, { useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectLoans, setLoans } from './loansSlice';
import styles from './Counter.module.css';

const Loans = () => {
    const dispatch = useAppDispatch();
    const loansData = useAppSelector(selectLoans);

    console.log('LoansState:', loansData)

    useEffect(() => {
        dispatch(setLoans())
      }, [dispatch])
    return(
        <></>
    )
}

export default Loans