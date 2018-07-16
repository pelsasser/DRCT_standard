/****Uncomment the body below to run this with Truffle migrate for truffle testing*/

var Factory = artifacts.require("./Factory.sol");
var DRCTLibrary = artifacts.require("./libraries/DRCTLibrary.sol");

/****Uncomment the body to run this with Truffle migrate for truffle testing*/

/**
*@dev Use this for setting up contracts for testing 
*this will link the Factory and DRCT Library

*These commands that need to be ran:
*truffle migrate --network rinkeby
*truffle exec scripts/Migrate_1.js --network rinkeby
*truffle exec scripts/Migrate_2.js --network rinkeby
*/

/****Uncomment the body below to run this with Truffle migrate for truffle testing*/


module.exports = function(deployer) {
	deployer.deploy(DRCTLibrary);
	deployer.link(DRCTLibrary,Factory);
	deployer.deploy(Factory);
}

/****Uncomment the body to run this with Truffle migrate for truffle testing*/