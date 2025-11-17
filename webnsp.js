const express = require('express');
const app = express();
app.get('/', (req,res) => res.send('Testing Web BNSP'));
console.log("Update CI/CD Test")
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('Listening on', port));