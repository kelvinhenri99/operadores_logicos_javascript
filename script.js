function compras(trabalho1, trabalho2) {
    const comprarCarro = trabalho1 || trabalho2;
    const comprarSom = trabalho1 && trabalho2;
    const comprarRoda = trabalho1 != trabalho2;
    const fizNada = !comprarCarro
        return { comprarCarro, comprarSom, comprarRoda, fizNada}
}

console.log(compras(true, true));
console.log("________________________________");
console.log(compras(true, false));
console.log("________________________________");
console.log(compras(false, true));
console.log("________________________________");
console.log(compras(false, false));