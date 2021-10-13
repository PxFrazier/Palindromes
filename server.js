const fs = require('fs');
const readLine = require('readline');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const list = [];

const rd = readLine.createInterface({
    input: fs.createReadStream('words.txt'),
    output: process.stdout,
    console: false
});

//Processes each line as they are read.
rd.on('line', (line)=>{
    let original = String(line);
    line = line.split('');
    line = line.reverse().join('');
    if(original == line) list.push(line);
});

app.set("view engine", "ejs");

app.get('/', (req, res)=>{
    res.render('index', {text: list});
});

app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`);
});
