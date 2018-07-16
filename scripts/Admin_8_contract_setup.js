/**
Use this to create new tokens
*/
var Wrapped_Ether = artifacts.require("Wrapped_Ether");
var Factory = artifacts.require("Factory");
var UserContract= artifacts.require("UserContract");
var Deployer = artifacts.require("Deployer");
const TokenToTokenSwap = artifacts.require('./TokenToTokenSwap.sol');
const DRCT_Token = artifacts.require('./DRCT_Token.sol');

/**
*@dev Update the factory address and the start date (o_startdate) 
*as epoch date to create tokens
*Update hdate to reflect the epoch date as a human readable date and type
*both hdate and type are only used to output to the console
*/

//var o_startdate =1532044800;
//var hdate = "7/20/2018"; //human readable date

var o_startdate = 1532649600;
var hdate = "07/27/2018";

var type = "ETH/USD";
var factory_address= "0xdfb380afc0948e9551fd17b486681122b5936c2a";


//var type = "BTC/USD";
//var factory_address = "0x95c9c47558115b12f25dce5103e73e0803a5b9c7";

console.log(hdate, type, factory_address);
module.exports =async function(callback) {
      let factory = await Factory.at(factory_address)
      let base;
      let deployer;
      await factory.deployTokenContract(o_startdate);
      var long_token_add =await factory.long_tokens(o_startdate);
      var short_token_add =await factory.short_tokens(o_startdate);
      console.log('token date: ',hdate)
      console.log('Long Token at: ',long_token_add);
      console.log('Short Token at: ',short_token_add);
}