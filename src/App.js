import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Accounts from './pages/Accounts/Accounts';
import CreditCards from './pages/Accounts/CreditCards';
import BankAccounts from './pages/Accounts/BankAccounts';
import Cash from './pages/Accounts/Cash';
import Investments from './pages/Accounts/Investments';

import Budgets from './pages/Budgets';
import Reports from './pages/Reports/Reports';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import MonthlyReport from "./pages/TempReports/MonthlyReport";
import YearlyReport from "./pages/TempReports/YearlyReport";

import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename={'/'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="accounts/creditCards" element={<CreditCards />} />
            <Route path="accounts/investments" element={<Investments />} />
            <Route path="accounts/cash" element={<Cash />} />
            <Route path="accounts/bankAccounts" element={<BankAccounts />} />
            <Route path="budgets" element={<Budgets />} />
            <Route path="reports" element={<Reports />} />
            <Route path="contact" element={<Contact />} />
            <Route path="monthlyReport" element={<MonthlyReport />} />
            <Route path="yearlyReport" element={<YearlyReport />} />
            <Route path="*" element={<NoPage />} />ß
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
