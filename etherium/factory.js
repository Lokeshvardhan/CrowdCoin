import web3 from "./web3";
import CampaignFactory  from './build/CampaignFactory.json';

const instance  = new web3.eth.Contract(CampaignFactory.abi,'0x30652B67825e1B11e3EdaE2c369a39D97BC7dc45');

export default instance;