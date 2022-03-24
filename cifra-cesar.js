const funcao_criptografar = () => {
    htmlsaida.innerHTML = criptografar(htmltexto.value, Number(htmlchave.value))
}

const funcao_descriptografar = () => {
    htmlsaida.innerHTML = descriptografar(htmltexto.value, Number(htmlchave.value))
}


const criptografar = (texto, chave) => {
    saida = ""
    if (chave < 1 || chave > 94){
        return "ERRO"
    }
    for (let letra of texto){
        codigo = letra.charCodeAt()
        novoCodigo = codigo + chave
        if (novoCodigo > 126){
            novoCodigo = novoCodigo - 95
        }
        novaLetra = String.fromCharCode(novoCodigo)
        saida = saida + novaLetra
    }
    // Aqui, a saída já está pronta
    return saida
}

const descriptografar = (texto, chave) => {
    saida = ""
    if (chave < 1 || chave > 94){
        return "ERRO"
    }
    for (let letra of texto){
        codigo = letra.charCodeAt()
        novoCodigo = codigo - chave
        if (novoCodigo < 32){
            novoCodigo = novoCodigo + 95
        }
        novaLetra = String.fromCharCode(novoCodigo)
        saida = saida + novaLetra
    }
    // Aqui, a saída já está pronta
    return saida
}
