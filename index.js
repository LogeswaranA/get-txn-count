const Xdc3 = require("xdc3");
const InputDataDecoder = require('ethereum-input-data-decoder');
const decoder = new InputDataDecoder(`./abi.json`);
const axios = require('axios').default;

async function getWeb3(url){
    const xdc3 = new Xdc3(
        new Xdc3.providers.HttpProvider(url)
    );
    return xdc3;
}

async function getTotalTxn(url) {
    const response = await axios.get(url);
    var txHashList = [];
    for (var i = 0; i < response.data.items.length; i++) {
        txHashList.push(response.data.items[i].hash);
    }
    console.log("xxxxxxxxxxxxxxxx  getTotalTxn START   xxxxxxxxxxxxxxxxxxxxxxxx");
    console.log("getTotalTxn", txHashList);
    console.log("xxxxxxxxxxxxxxxx  getTotalTxn END   xxxxxxxxxxxxxxxxxxxxxxxx");
    return txHashList;
}

async function txReceipt(txHash,xdc3,methodtype) {
    var txReceiptValue = await xdc3.eth.getTransactionReceipt(txHash, async (error, txResult) => {
        if (txResult.status) {
            const txValue = await xdc3.eth.getTransaction(`${txHash}`, async (error, txResult2) => {
                var result = await decoder.decodeData(txResult2.input);
                if (result.method === methodtype) {
                    console.log('\n');
                    console.log("xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx");
                    console.log("Txn Hash is ,", `${txHash}`);
                    console.log(`Method invocation ${result.method} is, ${txResult.status}`);
                    console.log("xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx");

                } else {
                    console.log('\n');
                    console.log("xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx");
                    console.log("Txn Hash is ,", `${txHash}`);
                    console.log(`Method invocation ${result.method} is, ${txResult.status}`);
                    console.log("xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx");
                }
            });
        } else {
            console.log('\n');
            console.log("xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx");
            console.log("Txn Hash is ,", `${txHash}`);
            console.log("Transaction is failed", txResult.status);
            console.log("xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx");

        }
    });
}

module.exports= {getWeb3,getTotalTxn,txReceipt};
 