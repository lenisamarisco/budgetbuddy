import React, { useState } from "react";
import { categorizeExpense } from "../utils/aiCategorization";

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Other");
  const [loading, setLoading] = useState(false);

  const handleDescriptionChange = async (e) => {
    setDescription(e.target.value);
    setLoading(true);
    const aiCategory = await categorizeExpense(e.target.value);
    setCategory(aiCategory);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    
    onAddTransaction({ id: Date.now(), description, amount, category });
    setDescription("");
    setAmount("");
    setCategory("Other");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Description"
        value={description}
        onChange={handleDescriptionChange}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        value={loading ? "Categorizing..." : category}
        readOnly
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
