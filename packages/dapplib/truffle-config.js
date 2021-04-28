require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture street crawl toss common hockey civil army genius'; 
let testAccounts = [
"0x1996c3c739f89e0356dd232555a9ae55f0129cf6a4e437ca3ba0887364422608",
"0xce086a15d8398d00b39522e2caead0b58424c150a037429e8ce90fd692c0099c",
"0x1604679fa4efc7def20c379a87c6b1fb923fc878657cee6694e574f09f867eb8",
"0x29aa865c7e7f611d951faac3ab4cb088eb4246eb523d8838b7aac849f3e8c0da",
"0x9157bf4cc14ff462826e36105e7494f2d5f6300b9533989773552fbe019d2d50",
"0x8d228a0441ed408c26026df576e548b288a4165dd38e4dc050acda9c1bab53ad",
"0x024edc22bbe28a089d1f88c933bc0384eb11d264ea664fb537f52e20190c088d",
"0x6ac0d9b18f7c0bc675db072dc54896f72fbb55c200123c7582a1bdba409bbf50",
"0xd8a030097496b312e75052c51e5778430e4499d410e9cb84dce75ffd78b51ffc",
"0x5baedabb29694053f18d5449c843680c1c5189f6ac544de84dc914728aa287a2"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
