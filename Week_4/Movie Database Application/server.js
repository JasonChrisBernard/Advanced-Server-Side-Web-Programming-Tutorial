const express = require('express')
const app = express()
const path = require('path');
const PORT = 3000
const movieRouter = require('./routers/movieRouter')
require('./db/db')


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(movieRouter)


app.get('/', (req, res) => {
  res.render('movies/index');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ error: err.message || 'Something went wrong' });
});


app.listen(PORT,() => {
    console.log('Server is running at http://localhost:3000')
})