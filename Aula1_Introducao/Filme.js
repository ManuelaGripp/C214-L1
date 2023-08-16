
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

const filme1 = new Filme("Hoje eu quero voltar sozinho", 2014, "Romance/Drama", "1h 36m")
const filme2 = new Filme("M8 - Quando a morte socorre a vida", 2019, "Drama", "1h 24min")
const filme3 = new Filme("Que horas ela volta", 2015, "Drama", "1h 52m")

filme1.showAttributes()
filme2.showAttributes()
filme3.showAttributes()

filme1.alreadyWatched()
filme1.ratingFilm(8.8)
filme2.alreadyWatched()
filme2.ratingFilm(7.5)
filme3.alreadyWatched()
filme3.ratingFilm(9.7)

