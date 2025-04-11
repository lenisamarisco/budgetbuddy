import axios from 'axios';
import React, { useState } from 'react';

function SignIn({ signIn }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (name && password) {
      // signIn(name, password); // Pass name and password to signIn function
      try {
        const {data} = await axios.post("/api/users/login", {
         email: name, password
        })
        localStorage.setItem("user", JSON.stringify(data.user))
        localStorage.setItem("token", data.token)
          signIn(name, password)  
      } catch (error) {
        console.log(error)
        alert("wrong user or password")  
      }
    } else {
      alert('Please enter both name and password.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
