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

const Ash = new Entrenador("Ash", [Pikachu,Charmander,Squirtle,Bulbasaur,Butterfly,Mew,Jiglypuff,Staryu,Oddish,Onix], "pokemon1");
Ash.listarPokemones();

const Brock = new Entrenador("Brock", [Pikachu,Charmander,Squirtle,Bulbasaur,Butterfly,Mew,Jiglypuff,Staryu,Oddish,Onix], "pokemon2");
Brock.listarPokemones();


function ordenarAtaque(Entrenador) {
    var nombrePokemonElegido1 = document.getElementById("pokemon1").value;
    var nombrePokemonElegido2 = document.getElementById("pokemon2").value;
    var narracion = document.getElementById("narracion");

    pokemonElegido1 = Ash.pokemones.filter(function(pokemon){
        return pokemon.nombre == nombrePokemonElegido1;
    })[0];
    pokemonElegido2 = Brock.pokemones.filter(function(pokemon){
        return pokemon.nombre == nombrePokemonElegido2;
    })[0];
    console.log(pokemonElegido1);
    if(pokemonElegido1 == undefined || pokemonElegido2 == undefined){
        narracion.innerHTML = "Ambos entrenadores deben elegir un pokemon.";
    } else if(pokemonElegido1 === pokemonElegido2){
        narracion.innerHTML = "¡No pueden elegir el mismo pokemon!. Elijan dos pokemones diferentes.";
    } else{
        if(Entrenador == "Ash"){
            if(pokemonElegido1.vida <= 0){
                narracion.innerHTML = "Tu pokemon " + pokemonElegido1.nombre + " no tiene energía para pelear. Debes elegir otro pokemon.";
            } else if(pokemonElegido2.vida <= 0){
                narracion.innerHTML = pokemonElegido2.nombre + " no se puede atacar, ya está muy débil. Debes pelear contra otro pokemon.";
            }else{
                pokemonElegido1.atacar(pokemonElegido2);
                narracion.innerHTML = pokemonElegido1.nombre + " atacó a " + pokemonElegido2.nombre + " y " + pokemonElegido2.nombre + " tiene una vida de " + pokemonElegido2.vida;
            }  
        } else if(Entrenador == "Brock"){
            if(pokemonElegido2.vida <= 0){
                narracion.innerHTML = "Tu pokemon " + pokemonElegido2.nombre + " no tiene energía para pelear. Debes elegir otro pokemon.";
            } else if(pokemonElegido1.vida <= 0){
                narracion.innerHTML = pokemonElegido1.nombre + " no se puede atacar, ya está muy débil. Debes pelear contra otro pokemon.";
            }else{
                pokemonElegido2.atacar(pokemonElegido1);
                narracion.innerHTML = pokemonElegido2.nombre + " atacó a " + pokemonElegido1.nombre + " y " + pokemonElegido1.nombre + " tiene una vida de " + pokemonElegido1.vida;
            }  
        }

    } 
}

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

function Entrenador(nombre, pokemones, id) {
    this.nombre = nombre;
    this.pokemones = pokemones;
    this.id = id;

    this.listarPokemones = function(){
        var selectPokemon = document.getElementById(this.id);

        for(i=0; i<this.pokemones.length; i++){
            var option = document.createElement("option");
            option.text = this.pokemones[i].nombre;
            option.value = this.pokemones[i].nombre;
            selectPokemon.add(option);
        }
    }
}