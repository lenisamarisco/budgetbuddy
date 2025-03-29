import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
import Register from './Register';
import Dashboard from './Dashboard';
import CryptoJS from 'crypto-js';
import axios from 'axios';

function App() {
  const [budget, setBudget] = useState(1000);
  const [income, setIncome] = useState([]);
  const [outcome, setOutcome] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [aiAdvice, setAiAdvice] = useState('');
  const navigate = useNavigate();

  // Load data from localStorage when the app starts
  useEffect(() => {
    if (isLoggedIn) {
      const savedIncome = JSON.parse(localStorage.getItem('income')) || [];
      const savedOutcome = JSON.parse(localStorage.getItem('outcome')) || [];
      setIncome(savedIncome);
      setOutcome(savedOutcome);
    }
  }, [isLoggedIn]);

  const signIn = (name, password) => {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    setIsLoggedIn(true);
    setUserName(name);
    navigate('/dashboard');
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setUserName('');
    setIncome([]);
    setOutcome([]);
    setAiAdvice('');
    navigate('/sign-in');
  };

  const addIncome = (name, value) => {
    if (!isLoggedIn) {
      alert("Sign in to add income.");
      navigate('/sign-in');
      return;
    }
    if (name && value > 0) {
      const updatedIncome = [...income, { name, value }];
      setIncome(updatedIncome);
      localStorage.setItem('income', JSON.stringify(updatedIncome));
      getAiAdvice(updatedIncome, outcome); // Get AI advice
      clearIncomeInputs(); // Clear input fields
    }
  };

  const addOutcome = (name, value) => {
    if (!isLoggedIn) {
      alert("Sign in to add an outcome.");
      navigate('/sign-in');
      return;
    }
    if (name && value > 0) {
      const updatedOutcome = [...outcome, { name, value }];
      setOutcome(updatedOutcome);
      localStorage.setItem('outcome', JSON.stringify(updatedOutcome));
      getAiAdvice(income, updatedOutcome); // Get AI advice
      clearOutcomeInputs(); // Clear input fields
    }
  };

  const clearIncomeInputs = () => {
    document.getElementById('incomeName').value = '';
    document.getElementById('incomeValue').value = '';
  };

  const clearOutcomeInputs = () => {
    document.getElementById('outcomeName').value = '';
    document.getElementById('outcomeValue').value = '';
  };

  const getAiAdvice = async (incomeData, outcomeData) => {
    const incomeTotal = incomeData.reduce((acc, curr) => acc + curr.value, 0);
    const outcomeTotal = outcomeData.reduce((acc, curr) => acc + curr.value, 0);
    const balance = incomeTotal - outcomeTotal;

    const prompt = `My income is ${incomeTotal} and my expenses are ${outcomeTotal}. My balance is ${balance}. What budgeting advice do you have?`;

    try {
      const response = await axios.post(AI_BUDGET_API, {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }, {
        headers: { "Authorization": `Bearer YOUR_OPENAI_API_KEY` }
      });

      setAiAdvice(response.data.choices[0].message.content);
    } catch (error) {
      console.error("AI request failed:", error);
      setAiAdvice("Unable to fetch AI advice. Try again later.");
    }
  };

  const exportDataToCSV = () => {
    const headers = ['Name', 'Amount'];
    const incomeData = income.map(entry => [entry.name, entry.value]);
    const outcomeData = outcome.map(entry => [entry.name, entry.value]);

    const csvContent = [
      ['Income Data'],
      headers,
      ...incomeData,
      [],
      ['Outcome Data'],
      headers,
      ...outcomeData
    ]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'budget_data.csv';
    link.click();
  };

  const deleteIncome = (index) => {
    const updatedIncome = [...income];
    updatedIncome.splice(index, 1);
    setIncome(updatedIncome);
    localStorage.setItem('income', JSON.stringify(updatedIncome));
  };

  const deleteOutcome = (index) => {
    const updatedOutcome = [...outcome];
    updatedOutcome.splice(index, 1);
    setOutcome(updatedOutcome);
    localStorage.setItem('outcome', JSON.stringify(updatedOutcome));
  };

  return (
    <div className="App">
      <header>
        <h1>BudgetBuddy AI</h1>
        <nav>
          {isLoggedIn ? (
            <>
              <span>Welcome, {userName}!</span>
              <button onClick={signOut}>Log Out</button>
            </>
          ) : (
            <>
              <Link to="/sign-in"><button>Sign In</button></Link>
              <Link to="/register"><button>Register</button></Link>
            </>
          )}
        </nav>
      </header>

      <main>
        {isLoggedIn ? (
          <>
            <h2>Your Budget: ${income.reduce((acc, curr) => acc + curr.value, 0)}</h2>
            <h3>Your Balance: ${income.reduce((acc, curr) => acc + curr.value, 0) - outcome.reduce((acc, curr) => acc + curr.value, 0)}</h3>

            <div>
              <h3>Add Income</h3>
              <input id="incomeName" type="text" placeholder="Income Source" />
              <input id="incomeValue" type="number" placeholder="Amount" />
              <button onClick={() => addIncome(
                document.getElementById('incomeName').value,
                Number(document.getElementById('incomeValue').value)
              )}>Add Income</button>
            </div>

            <div>
              <h3>Add Outcome</h3>
              <input id="outcomeName" type="text" placeholder="Expense Name" />
              <input id="outcomeValue" type="number" placeholder="Amount" />
              <button onClick={() => addOutcome(
                document.getElementById('outcomeName').value,
                Number(document.getElementById('outcomeValue').value)
              )}>Add Outcome</button>
            </div>

            <h3>Income</h3>
            {income.map((entry, index) => (
              <div key={index}>
                <p>{entry.name}: ${entry.value}</p>
                <button onClick={() => deleteIncome(index)}>Delete</button>
              </div>
            ))}

            <h3>Outcome</h3>
            {outcome.map((entry, index) => (
              <div key={index}>
                <p>{entry.name}: ${entry.value}</p>
                <button onClick={() => deleteOutcome(index)}>Delete</button>
              </div>
            ))}

            {aiAdvice && (
              <div>
                <h3>AI Budget Advice:</h3>
                <p>{aiAdvice}</p>
              </div>
            )}

            <button onClick={exportDataToCSV}>Export Data</button>
          </>
        ) : (
          <h3>Please sign in to view your budget and add income/outcome.</h3>
        )}

        <Routes>
          <Route path="/sign-in" element={<SignIn signIn={signIn} />} />
          <Route path="/register" element={<Register signIn={signIn} />} />
          <Route path="/dashboard" element={<Dashboard userName={userName} />} />
        </Routes>
      </main>

      <footer>
        <p>Created by Lenisa Marisco</p>
      </footer>
    </div>
  );
}

export default App;
