
class Filme {

    constructor(title, release, gender, duration, watched, rating) {
        this.title = title;
        this.release = release;
        this.gender = gender;
        this.duration = duration;
        this.watched = false;
        this.rating = 0;
    }

    showAttributes() {
        console.log(`Titulo: ${this.title}, \nLançamento: ${this.release}, \nGênero: ${this.gender}, \nDuração: ${this.duration}, \n${this.watched ? "Foi assitido" : "Não foi assistido"}, \nNota : ${this.rating} `)
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

const filme = new Filme("Interestelar", 2014, "Ficção Científica", "2h 49m")

filme.showAttributes()
filme.alreadyWatched()
filme.ratingFilm(6.7)
