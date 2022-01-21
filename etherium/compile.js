const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // will delete the whole folder itself

const campaignPath = path.resolve(__dirname, 'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf-8');
//const output = solc.compile(source , 1).contracts;
var input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol' : {
            content: source
        }
    },
    settings: {
      outputSelection: {
          '*': {
              '*': [ '*' ]
          }
      }
  }
};

// parses solidity to English and strings 
var output = JSON.parse(solc.compile(JSON.stringify(input)));
output = output.contracts['Campaign.sol'];
console.log(output);
fs.ensureDirSync(buildPath); // will create a folder

for ( let contract in output){
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':','')+'.json'),
    output[contract]
  );
}