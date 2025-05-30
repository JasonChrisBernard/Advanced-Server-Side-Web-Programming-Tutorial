const express = require('express')
const app = express()
const path = require('path');
const { calculateAge } = require('./ageModel');
const PORT = 3000



app.use(express.urlencoded({ extended: true }));

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')



app.get('/age',(req,res)=> {
    res.render('age-form')
})

app.post('/age',(req,res) => {
    const dobString = req.body.dateOfBirth;
    const age = calculateAge(dobString)
    res.render('age-result',{dob: dobString, age})
})



app.listen(PORT, () => {
    console.log('Server is running at http://localhost:3000/age')
})