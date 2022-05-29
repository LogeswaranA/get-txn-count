const{getWeb3,getTotalTxn,txReceipt} =  require("./index.js");

async function testing(){
    var url ="https://rpc.xinfin.network"; 
    var web3 =  await getWeb3(url);
    console.log("web3 vaue is",web3)
    var contractaddress='xdc9072328cce4B1F5e9CFb6d0D15b588B33DD4bE21';
    var explorerUrl = `https://explorer.xinfin.network/api/txs/listByAccount/${contractaddress}?page=1&limit=20&tx_type=all`;
    
    var txHashList = await getTotalTxn(explorerUrl);
    console.log(txHashList);
    for (i = 0; i < txHashList.length; i++) {
        await txReceipt(txHashList[i],web3,"setFulfillmentPermission")
    }
}

testing();
