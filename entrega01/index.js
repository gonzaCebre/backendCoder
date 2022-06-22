

class Usuario {
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName (){
        return console.log(`${this.nombre} ${this.apellido}`);
    }

    addMascota(newPet){
        this.mascotas.push(newPet)
        return console.log('Pet added');
    }

    countMascotas() {
        return console.log(this.mascotas.length);
    }

    addBook(nombre, autor) {
        const newBook = {
            nombre,
            autor
        }

        this.libros.push(newBook);

        return console.log('Book added');
    }

    getBookNames() {
        const bookNames = this.libros.map(libro => libro.nombre)
        return console.log(bookNames);
    }


}

const newUser = new Usuario('Gonzalo', 'Cebrero');

newUser.getFullName();
newUser.addMascota('Lila');
newUser.addMascota('Nina');
newUser.countMascotas();
newUser.addBook('La magia de la matematica', 'Adrian Paenza');
newUser.addBook('Dr. Sueño', 'Stephen King');
newUser.getBookNames();