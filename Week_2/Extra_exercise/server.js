const express = require('express')
const path = require('path')
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/favorite-book',(req,res) => {
    res.render('book-form')
})

app.post('/favorite-book',(req,res) => {
    const title = req.body.bookTitle;
    res.render('book-result', {title});
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})