//const utils = require('./util');//путь к нашему файлу
// const{ myFunc, data}=require('./util');
// myFunc('Renat');
// console.log(data.lastName);


// const{persone}  = require('./data');
// persone.func();
// console.log(persone.name);


// let object={
//     name: "Petya",
//     age: 15,
//     films: ["Borat", "Bruno"]
// }
// console.log(JSON.stringify(object));//наш обьект вывел строкой
// const objjson = JSON.stringify(object);
// console.log(JSON.parse(objjson));//преобразовал нашу строку в объект



// const nameJSON=JSON.parse(objjson);
// console.log(nameJSON.name) //выводим имя



// const http = require('http');
const inner = require('./api.txt');
const a=JSON.parse(inner); 
console.log(a);
//console.log(a);
// const server = http.createServer((req, res) => {    
//     if(req.url==='/'){        
//         console.log(a);        
//     }
// });
// const PORT=process.env.PORT || 3000;
// server.listen(PORT,()=>{
//     console.log('listening on port 3000');
// })


