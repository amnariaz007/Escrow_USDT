//This module help to listen request
var express = require("express");
var router = express.Router();
var axios = require("axios");
const Web3 = require("web3");

const web3 = new Web3();
const Web3EthAccounts = require('web3-eth-accounts');


const Tx = require('ethereumjs-tx').Transaction;
const InputDataDecoder = require('ethereum-input-data-decoder');






web3.setProvider(
    new web3.providers.HttpProvider(
       // "https://rinkeby.infura.io/t2utzUdkSyp5DgSxasQX"
       "https://rinkeby.infura.io/v3/07b0f2fe4e234ceea0ff428f0d25326e"
    )
);

var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]

const decoder = new InputDataDecoder(abi)



var contractAddress = "0xb916b462E9663f943C40a38e3eC91367882EE0d8";



// ---------------------------------Create Account for escrow ----------------------------------------------
router.get("/create_wallet", async function (request, response) {
	var ResponseCode = 200;
	var ResponseMessage = ``;
	var ResponseData = null;
	try {
		var account = new Web3EthAccounts("https://rinkeby.infura.io/v3/2596630cf90848f198341f6e1ba5a0bc");

		let wallet = account.create();
		let walletAddress = wallet.address;
		const balance = await web3.eth.getBalance(walletAddress);
		//const weiBalance = web3.fromWei(balance, "ether");
		const count = await web3.eth.getTransactionCount(walletAddress);
		var date = new Date();
		var timestamp = date.getTime();

		ResponseData = {
			wallet: {
				private: wallet.privateKey,
				public: wallet.address,
				currency: "USDT",
				//balance: weiBalance,
				create_date: date,
				sent: count,
				received: count,
				link: `https://www.rinkeby.etherscan.io/account/${walletAddress}`
			},
			message: "",
			timestamp: timestamp,
			status: 200,
			success: true
		};
		ResponseMessage = "Completed";
		ResponseCode = 200;
    } catch (error) {
		ResponseMessage = `Transaction signing stops with the error ${error}`;
		ResponseCode = 400;
	} finally {
		return response.status(200).json({
			code : ResponseCode,
			data : ResponseData,
			msg : ResponseMessage
		});
	}
    

});


 

//------------------------------------------------------------- Seller to Escrow ---------------------------------------------------------------------

router.post("/transferEscrow", async function (request, response) {
var ResponseCode = 200;
	var ResponseMessage = ``;
	var ResponseData = null;
	
	try {
		if(request.body) {
			var ValidationCheck = true;
			if (!request.body.from_address) {
				ResponseMessage = "from address is missing \n";
				ValidationCheck = false;
			}
			if (!request.body.to_address) {
				ResponseMessage += "to address is missing \n";
				ValidationCheck = false;
			}
			if (!request.body.from_private_key) {
				ResponseMessage += "private key is missing \n";
				ValidationCheck = false;
			}
			if (!request.body.value) {
				ResponseMessage += "value is missing \n";
				ValidationCheck = false;
			} else if (!request.body.value === parseInt(request.body.value)) {
				ResponseMessage += "value must be a number \n";
				ValidationCheck = false;
			}
			
			if(ValidationCheck == true) {
				let fromAddress = request.body.from_address;
				let privateKey = request.body.from_private_key;
				let toAddress = request.body.to_address;
				let tokenValue = request.body.value;


				if (fromAddress.length < 42) {
					ResponseMessage = "Invalid From Address";
					ResponseCode = 400;
					return;
				} else if (toAddress.length < 42) {
					ResponseMessage = "Invalid To Address";
					ResponseCode = 400;
					return;
				}
    
				web3.eth.defaultAccount = fromAddress;
				//tokenValue = tokenValue * (10 ** 6);
				//  tokenValue = tokenValue;
				tokenValue = web3.utils.toWei(tokenValue, "ether");

				let contract = new web3.eth.Contract( abi , contractAddress , {
                    from: fromAddress
                });
				//let count = web3.eth.getTransactionCount(web3.eth.defaultAccount);
			let count = await web3.eth.getTransactionCount(fromAddress , 'latest');
				let data = contract.methods.transfer(toAddress,tokenValue).encodeABI();
				
				let gasPrice = web3.eth.gasPrice ;
				let gasLimit =  200000;
				//let gasLimit = web3.utils.toHex(6721975) ;
                var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

				var xmlHttp = new XMLHttpRequest();
				xmlHttp.open( "GET", "https://api-rinkeby.etherscan.io/api?module=account&action=tokenbalance&contractaddress=" +
					contractAddress +
					"&address=" +
					fromAddress +
					"&tag=latest&apikey=YourApiKeyToken", false ); // false for synchronous request
				xmlHttp.send();
				var transactions = JSON.parse(xmlHttp.responseText);
				let balance = transactions.result;

				//let balance = 1000000000000000000000000000000;
				console.log(balance);
				// if(balance >= tokenValue + gasLimit) {
					let rawTransaction = {
						"from": fromAddress,
						"nonce": web3.utils.toHex(count),
						"gasPrice": web3.utils.toHex(200000000000),
						"gasLimit": web3.utils.toHex(gasLimit),
						
						"to": contractAddress,
						//"to": toAddress,
						"data": data,
					};
					privateKey = Buffer.from(privateKey, 'hex');
					let tx = new Tx(rawTransaction , {'chain':'rinkeby'}) ;
					console.log("ye hai tx =====>", tx);

					tx.sign(privateKey);
					let serializedTx = tx.serialize();
					let hashObj = await sendrawtransaction(serializedTx);
					console.log("ye hai hashobj =====>" , hashObj);
				
					if (hashObj.response == '') {
						let hash = hashObj.hash;
						ResponseData = await getTransaction(hash);
						ResponseMessage = "Transaction successfully completed";
						ResponseCode = 200;
					} else {
						ResponseMessage = hashObj.response;
						ResponseCode = 400;
						return;
					}
				// } else {
				// 	ResponseMessage = "Balance is insufficent";
				// 	ResponseCode = 400;
				// 	return;
				// }
				
			} else {
				ResponseCode = 206
			}
		} else {
			ResponseMessage = "Transaction cannot proceeds as request body is empty";
			ResponseCode = 204
		}
		
	} catch (error) {
		ResponseMessage = `Transaction signing stops with the error body me ni gya ${error}`;
		ResponseCode = 400
	} finally {
		return response.status(200).json({
			code : ResponseCode,
			data : ResponseData,
			msg : ResponseMessage
		});
	}
});

// =========================================== Escrow to Buyer ====================================================================================================



router.post("/transferBuyer", async function (request, response) {
	var ResponseCode = 200;
		var ResponseMessage = ``;
		var ResponseData = null;
		
		try {
			if(request.body) {
				var ValidationCheck = true;
				if (!request.body.from_address) {
					ResponseMessage = "from address is missing \n";
					ValidationCheck = false;
				}
				if (!request.body.to_address) {
					ResponseMessage += "to address is missing \n";
					ValidationCheck = false;
				}
				if (!request.body.from_private_key) {
					ResponseMessage += "private key is missing \n";
					ValidationCheck = false;
				}
				if (!request.body.value) {
					ResponseMessage += "value is missing \n";
					ValidationCheck = false;
				} else if (!request.body.value === parseInt(request.body.value)) {
					ResponseMessage += "value must be a number \n";
					ValidationCheck = false;
				}
				
				if(ValidationCheck == true) {
					let fromAddress = request.body.from_address;
					let privateKey = request.body.from_private_key;
					let toAddress = request.body.to_address;
					let tokenValue = request.body.value;
	
	
					if (fromAddress.length < 42) {
						ResponseMessage = "Invalid From Address";
						ResponseCode = 400;
						return;
					} else if (toAddress.length < 42) {
						ResponseMessage = "Invalid To Address";
						ResponseCode = 400;
						return;
					}
		
					web3.eth.defaultAccount = fromAddress;
					//tokenValue = tokenValue * (10 ** 6);
					//  tokenValue = tokenValue;
					tokenValue = web3.utils.toWei(tokenValue, "ether");
	
					let contract = new web3.eth.Contract( abi , contractAddress , {
						from: fromAddress
					});
					//let count = web3.eth.getTransactionCount(web3.eth.defaultAccount);
				let count = await web3.eth.getTransactionCount(fromAddress , 'latest');
					let data = contract.methods.transfer(toAddress,tokenValue).encodeABI();
					
					let gasPrice = web3.eth.gasPrice ;
					let gasLimit =  200000;
					//let gasLimit = web3.utils.toHex(6721975) ;
					var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	
					var xmlHttp = new XMLHttpRequest();
					xmlHttp.open( "GET", "https://api-rinkeby.etherscan.io/api?module=account&action=tokenbalance&contractaddress=" +
						contractAddress +
						"&address=" +
						fromAddress +
						"&tag=latest&apikey=YourApiKeyToken", false ); // false for synchronous request
					xmlHttp.send();
					var transactions = JSON.parse(xmlHttp.responseText);
					let balance = transactions.result;
	
					//let balance = 1000000000000000000000000000000;
					console.log(balance);
					// if(balance >= tokenValue + gasLimit) {
						let rawTransaction = {
							"from": fromAddress,
							"nonce": web3.utils.toHex(count),
							"gasPrice": web3.utils.toHex(200000000000),
							"gasLimit": web3.utils.toHex(gasLimit),
							
							"to": contractAddress,
							//"to": toAddress,
							"data": data,
						};
						privateKey = Buffer.from(privateKey, 'hex');
						let tx = new Tx(rawTransaction , {'chain':'rinkeby'}) ;
						console.log("ye hai tx =====>", tx);
	
						tx.sign(privateKey);
						let serializedTx = tx.serialize();
						let hashObj = await sendrawtransaction(serializedTx);
						console.log("ye hai hashobj =====>" , hashObj);
					
						if (hashObj.response == '') {
							let hash = hashObj.hash;
							ResponseData = await getTransaction(hash);
							ResponseMessage = "Transaction successfully completed";
							ResponseCode = 200;
						} else {
							ResponseMessage = hashObj.response;
							ResponseCode = 400;
							return;
						}
					// } else {
					// 	ResponseMessage = "Balance is insufficent";
					// 	ResponseCode = 400;
					// 	return;
					// }
					
				} else {
					ResponseCode = 206
				}
			} else {
				ResponseMessage = "Transaction cannot proceeds as request body is empty";
				ResponseCode = 204
			}
			
		} catch (error) {
			ResponseMessage = `Transaction signing stops with the error body me ni gya ${error}`;
			ResponseCode = 400
		} finally {
			return response.status(200).json({
				code : ResponseCode,
				data : ResponseData,
				msg : ResponseMessage
			});
		}
	});
	
	// ===============================================================================================================================================

// ===========================================================================================================================================================






function getTransaction(hash) {
	var data;
	return new Promise(function(resolve, reject) {
		web3.eth.getTransaction(hash, function (err, transaction) {
			var date = new Date();
			var timestamp = date.getTime();
			let inputdecode = decoder.decodeData(transaction.input);
			console.log("ye hai input " ,inputdecode);
			data = {
				transaction: {
					hash: transaction.hash,
					from: transaction.from,
					to: transaction.toAddress,
					// amount: tokenValue/10**18,
					amount: parseInt(inputdecode.inputs[1]) / 10 ** 18,
					currency: "USDT",
					fee: transaction.gasPrice,
					n_confirmation: transaction.transactionIndex,
					link: `https://rinkeby.etherscan.io/tx/${hash}`
				},
				message: "",
				timestamp: timestamp,
				status: 200,
				success: true
			};
			resolve(data);
		})
	});
}

function sendrawtransaction(serializedTx) {
	var hash;
	var response = "";
	return new Promise(function(resolve, reject) {
		web3.eth.sendSignedTransaction("0x" + serializedTx.toString("hex"), function ( err, hsh ) {
			if (err) {
				response = `send Bad Request ${err}`;
			} else {
				hash = hsh;
			} 
			var obj = {
				response:  response,
				hash: hash
			};
			resolve(obj);
		});
	});
}

module.exports = router;