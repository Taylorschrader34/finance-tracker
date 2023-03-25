import React from 'react';

import './Reports.css';

const Reports = () => {

  return (
    <>
      <div className="sidenav">
        <a href="#BalanceOverTime">Balance Over Time</a>
        <a href="#CompareBalances">Compare Balances</a>
        <a href="#Cashflow">Cashflow (Inflow/Expenses)</a>
        <a href="#CompareCategories">Compare Categories</a>
        <a href="#ExpensesOverTime">Expenses Over Time</a>
        <a href="#Statistics">Statistics</a>
        <a href="#ProfitLoss">Profit & Loss</a>
        <a href="#GenerateSpreadsheet">Generate Spreadsheet</a>
        <a href="#CompareExpenseCategories">Compare Expense Categories</a>
      </div>
    </>
  );
};

export default Reports;
