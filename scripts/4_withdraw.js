module.exports = async function main(callback) {
  try {
    const Enzo = artifacts.require("Enzo");
    const contract = await Enzo.deployed();
    await contract.withdraw();
    console.log(`[+] Withdrew funds!`);
    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
}
