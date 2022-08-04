import Nav from "../../components/Nav/Nav"
import Container from 'react-bootstrap/Container';
import TransactionSearch from '../../components/Search/TransactionSearch';
import Transaction from '../../components/Transaction/Transaction';
import axios from 'axios';

import { useState } from 'react';

function Transaction_Page({title}){
    const [data, setData] = useState({})

    const getTransactionData = (hashOrNum) =>{
        axios({
            method : 'get',
            url : `/transactions/${hashOrNum}`
        })
            .then((result)=>{
                setData(result)
            })
    }
    return(
        <>
            <Nav />
            <Container fluid="md">
                <h1 style={{ color: "white" }}>{title}</h1>
                <TransactionSearch getTransactionData={getTransactionData} />
                <div className="Examplecontainer">
                    <Transaction data={data} />
                </div>
            </Container>
        </>
    )
}

export default Transaction_Page;