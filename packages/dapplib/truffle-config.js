require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remind modify inner drum front tenant'; 
let testAccounts = [
"0xd4d69ba60663da2ce8b3602e34fdfa10776e51834a9f5543faf00c1be786b628",
"0x8f7268d625c3d4f50c7a110506eb4606f67aaf7b8a23c37a0f3b51bd3cc3ec03",
"0x435390368d5687dbe983e13ef08589cf77018fef1f507181e0450b6bbaeedaae",
"0xec7515dd4426d5bfbf6e3b55eec649f1415e9212141b9762a3a943922705fc67",
"0x7ea8150320f31dcc5595ba5042c7cabdad557f3c4229a20236621ea0770ce133",
"0x61e2e8362f7127505bcf4cb146f0ca05089c4268d1201fe73dc32d0a5137fd29",
"0xcc0e635ef4654eff20acd21ac5d180dd8a0b9b1029612f15850285a3f3fd3eb8",
"0x9b05c451f52804975215714a254a128318120cecde22689f3b9132ffaeb3bd32",
"0x56ff35fc3a7f3653205cc99e57219f70986de45ba05043de3a2f6ed3eaee82d2",
"0x700f74fd719e234f44d09535b57070074a77a8753a8ef233044fa83ac8a8eb11"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
