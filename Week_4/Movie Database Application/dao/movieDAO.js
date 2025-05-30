const db = require('../db/db')

class movieDAO {
    async addMovies(title,director,genre,imdb_rating,release_year){
        return new Promise((resolve,reject) => {
            db.run(`insert into films (title, director, genre, imdb_rating, release_year) values (?,?,?,?,?)`,[title,director,genre,imdb_rating,release_year], function(err){
                if(err){
                    reject(err)
                } else {
                    resolve(this.lastID)
                }
            })
        })
    }

    async AllMovies(){
        return new Promise((resolve,reject) => {
            db.all(`select * from films `,[], (err,rows) => {
                if(err){
                    reject(err)
                } else {
                    resolve(rows)
                }

            })
        })
    }

    async AllMoviesByGenre(genre){
        return new Promise((resolve,reject) => {
            db.all(`select * from films where genre = ? `,[genre], (err,rows) => {
                if(err){
                    reject(err)
                } else {
                    resolve(rows)
                }

            })
        })
    }

    async searchByTitle(substr) {
        return new Promise((res, rej) => {
            db.all(
            `SELECT * FROM films WHERE title LIKE '%' || ? || '%'`,
            [substr],
            (err, rows) => err ? rej(err) : res(rows)
            );
        });
    }

}

module.exports = new movieDAO();