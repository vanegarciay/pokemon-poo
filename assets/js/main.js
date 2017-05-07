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
const Squirtle = new Pokemon("Squirtle", "Azul", 50);
const Bulbasaur = new Pokemon("Bulbasaur","Verde",55);
const Butterfly = new Pokemon("Butterfly", "Lila", 25);
const Mew = new Pokemon("Mew", "Blanco", 100);
const Jiglypuff = new Pokemon("Jiglypuff", "Rosa", 30);
const Staryu = new Pokemon("Staryu", "Cafe", 80);
const Oddish = new Pokemon("Oddish", "Uva", 40);
const Onix = new Pokemon("Onix", "Gris", 90);

Pikachu.atacar(Charmander);

console.log(Charmander.vida);