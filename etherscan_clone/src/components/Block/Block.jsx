import "./Block.css"

function Block({ data }) {
    return (
        <>
            {data.data ? (
                <div className="block_compo">
                    <div className="block_info">
                        <div className="blockCol">Block Height</div>
                        <div className="blockData">{data.data.number}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">Hash</div>
                        <div className="blockData">{data.data.hash}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">Miner</div>
                        <div className="blockData">miner</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">Timestamp</div>
                        <div className="blockData">{data.data.timestamp}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">LogsBloom</div>
                        <div className="blockData">{data.data.logsBloom.substr(0, 20)}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">Transactions(Num)</div>
                        <div className="blockData">{data.data.transactions.length}</div>
                    </div>



                    <div className="block_info">
                        <div className="blockCol">Difficulty</div>
                        <div className="blockData">{data.data.difficulty}</div>
                    </div>


                    <div className="block_info">
                        <div className="blockCol">Gas Used</div>
                        <div className="blockData">{data.data.gasUsed}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">Gas Limit</div>
                        <div className="blockData">{data.data.gasLimit}</div>
                    </div>


                    <div className="block_info">
                        <div className="blockCol">Extra Data</div>
                        <div className="blockData">{data.data.extraData}</div>
                    </div>

                    <div className="block_info">
                        <div className="blockCol">Parent Hash</div>
                        <div className="blockData">{data.data.parentHash}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">Sha3Uncles</div>
                        <div className="blockData">{data.data.sha3Uncles}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">StateRoot</div>
                        <div className="blockData">{data.data.stateRoot}</div>
                    </div>
                    <div className="block_info">
                        <div className="blockCol">Nonce</div>
                        <div className="blockData">{data.data.nonce}</div>
                    </div>
                </div>
            ) : (<div className="empty"><h1>No Data</h1><h3>Block Number, Hash로 검색해보세요</h3></div>)}
        </>
    )
}

export default Block;