const {Web3} = require('web3')

const url = 'api'

const web3 = new Web3(url)
const Tx = require('ethereumjs-tx').Transaction;

const address = '0x69A27eafC70e86a1f7FC86Ec58b1Ab51150F9fB3'
const contractAddress = '0x2950848daCCA2E0266a1bfD49545aC64C139c4E0'

const privateKey = Buffer.from(
    'PRIVATE_KEY',
    'hex',
)

const contractABI = require("./ABI.json");
const myContract = new web3.eth.Contract(contractABI,contractAddress);

const txObject = {
    from: address,
    to: contractAddress,
    data: myContract.methods.getTransactionSender().encodeABI(),
    gas: 200000,
    gasPrice: '100000000000'
}



myContract.methods.latestTransferHumanReadable().call()
    .then(result => {
        console.log("Transaction Receiver:", result);

        return web3.eth.accounts.signTransaction(txObject, privateKey);
    })
    .then(signedTx => {
        return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    })
    .then(receipt => {
        console.log(receipt);
        console.log("Transaction successful!");
    })
    .catch(error => {
        console.error("Transaction failed:", error);
    });






// web3.eth.getBalance(address)
//     .then(bal => {
//         const balance = web3.utils.fromWei(bal, 'ether');
//         console.log("Balance:", balance, "Sepolia");
//     })
//     .catch(error => {
//         console.error("Error fetching balance:", error);
//     })



//
// web3.eth.getTransactionCount(address)
//     .then(txCount => {
//         const data = '0x608060405234801562000010575f80fd5b506040518060400160405280600b81526020017f414954555f4461756c65740000000000000000000000000000000000000000008152506040518060400160405280600381526020017f444c54000000000000000000000000000000000000000000000000000000000081525081600390816200008e919062000614565b508060049081620000a0919062000614565b5050505f6107d09050620000bb33826200010260201b60201c565b3360055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000824565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000175575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016200016c91906200073b565b60405180910390fd5b620001885f83836200018c60201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620001e0578060025f828254620001d3919062000783565b92505081905550620002b1565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050818110156200026c578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200026393929190620007ce565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002fa578060025f828254039250508190555062000344565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003a3919062000809565b60405180910390a3505050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806200042c57607f821691505b602082108103620004425762000441620003e7565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302620004a67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000469565b620004b2868362000469565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f620004fc620004f6620004f084620004ca565b620004d3565b620004ca565b9050919050565b5f819050919050565b6200051783620004dc565b6200052f620005268262000503565b84845462000475565b825550505050565b5f90565b6200054562000537565b620005528184846200050c565b505050565b5b8181101562000579576200056d5f826200053b565b60018101905062000558565b5050565b601f821115620005c857620005928162000448565b6200059d846200045a565b81016020851015620005ad578190505b620005c5620005bc856200045a565b83018262000557565b50505b505050565b5f82821c905092915050565b5f620005ea5f1984600802620005cd565b1980831691505092915050565b5f620006048383620005d9565b9150826002028217905092915050565b6200061f82620003b0565b67ffffffffffffffff8111156200063b576200063a620003ba565b5b62000647825462000414565b620006548282856200057d565b5f60209050601f8311600181146200068a575f841562000675578287015190505b620006818582620005f7565b865550620006f0565b601f1984166200069a8662000448565b5f5b82811015620006c3578489015182556001820191506020850194506020810190506200069c565b86831015620006e35784890151620006df601f891682620005d9565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6200072382620006f8565b9050919050565b620007358162000717565b82525050565b5f602082019050620007505f8301846200072a565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6200078f82620004ca565b91506200079c83620004ca565b9250828201905080821115620007b757620007b662000756565b5b92915050565b620007c881620004ca565b82525050565b5f606082019050620007e35f8301866200072a565b620007f26020830185620007bd565b620008016040830184620007bd565b949350505050565b5f6020820190506200081e5f830184620007bd565b92915050565b6114d680620008325f395ff3fe608060405234801561000f575f80fd5b50600436106100f3575f3560e01c8063841b39fc11610095578063bead3f5011610064578063bead3f5014610289578063dd62ed3e146102a7578063f7260d3e146102d7578063f851a440146102f5576100f3565b8063841b39fc146101ff57806395d89b411461021d5780639cb641dd1461023b578063a9059cbb14610259576100f3565b806318160ddd116100d157806318160ddd1461016357806323b872dd14610181578063313ce567146101b157806370a08231146101cf576100f3565b8063035d6562146100f757806306fdde0314610115578063095ea7b314610133575b5f80fd5b6100ff610313565b60405161010c9190610ec0565b60405180910390f35b61011d610325565b60405161012a9190610ec0565b60405180910390f35b61014d60048036038101906101489190610f71565b6103b5565b60405161015a9190610fc9565b60405180910390f35b61016b6103d7565b6040516101789190610ff1565b60405180910390f35b61019b6004803603810190610196919061100a565b6103e0565b6040516101a89190610fc9565b60405180910390f35b6101b961040e565b6040516101c69190611075565b60405180910390f35b6101e960048036038101906101e4919061108e565b610416565b6040516101f69190610ff1565b60405180910390f35b61020761045b565b60405161021491906110c8565b60405180910390f35b610225610483565b6040516102329190610ec0565b60405180910390f35b610243610513565b6040516102509190610ff1565b60405180910390f35b610273600480360381019061026e9190610f71565b610519565b6040516102809190610fc9565b60405180910390f35b6102916105eb565b60405161029e91906110c8565b60405180910390f35b6102c160048036038101906102bc91906110e1565b6105f7565b6040516102ce9190610ff1565b60405180910390f35b6102df610679565b6040516102ec91906110c8565b60405180910390f35b6102fd61069e565b60405161030a91906110c8565b60405180910390f35b60606103206007546106c3565b905090565b6060600380546103349061114c565b80601f01602080910402602001604051908101604052809291908181526020018280546103609061114c565b80156103ab5780601f10610382576101008083540402835291602001916103ab565b820191905f5260205f20905b81548152906001019060200180831161038e57829003601f168201915b5050505050905090565b5f806103bf610738565b90506103cc81858561073f565b600191505092915050565b5f600254905090565b5f806103ea610738565b90506103f7858285610751565b6104028585856107e3565b60019150509392505050565b5f6012905090565b5f805f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104929061114c565b80601f01602080910402602001604051908101604052809291908181526020018280546104be9061114c565b80156105095780601f106104e057610100808354040283529160200191610509565b820191905f5260205f20905b8154815290600101906020018083116104ec57829003601f168201915b5050505050905090565b60075481565b5f8061052584846108d3565b905080156105e1578360065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f4290508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6f677712e2b248fc051cf6aa738a10e5f547b760d9e5adc66516ad7d2bf4d36386846040516105d092919061117c565b60405180910390a380600781905550505b8091505092915050565b5f803390508091505090565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60605f6018610e10846106d691906111fd565b6106e0919061122d565b90505f603c80856106f191906111fd565b6106fb919061122d565b9050610706826108f5565b61070f826108f5565b60405160200161072092919061132b565b60405160208183030381529060405292505050919050565b5f33905090565b61074c8383836001610a4e565b505050565b5f61075c84846105f7565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107dd57818110156107ce578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016107c593929190611364565b60405180910390fd5b6107dc84848484035f610a4e565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610853575f6040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161084a91906110c8565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108c3575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016108ba91906110c8565b60405180910390fd5b6108ce838383610c1d565b505050565b5f806108dd610738565b90506108ea8185856107e3565b600191505092915050565b60605f820361093b576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610a49565b5f8290505f5b5f821461096a57808061095390611399565b915050600a8261096391906111fd565b9150610941565b5f8167ffffffffffffffff811115610985576109846113e0565b5b6040519080825280601f01601f1916602001820160405280156109b75781602001600182028036833780820191505090505b5090505b5f8514610a42576001826109cf919061140d565b9150600a856109de919061122d565b60306109ea9190611440565b60f81b818381518110610a00576109ff611473565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600a85610a3b91906111fd565b94506109bb565b8093505050505b919050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610abe575f6040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610ab591906110c8565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b2e575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610b2591906110c8565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610c17578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c0e9190610ff1565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c6d578060025f828254610c619190611440565b92505081905550610d3b565b5f805f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610cf6578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610ced93929190611364565b60405180910390fd5b8181035f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d82578060025f8282540392505081905550610dcc565b805f808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610e299190610ff1565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015610e6d578082015181840152602081019050610e52565b5f8484015250505050565b5f601f19601f8301169050919050565b5f610e9282610e36565b610e9c8185610e40565b9350610eac818560208601610e50565b610eb581610e78565b840191505092915050565b5f6020820190508181035f830152610ed88184610e88565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610f0d82610ee4565b9050919050565b610f1d81610f03565b8114610f27575f80fd5b50565b5f81359050610f3881610f14565b92915050565b5f819050919050565b610f5081610f3e565b8114610f5a575f80fd5b50565b5f81359050610f6b81610f47565b92915050565b5f8060408385031215610f8757610f86610ee0565b5b5f610f9485828601610f2a565b9250506020610fa585828601610f5d565b9150509250929050565b5f8115159050919050565b610fc381610faf565b82525050565b5f602082019050610fdc5f830184610fba565b92915050565b610feb81610f3e565b82525050565b5f6020820190506110045f830184610fe2565b92915050565b5f805f6060848603121561102157611020610ee0565b5b5f61102e86828701610f2a565b935050602061103f86828701610f2a565b925050604061105086828701610f5d565b9150509250925092565b5f60ff82169050919050565b61106f8161105a565b82525050565b5f6020820190506110885f830184611066565b92915050565b5f602082840312156110a3576110a2610ee0565b5b5f6110b084828501610f2a565b91505092915050565b6110c281610f03565b82525050565b5f6020820190506110db5f8301846110b9565b92915050565b5f80604083850312156110f7576110f6610ee0565b5b5f61110485828601610f2a565b925050602061111585828601610f2a565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061116357607f821691505b6020821081036111765761117561111f565b5b50919050565b5f60408201905061118f5f830185610fe2565b61119c6020830184610fe2565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61120782610f3e565b915061121283610f3e565b925082611222576112216111a3565b5b828204905092915050565b5f61123782610f3e565b915061124283610f3e565b925082611252576112516111a3565b5b828206905092915050565b5f81905092915050565b7f4c6174657374207472616e736665722074696d657374616d703a2000000000005f82015250565b5f61129b601b8361125d565b91506112a682611267565b601b82019050919050565b5f6112bb82610e36565b6112c5818561125d565b93506112d5818560208601610e50565b80840191505092915050565b7f3a000000000000000000000000000000000000000000000000000000000000005f82015250565b5f61131560018361125d565b9150611320826112e1565b600182019050919050565b5f6113358261128f565b915061134182856112b1565b915061134c82611309565b915061135882846112b1565b91508190509392505050565b5f6060820190506113775f8301866110b9565b6113846020830185610fe2565b6113916040830184610fe2565b949350505050565b5f6113a382610f3e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036113d5576113d46111d0565b5b600182019050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f61141782610f3e565b915061142283610f3e565b925082820390508181111561143a576114396111d0565b5b92915050565b5f61144a82610f3e565b915061145583610f3e565b925082820190508082111561146d5761146c6111d0565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea2646970667358221220141ce69bd7f05fbcb35091de8b07df8f8443da60ef9956f2d618cfc5346330f064736f6c63430008160033'
//
//         const txObject = {
//             nonce: web3.utils.toHex(txCount),
//             gasLimit: web3.utils.toHex(50000),
//             gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//             data: data
//         };
//
//         const tx = new Tx(txObject);
//         tx.sign(Buffer.from(privateKey));
//
//         return web3.eth.sendSignedTransaction('0x' + tx.serialize().toString('hex'));
//     })
//     .then(receipt => {
//         console.log('Transaction Receipt:', receipt);
//     })
//     .catch(error => {
//         console.error('Transaction Error:', error);
//     });
//




