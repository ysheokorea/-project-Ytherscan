import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import "./Main.css"
import {useState, useEffect} from 'react';
import axios from 'axios';

function Main() {
    const [data, setData] = useState([]);
    const [timeValid, setTimeValid] = useState(true);

    // 메인에서 10초에 한번씩 블록정보를 가져와 디스플에이 함
    const getBlockData = () =>{
        setTimeValid(false);
        setTimeout(()=>{
            setTimeValid(true);
        }, 7000)

        axios({
            method : "GET",
            url : "/blocks/latest"
        })
            .then((obj)=>{
                if(!data.includes(obj)){
                    setData([...data, obj]);
                }
                
            })
        
    }



    return (
        <Container>
            <h1>hello</h1>
            {timeValid ? 
            <Button variant="secondary" onClick={getBlockData} active>Refresh</Button>
            :
            <Button variant="secondary" onClick={getBlockData} disabled>Refresh</Button>
            }
            <Table className='main_table' variant='light' striped>
                <thead>
                    <tr>
                        <th>Block #</th>
                        <th>Transaction #</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, idx)=>{
                        const d = new Date(item.data.timestamp*1000)
                        return (
                            <tr key={idx}>
                                <td>{item.data.number}</td>
                                <td>{item.data.hash} </td>
                                <td>{d.getHours()}:{d.getMinutes()}:{d.getSeconds()}</td>
                            </tr>    
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Main;