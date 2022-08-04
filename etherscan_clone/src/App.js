import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main_Page from "./pages/main/main_page";
import Accounts_Page from "./pages/accounts/accounts";
import Block_Page from './pages/blocks/blocks';
import Transaction_Page from './pages/transactions/transactions';
import {useState} from 'react';
import axios from 'axios';

function App() {  

  
  
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main_Page title={"Welcome Ytehrscan"}/>} />
          <Route path="/accounts" element={<Accounts_Page title={"Accounts Details"} />} />
          <Route path="/blocks" element={<Block_Page title={"Blocks Details"}/>} />
          <Route path="/transactions" element={<Transaction_Page title={"Transaction Details"}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
