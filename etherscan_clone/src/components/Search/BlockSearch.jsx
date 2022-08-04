import "./Search.css";
import { Form, Button } from 'react-bootstrap'
import {useState} from 'react';

function Search({getBlockData}){
    const [inputData, setInputData] = useState('');

    
    const handleInputData = (e) => {
        setInputData(e.target.value);
    }

    const handleSearchButton = () => {
        getBlockData(inputData);
    }

    return(
        <div className="search_compo">
            <Form.Control type="text" onChange={handleInputData} placeholder="Search By Bloch Hash or Transaction Hash or Account Address"/>
            <Button variant="dark" onClick={handleSearchButton} size="lg"><span>Search</span></Button>{' '}
        </div>
    )
}

export default Search;