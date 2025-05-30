const movieDAO = require('../dao/movieDAO')

class movieService{
    async addMovies({title,director,genre,imdb_rating,release_year}){
        const movieService = await movieDAO.addMovies(title,director,genre,imdb_rating,release_year)
        return movieService   
    }

    async AllMovies(){
        return await movieDAO.AllMovies()
       
    }

    async AllMoviesByGenre(genre){
        return await movieDAO.AllMoviesByGenre(genre)
    }

    async searchByTitle(substr) {
        return movieDAO.searchByTitle(substr);
    }

}

module.exports = new movieService();