# truffle-react-quickstart

0.1- open ganache and start new instance <br>
0.2- truffle migrate <br>
0.3- import a wallet and start the dDpp  <br>

1- install the dependencies <br>
```sh
cd client
npm i
``` 
<br>
2- add your methods in the smart contract<br>
3- add your components<br>
4- import "instance" and "address" using "useSelector"<br>
5- execute your methods <br>

>>>>instance.methods.method_name(args).call({from:address}).then(res=>{})

<br>
to execute a view, or<br>

>>>>instance.methods.method_name(args).send({from:address}).then(res=>{})


