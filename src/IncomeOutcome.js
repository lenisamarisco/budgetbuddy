// IncomeOutcome.js
import React, { useState } from 'react';

function IncomeOutcome() {
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [totalBalance, setTotalBalance] = useState(1000); // Start with an initial balance (e.g., $1000)

  const handleIncomeChange = (e) => {
    setIncome(Number(e.target.value));
  };

  const handleOutcomeChange = (e) => {
    setOutcome(Number(e.target.value));
  };

  const handleAddIncome = () => {
    setTotalBalance(totalBalance + income);
    setIncome(0); // Reset income field after submission
  };

  const handleAddOutcome = () => {
    setTotalBalance(totalBalance - outcome);
    setOutcome(0); // Reset outcome field after submission
  };

  return (
    <div>
      <h3>Manage Your Finances</h3>
      <div>
        <h4>Add Income</h4>
        <input
          type="number"
          value={income}
          onChange={handleIncomeChange}
          placeholder="Enter income amount"
        />
        <button onClick={handleAddIncome}>Add Income</button>
      </div>

      <div>
        <h4>Add Outcome</h4>
        <input
          type="number"
          value={outcome}
          onChange={handleOutcomeChange}
          placeholder="Enter outcome amount"
        />
        <button onClick={handleAddOutcome}>Add Outcome</button>
      </div>

      <div>
        <h4>Total Balance: ${totalBalance}</h4>
      </div>
    </div>
  );
}

export default IncomeOutcome;
