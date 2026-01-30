const fs = require('fs');
const a=fs.readFileSync("log.txt",'utf-8');
const wordcount=a.split(" ").length;
console.log(wordcount);
function wordcounter(){
    fs.writeFileSync("wordcount.txt",`wordcounter: ${wordcount}`);
}

module.export={ 
    wordcounter
}






