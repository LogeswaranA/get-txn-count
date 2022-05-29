# get-txn-count
## By Logeswaran

This is generic script, which you can run against any contract and verify number of transaction executetd on specific contract address and the method invoked successfully.

## How to Run
## Installation

[Node.js](https://nodejs.org/) v10+ to run.
Install the dependencies and devDependencies and start the server.

```sh
npm install get-txn-count
```

create a abi.json file and paste your contract abi. For intance,

```
[
    {
      "constant": false,
      "inputs": [
        {
          "name": "_requestId",
          "type": "bytes32"
        },
        {
          "name": "_payment",
          "type": "uint256"
        },
        {
          "name": "_callbackFunc",
          "type": "bytes4"
        },
        {
          "name": "_expiration",
          "type": "uint256"
        }
      ],
      "name": "cancelOracleRequest",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_requestId",
          "type": "bytes32"
        },
        {
          "name": "_payment",
          "type": "uint256"
        },
        {
          "name": "_callbackAddress",
          "type": "address"
        },
        {
          "name": "_callbackFunctionId",
          "type": "bytes4"
        },
        {
          "name": "_expiration",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes32"
        }
      ],
      "name": "fulfillOracleRequest",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_sender",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "onTokenTransfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_sender",
          "type": "address"
        },
        {
          "name": "_payment",
          "type": "uint256"
        },
        {
          "name": "_specId",
          "type": "bytes32"
        },
        {
          "name": "_callbackAddress",
          "type": "address"
        },
        {
          "name": "_callbackFunctionId",
          "type": "bytes4"
        },
        {
          "name": "_nonce",
          "type": "uint256"
        },
        {
          "name": "_dataVersion",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "oracleRequest",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_node",
          "type": "address"
        },
        {
          "name": "_allowed",
          "type": "bool"
        }
      ],
      "name": "setFulfillmentPermission",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_recipient",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_link",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "specId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "requester",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "payment",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "callbackAddr",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callbackFunctionId",
          "type": "bytes4"
        },
        {
          "indexed": false,
          "name": "cancelExpiration",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "dataVersion",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "OracleRequest",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "name": "CancelOracleRequest",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "EXPIRY_TIME",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_node",
          "type": "address"
        }
      ],
      "name": "getAuthorizationStatus",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "withdrawable",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
```


import the following method in your js file

```
const{getWeb3,getTotalTxn,txReceipt} =  require("get-txn-count");

```

Call getWeb3 by passing your RPC url

```
    var url ="https://rpc.xinfin.network"; 
    var web3 =  await getWeb3(url);
```

construct explore URL to get the number of transaction frm respective explorer. Here it is xdc explorer

```
    var contractaddress='xdc9072328cce4B1F5e9CFb6d0D15b588B33DD4bE21';
    var explorerUrl = `https://explorer.xinfin.network/api/txs/listByAccount/${contractaddress}?page=1&limit=20&tx_type=all`;
    var txHashList = await getTotalTxn(explorerUrl);

```

Then call txReceipt in loop for number of hash pulled for corresponding contract address like below

```
    for (i = 0; i < txHashList.length; i++) {
        await txReceipt(txHashList[i],web3,"setFulfillmentPermission")
    }

```

Final version of code is below



```
const{getWeb3,getTotalTxn,txReceipt} =  require("get-txn-count");

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

testing()
```

Run your file like this

```
node filename.js
```

Output would be like below

```
xxxxxxxxxxxxxxxx  getTotalTxn START   xxxxxxxxxxxxxxxxxxxxxxxx
getTotalTxn [ '0x1aa2a12403bc95668c5a5bc89d68cabd9991775f882ad43ab18d387fe8fd81ee',
  '0xf3c37398e03f868b388457058cf11be35fa61d6c8339c941f4bff0624732b9e4',
  '0xff913c9a925f95f68d718a4e47138b42ffc6ead3d673ed2d923f9e44e808703d' ]
xxxxxxxxxxxxxxxx  getTotalTxn END   xxxxxxxxxxxxxxxxxxxxxxxx
[ '0x1aa2a12403bc95668c5a5bc89d68cabd9991775f882ad43ab18d387fe8fd81ee',
  '0xf3c37398e03f868b388457058cf11be35fa61d6c8339c941f4bff0624732b9e4',
  '0xff913c9a925f95f68d718a4e47138b42ffc6ead3d673ed2d923f9e44e808703d' ]


xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx
Txn Hash is , 0x1aa2a12403bc95668c5a5bc89d68cabd9991775f882ad43ab18d387fe8fd81ee
Method invocation fulfillOracleRequest is, true
xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx


xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx
Txn Hash is , 0xff913c9a925f95f68d718a4e47138b42ffc6ead3d673ed2d923f9e44e808703d
Method invocation null is, true
xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx


xxxxxxxxxxxxxxxx  Method Invocation Status Check START   xxxxxxxxxxxxxxxxxxxxxxxx
Txn Hash is , 0xf3c37398e03f868b388457058cf11be35fa61d6c8339c941f4bff0624732b9e4
Method invocation setFulfillmentPermission is, true
xxxxxxxxxxxxxxxxxx  Method Invocation Status Check END   xxxxxxxxxxxxxxxxxxxxxxxxx

```