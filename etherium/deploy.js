const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
//const {abi, bytecode} = require('./compile');
//console.log(Object.keys(compiledFactory));
const provider =  new HDWalletProvider(
    'host suit visa shield inject mandate nerve tattoo scrap federal again across',
    'https://rinkeby.infura.io/v3/08860b5457b84511942f4e1ec8da6c3c'
);
const web3 = new Web3(provider);

//console.log( compiledFactory.evm.bytecode);
const deploy = async () => {
  try{
    //console.log(web3.eth.getAccounts());
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
  
    console.log('Attempting to deploy from account', accounts[0]);
  
    const result = await new web3.eth.Contract(compiledFactory.abi)
      .deploy({ data: compiledFactory.evm.bytecode.object })
      .send({ gas: '2000000', from: accounts[0] });
  
    console.log('Contract deployed to', result.options.address);
  }catch(err){
    console.log(err);
  }
  };
  deploy();