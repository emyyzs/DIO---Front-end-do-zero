let possuiOvos = false 
let possuiLeite =true
let itensComprados = ""

if (possuiOvos) {
    itensComprados="Leite"
} else if (possuiLeite){
    itensComprados = "Chocolate"
}
else {
    console.log("passou na sessão de congelados")
    itensComprados = "Lasanha Congelada"

}

console.log("item comprados:" + itensComprados)

/*
let possuiOvos = false;
let itensComprados = "";

if (possuiOvos) {
    itensComprados = "Leite";
} else {
    console.log("Passou na sessão de congelados");
    itensComprados = "Lasanha Congelada";
}

console.log("Item comprado:", itensComprados);
*/