const fs = require('fs');
const readLine = require('readline');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const list = [];
app.set("view engine", "ejs");

const rd = readLine.createInterface({
    input: fs.createReadStream('words.txt'),
    console: false
});

//Processes each line as they are read.
rd.on('line', (line)=>{
    let original = String(line);
    line = line.split('');
    line = line.reverse().join('');
    if(original == line) list.push(line);
});

app.get('/', (req, res)=>{
    res.render('index', {text: list});
});

app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`);
});
