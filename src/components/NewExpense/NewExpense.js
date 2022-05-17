// Import react is not needed but added since many projects still use
// this import, hence will be helpful to remember that, 
// but again, it is NOT needed.
import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />}
        </div>
    )

}

export default NewExpense;