const funcao_criptografar = () => {
    htmlsaida.innerHTML = cifrar(htmltexto.value, Number(htmlchave.value), "C")
}

const funcao_descriptografar = () => {
    htmlsaida.innerHTML = cifrar(htmltexto.value, Number(htmlchave.value), "D")
}

const aplicarCifraCesar = (texto, chave, operacao) => {
    saida = ""
    if (chave < 1 || chave > 94){
        return "ERRO"
    }
    for (let letra of texto){
        codigo = letra.charCodeAt()
        if (operacao == "C"){
            novoCodigo = codigo + chave
            if (novoCodigo > 126){
                novoCodigo = novoCodigo - 95
            }
        }
        else if (operacao == "D"){
            novoCodigo = codigo - chave
            if (novoCodigo < 32){
                novoCodigo = novoCodigo + 95
            }
        }
        else {
            return "ERRO"
        }
        novaLetra = String.fromCharCode(novoCodigo)
        saida = saida + novaLetra
    }
        return saida
}
