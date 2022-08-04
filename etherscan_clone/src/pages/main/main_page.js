import Nav from "../../components/Nav/Nav"
import Container from 'react-bootstrap/Container';
import Main from '../../components/Main/Main';
import axios from 'axios';

import { useState } from 'react';

function Main_Page({title}){
    
    

    return(
        <>
            <Nav />
            <Container fluid="md">
                <h1 style={{ color: "white" }}>{title}</h1>
                <Main />
            </Container>
        </>
    )
}

export default Main_Page;