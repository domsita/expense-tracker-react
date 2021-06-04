import React, { useContext, useState }from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: parseFloat(amount)
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        value={text} 
                        placeholder="Enter Text..." 
                        onChange={(e)=>{setText(e.target.value)}}    
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount:</label>
                    <input 
                        type="number" 
                        value={amount} 
                        placeholder="Enter amount..." 
                        onChange={(e)=>{setAmount(e.target.value)}}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
