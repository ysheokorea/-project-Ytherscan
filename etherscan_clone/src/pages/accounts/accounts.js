import Nav from "../../components/Nav/Nav"
import AccountOverView from '../../components/Account/Overview';
import Container from 'react-bootstrap/Container';
import AccountSearch from '../../components/Search/AccountSearch';
import "./accounts.css";
import axios from 'axios';

import { useState } from 'react';

function Accounts_Page({title}){
    const [balance, setBalance] = useState({});

    const getBalance = (address) =>{
        axios({
            method : "GET",
            url : `/accounts/${address}`
        })
            .then((obj)=>{
                setBalance(obj);
            })
    }

    return(
        <>
            <Nav />
            <Container fluid="md">
                <h1 style={{ color: "white" }}>{title}</h1>
                <AccountSearch getBalance = {getBalance} />
                <div className="accounts_overview">
                    <AccountOverView balance={balance}/>
                </div>
            </Container>
        </>
    )
}

export default Accounts_Page;