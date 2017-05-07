function Pokemon(nombre,color, poderDeAtaque){
    this.nombre = nombre;
    this.color = color;

    this.nivelDeAmistad = 0;

    this.vida = 100;
    this.poderDeAtaque = poderDeAtaque;

    this.mostrarPokemon = function(){
        return ("Hola, soy: " + this.nombre + "y soy de color: " + this.color);
    }

    this.aumentarAmistad = function(valor){
        this.nivelDeAmistad = this.nivelDeAmistad + valor;
    }

    this.atacar = function(pokemon){
        pokemon.vida = pokemon.vida - this.poderDeAtaque;
    }
}

const Pikachu = new Pokemon("Pikachu", "Amarillo", 100);
const Charmander = new Pokemon("Charmander","Rojo",20);

Pikachu.atacar(Charmander);

console.log(Charmander.vida);