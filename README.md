# truffle-react-quickstart

1- install the dependencies <br>
```sh
cd client
npm i
``` 
<br>
2- add your methods in the smart contract<br>
3- add your components<br>
4- import "instance" and "address" using "useSelector"
5- execute your methods <br>

>>>>instance.methods.method_name(args).call({from:address}).then(res=>{})

<br>
to execute a view, or<br>

>>>>instance.methods.method_name(args).send({from:address}).then(res=>{})


