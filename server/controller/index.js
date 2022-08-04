const Web3 = require('web3');
const dotenv = require('dotenv')

dotenv.config();
const rpcURL = `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`
console.log(rpcURL);
const web3 = new Web3(rpcURL);


const blocksController = async (req, res, next) => {
    
    try{
        // const {blockInfo} = req.body;
        const {id} = req.params;
            
        const blockObj = await web3.eth.getBlock(id);

        res.status(200).json(blockObj);
        
    }catch(err){
        console.error(err);
        res.status(500).json("Error Occured");
    }

}

const transactionController = async (req, res, next) => {
    
    try{
        // const {blockInfo} = req.body;
        const {id} = req.params;
            
        const txObj = await web3.eth.getTransaction(id);

        res.status(200).json(txObj);
        
    }catch(err){
        console.error(err);
        res.status(500).json("Error Occured");
    }

}

const currentBlock = async () => {
    const temp = await web3.eth.getBlock("latest")
        
    return temp;
}

const findTransactionFromBlock = (arr, id) =>{
    // 블록 내의 트랜잭션을 기준으로 from || to에 account가 있는지 확인
    arr.forEach((item, idx)=>{
        web3.eth.getTransaction(item)
            .then((obj)=>{
                if(obj.from == id || obj.to == id) return item;
            })
    })
}

const accountController = async (req, res, next) => {
    
    try{
        // const {blockInfo} = req.body;
        const {id} = req.params;

        // 현재 블록 넘버를 찾음
        // currentBlock().then(d=>{
        //     // 100번 전 블록부터 반복순회 진행
        //     for(let i = d.number-10; i<d.number; i++){
        //         web3.eth.getBlock(i)    
        //             .then((obj)=>{
        //                 return obj.transactions;
        //             })
        //             .then((data)=>{
        //                 return findTransactionFromBlock(data, id);
        //             })
        //             .then((data)=>{
        //                 console.log(data);
        //             })
        //     }
        // })
            
        
            
        const accountObj = await web3.eth.getBalance(id);

        

        res.status(200).json(accountObj);
        
    }catch(err){
        console.error(err);
        res.status(500).json("Error Occured");
    }

}

const accountTxController = (req,res, next) => {
    const id = req.params.id;


    
}

module.exports = {
    blocksController,
    transactionController,
    accountController
}