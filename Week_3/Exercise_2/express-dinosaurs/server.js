const express = require('express')
const app = express()
const PORT = 3000
const periods = require('./periods')
const path = require('path')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')


app.get('/periods',(req,res) => {
    res.render('periods',{periods: Object.keys(periods)})
})

app.get('/periods/:periodName',(req,res) => {
    const name = req.params.periodName;
    const dinos = periods[name]

    if (!dinos) {
        // 404 if period not found
        return res.status(404).send(`No data for period "${name}"`);
    }

    // pass both the period name and its dinosaurs
    res.render('period_info', { period: name, dinosaurs: dinos });
    })

app.listen(PORT,() => {
    console.log(`Visit http://localhost:${PORT}/periods`)
})