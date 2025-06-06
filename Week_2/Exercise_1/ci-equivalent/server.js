const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000


app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index',{message: 'Hello from Express! '});
})

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:3000")
})