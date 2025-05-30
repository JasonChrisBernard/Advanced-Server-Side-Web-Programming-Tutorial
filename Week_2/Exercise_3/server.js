const express = require('express')
const path = require('path')
const app = express()

// 1️⃣ Tell Express where your views live:
app.set('views', path.join(__dirname, 'views'));

// 2️⃣ Tell Express which engine to use for files with no extension:
app.set('view engine', 'ejs');



app.get('/student',(req,res) => {
res.render('student',{
    fullname: 'Jason Bernard',
    major: 'Science',
    grades: [ 78, 83, 91 ]
})
})

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000")
})