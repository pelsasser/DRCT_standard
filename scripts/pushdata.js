var Oracle = artifacts.require("Oracle");



module.exports =async function(callback) {
	let oracle = await Oracle.deployed();
 	await oracle.PushData();
}
