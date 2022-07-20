import React from 'react'
import './ExpensesFilter.css'


const ExpenseFilter = () => {
    const filterChangeHandler = () => {

    }

  return (
    <div className='expenses-filter'>
        <div className='expense-filter__control'>
            <label>Filter By Year</label>
            <select onChange={filterChangeHandler}>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
            </select>
        </div>
    </div>
  )
}

export default ExpenseFilter