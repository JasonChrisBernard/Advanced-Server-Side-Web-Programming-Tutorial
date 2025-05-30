const sqlite = require('sqlite3')
const db = new sqlite.Database('moviedb',(err) => {
    if(err){
        console.error("Db connection unsucessful")
    } else {
        console.log("Db connection Sucessful")
    }
})


db.serialize(() => {
    db.run(`create table if not exists films (
        id int auto increment primary key,
        title varchar(255) not null,
        director varchar(255),
        genre varchar(255),
        imdb_rating decimal(3,1),
        release_year year)`)
})

module.exports = db