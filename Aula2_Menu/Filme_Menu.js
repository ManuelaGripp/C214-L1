let readlineSync = require('readline-sync');

class Movie {

    constructor(title, release, gender, duration) {
        this.title = title;
        this.release = release;
        this.gender = gender;
        this.duration = duration;
        this.watched = false;
        this.rating = 0;
    }

    showAttributes() {
        console.log(`Titulo: ${this.title}, \nLançamento: ${this.release}, \nGênero: ${this.gender}, \nDuração: ${this.duration}, \n${this.watched ? "Foi assitido" : "Não foi assistido"}, \nNota : ${this.rating} `)
        console.log("\n")
    }

    alreadyWatched() {
        console.log('\n')
        console.log("Assistindo o filme...")
        this.watched = true
        this.showAttributes()

    }

    ratingFilm(nota) {
        console.log('\n')
        console.log("Dando a nota...")
        this.rating = nota
        this.showAttributes()
    }


}

let moviesList = []

    readlineSync.promptCLLoop({
        a: (info) => {

            const movieInfos = info.split(', ')
            const newMovie = new Movie(movieInfos[0], movieInfos[1], movieInfos[2], movieInfos[3])
            newMovie.showAttributes()
            moviesList.push(newMovie)

            console.log('a - Adicionar novo filme')
            console.log('b - Marcar filme como assistido')
            console.log('c - Avaliar um filme')
            console.log('d - Exibir a lista de filme')
            console.log('e - Sair')

        },
        b: (title) => {

            moviesList.find((movie) => {
                if (movie.title === title) {
                    movie.alreadyWatched()
                } else {
                    console.log('Filme não cadastrado ou título não está correto')
                }
            })

            console.log('a - Adicionar novo filme')
            console.log('b - Marcar filme como assistido')
            console.log('c - Avaliar um filme')
            console.log('d - Exibir a lista de filme')
            console.log('e - Sair')

        },
        c: (title,nota) => {

            moviesList.find((movie) => {
                if (movie.title === title) {
                    movie.ratingFilm(nota)
                } else {
                    console.log('Filme não cadastrado ou título não está correto')
                }
            })

            console.log('a - Adicionar novo filme')
            console.log('b - Marcar filme como assistido')
            console.log('c - Avaliar um filme')
            console.log('d - Exibir a lista de filme')
            console.log('e - Sair')

        },
        d: () => {

            moviesList.forEach((movie) => {
                movie.showAttributes()
            })

            console.log('a - Adicionar novo filme')
            console.log('b - Marcar filme como assistido')
            console.log('c - Avaliar um filme')
            console.log('d - Exibir a lista de filme')
            console.log('e - Sair')

        },
        e: () => {return true }
    })




