import React, { useContext } from "react";
import {TransactionContext} from './TransContext';

function Child() {
    
    // let transaction = [
    //     {Amount:500, desc: "Cash"},
    //     {Amount:-40, desc: "Book"},
    //     {Amount:-200, desc: "Camera"}
        
    // ]
    let transaction = useContext(TransactionContext);
    return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h2>
        Your Balance <br /> $3500
      </h2>
      <div className="expense-container">
        <h2>
          
          Income <br /> $2000
        </h2>
        <h2>
                    Expanse <br /> $300
        </h2>
      </div>
      <h2>History</h2>
      <hr />

      <ul className="transaction-list">
        {transaction.map((transObj, ind)=>{
            return (<li>
          <span>{transObj.desc}</span>
          <span>{transObj.Amount}</span>
        </li>
     )
            })}
      </ul>
        <h3>Add New Transaction</h3>
        <hr />
      <form className="transaction-form">
        <label>
          Enter Description <br />
          <input type="text" />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input type="number" required />
        </label>
        <br />
        <input type="submit" value="Add Transaction"></input>
      </form>
    </div>
  );
}

export default Child;
