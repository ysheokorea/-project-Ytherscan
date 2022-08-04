import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import "./Account.css";

function AccountOverView({balance}) {

    return (
        <Container>
            <div className='overview'>
                <h3>Overview</h3>
                <hr />
                <b>Balance :</b> {balance.data}
            </div>
            <div className="accounts_transaction">
                <Table striped>
                    <thead>
                        <tr>
                            <th>Txn Hash</th>
                            <th>Method</th>
                            <th>Block</th>
                            <th>Age</th>
                            <th>From</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            </div>


        </Container>
    )
}

export default AccountOverView;