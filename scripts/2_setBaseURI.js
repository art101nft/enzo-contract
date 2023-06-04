const newURI = 'ipfs://QmP9XRepUVQSTWdv1Tkd5nbpGEzvaF6ihAWUp2PuaCio1D/';

module.exports = async function main(callback) {
  try {
    const Enzo = artifacts.require("Enzo");
    const nfs = await Enzo.deployed();
    if (newURI == '') {
      console.log('You need to specify a metadata URI where assets can be loaded. ie: "ipfs://xxxxxx/"');
      callback(1);
    } else {
      await nfs.setBaseURI(newURI);
      console.log(`Set new contract base metadata URI as: ${newURI}`);
      callback(0);
    }
  } catch (error) {
    console.error(error);
    callback(1);
  }
}
