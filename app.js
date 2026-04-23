const os = require('os');
const fs = require('fs');
const { log } = require('console');


const first = fs.readFileSync('./content/first.txt', 'utf-8');
const second = fs.readFileSync('./content/second.txt','utf-8');

fs.readFile('./content/first.txt','utf-8', (err, data)=>{
    if(err) console.error(err);
    else console.log("Read");

    const third = data;

    const fourth = fs.readFile('./content/second.txt', 'utf-8', (err, data)=>{
        if(err) console.error(err);
        else console.log("Read second");

        console.log("aaaa", third, data);
    })  

    
    
})

console.log(first, second);
//console.log(third);

// setInterval(()=>{
//     const currOs = {
//         name : os.type(),
//         release : os.release(), 
//         totalMem : (((os.totalmem())/1024)/1024)/1024,
//         freeMem : (((os.freemem())/1024)/1024)/1024
//     }
//     console.log(currOs)
// }, 1000)

