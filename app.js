const {readFileSync, writeFileSync} = require('fs');

//for(let i=1;i<=1e4;i++) writeFileSync('./content/big.txt', `Hii, Viru ${i}\n`, {flag:'a'});


try{
    const res = readFileSync('./content/big.txt', 'utf8');

console.log(res);
}catch(err){
    console.log(err);
}   