const {Api, JsonRpc, RpcError}=  require( 'eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
const fetch = require('node-fetch');                                    // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util');                   // node only; native TextEncoder/Decoder
// const { TextEncoder, TextDecoder } = require('text-encoding');  

// const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch })
const rpc = new JsonRpc('http://jungle2.cryptolions.io:8888', { fetch })

// const defaultPrivateKey = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";
const defaultPrivateKey = "5JW1kNTDvknom5qEhNjQFnWpZSfVPYVt7qsC3irXzv1q8ReoBo4";


const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);

const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

// async function transfer(){
// try {
//     const result = await api.transact({
//         actions: [{
//           account: 'rahulsharma2',
//           name: 'transfer',
//           authorization: [{
//             actor: 'rahulsharma2',
//             permission: 'active',
//           }],
//           data: {
//             from: 'rahulsharma2',
//             to: 'rahulsharma3',
//             quantity: '100.0000 RSN',
//             memo: '',
//           },
//         }]
//       }, {
//         blocksBehind: 3,
//         expireSeconds: 30,
//       });
//       console.dir(result);
// } catch (error) {
//     console.log('\nCaught exception: ' + error);
//   if (e instanceof RpcError)
//     console.log(JSON.stringify(error.json, null, 2));
// }
// }

// transfer()

 async function get(){
 //const result = await rpc.get_currency_balance( "rahulsharma2","rahulsharma3","RSN")
const result = await rpc.get_account("rahulsharma2")
//   //const result = await rpc.get_block("82441663")
// const result = await rpc.get_currency_stats("rahulsharma2","RSN")
//   // const result = await rpc.getRequiredKeys("eosio")
  console.log(result)
}
 get()
