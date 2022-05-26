export function dobro(n) {
    return n * 2;
}

export function somar(n1, n2) {
    return n1 + n2;
}

export function temperatura(temp) {
    let x = false;
    if(temp > 37){
        x = true;
        return x;
    }

    else{
        return x;
    }
        
}

export function media(n1, n2, n3) {
    return(n1 + n2 + n3) / 3;
}

export function tabuada(num) {
    var tabuada= new Array(11);
    tabuada[0] = num * 0;
    tabuada[1] = num * 1;
    tabuada[2] = num * 2;
    tabuada[3] = num * 3;
    tabuada[4] = num * 4;
    tabuada[5] = num * 5;
    tabuada[6] = num * 6;
    tabuada[7] = num * 7;
    tabuada[8] = num * 8;
    tabuada[9] = num * 9;
    tabuada[10] = num * 10;
    return tabuada;
  }

export function primaria(cor) {
    cor.toLowerCase();
    return cor == 'azul' || cor == 'amarelo' || cor == 'vermelho'
}

export function ingresso(qtdmeia, qtdint, dia, nacionalidade) {
    if (nacionalidade.toUpperCase() = "BRASILEIRA") {
        return (qtdint  + qtdmeia) * 5;
    }
    else if (dia.toUpperCase() = "QUARTA") {
        return (qtdint  + qtdmeia) * 14.25;
    }
    else{
        return (qtdint * 28.5)+ (qtdmeia * 14.25);
    }
}

export function freqcarac(texto, caractere) {
    let qtd = 0;
    for (let letra of texto) {
        if (letra == caractere){
            qtd++;
        }
        
    }
    return qtd;
}

export function maiorNumero(numeros) {
    let maior = Number.MIN_VALUE;
    for (let item of numeros) {
        if(item > maior)
            maior = item;
    }
    return maior;
} 