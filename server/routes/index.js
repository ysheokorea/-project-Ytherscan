const express = require('express');
const router = express.Router();
const { 
    blocksController, 
    transactionController, 
    accountController,
 } = require('../controller')

router.get('/', (req, res)=>{
    res.send("It works Successfully");
})
router.get('/blocks/:id', blocksController);
router.get('/transactions/:id', transactionController);
router.get('/accounts/:id', accountController);


module.exports = router;


