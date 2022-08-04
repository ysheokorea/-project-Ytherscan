import "./Transaction.css"

function Transaction({ data }) {

    console.log(data);

    return (
        <>
            {data.data ? (
                <div className="block_compo">
                    <div className="block_info">
                        <div className="blockCol">Transaction Hash</div>
                        <div className="blockData">{data.data.hash}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">Status</div>
                        <div className="blockData">{data.data.hash}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">Block #</div>
                        <div className="blockData">{data.data.blockNumber}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">From</div>
                        <div className="blockData">{data.data.from}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">To</div>
                        <div className="blockData">{data.data.to}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">Value</div>
                        <div className="blockData">{data.data.value}</div>
                    </div>
                </div>
            ) : (<div className="empty"><h1>No Data</h1><h3>Block Number, Hash로 검색해보세요</h3></div>)}
        </>
    )
}

export default Transaction;