import React from 'react';
import TransactionsItem from './TransactionsItem';

function Transactions({income, setIncome}) {

    const sortByDate = (a, b) =>{
        return a.date - b.date;
    }

  return (
    <div className='transactions-list'>
        {
            income.sort(sortByDate).map((value, index) =>
            <TransactionsItem key={index} income={value} index={index} />)
        }


    </div>
  )
}

export default Transactions;