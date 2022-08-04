import Nav from "../../components/Nav/Nav"
import Container from 'react-bootstrap/Container';
import BlockSearch from '../../components/Search/BlockSearch';
import Block from '../../components/Block/Block';
import {useState} from 'react';
import axios from 'axios';

function Block_Page({title}) {
    const [data, setData] = useState({});

    const getBlockData = (hashOrNum) =>{
        axios({
            method : 'get',
            url : `/blocks/${hashOrNum}`
        })
            .then((result)=>{
                setData(result)
            })
    }

    return (
        <>
            <Nav />
            <Container fluid="md">
                <h1 style={{ color: "white" }}>{title}</h1>
                <BlockSearch getBlockData={getBlockData} />
                <div className="Examplecontainer">
                    <Block data={data} />
                </div>
            </Container>
        </>
    )
}

export default Block_Page;