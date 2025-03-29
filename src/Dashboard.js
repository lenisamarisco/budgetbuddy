import React from 'react';

function Dashboard({ userName }) {
  return (
    <div>
      <h2>Welcome to your Dashboard, {userName}!</h2>
      <p>Here you can manage your income and expenses.</p>
    </div>
  );
}

export default Dashboard;
