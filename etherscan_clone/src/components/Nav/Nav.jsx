import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div className="nav">
            <div >
                
                <Link style={{textDecoration:"none", color:"white"}} to="/"><h1 className="main_logo">Ytherscan<hr /></h1></Link>
                <Link style={{textDecoration:"none", color:"white"}} to="/accounts"><h3>Accounts</h3> </Link>
                <br />
                <Link style={{textDecoration:"none", color:"white"}} to="/blocks"><h3>Blocks</h3> </Link>
                <br />
                <Link style={{textDecoration:"none", color:"white"}} to="/transactions"><h3>Transactions</h3></Link>
                <br />
            </div>
        </div>
    )
}



export default Nav;