const { it, expect } = require("@jest/globals")
const aplicarCifraCesar = require("../cifra-cesar")

describe("Funcao de criptografia", () => {
    it("aplica a chave correta para criptografar", () => {
        resultado = aplicarCifraCesar("aaaa", 2, "C")
        esperado = "cccc"
        expect(resultado).toEqual(esperado)
    })
    it("aplica a chave correta para descriptografar", () => {
        resultado = aplicarCifraCesar("cccc", 2, "D")
        esperado = "aaaa"
        expect(resultado).toEqual(esperado)
    })
    it("retorna nada quando passamos nada", () => {
        expect(aplicarCifraCesar("", 52, "C")).toEqual("")
        expect(aplicarCifraCesar("", 52, "D")).toEqual("")
    })
    it("consegue criptografar numeros", () => {
        expect(aplicarCifraCesar("1234", 2, "C")).toEqual("3456")
    })
    it("retorna erro para chave inválida", () => {
        expect(aplicarCifraCesar("aaa", 0, "C")).toEqual("ERRO")
        expect(aplicarCifraCesar("aaa", 200, "C")).toEqual("ERRO")
        expect(aplicarCifraCesar("aaa", 0, "D")).toEqual("ERRO")
        expect(aplicarCifraCesar("aaa", 200, "D")).toEqual("ERRO")
    })
    it("retorna erro se a chave nao for numerica", () => {
        expect(aplicarCifraCesar("aaa", "X", "C")).toEqual("ERRO")
        expect(aplicarCifraCesar("aaa", "X", "D")).toEqual("ERRO")
    })
})
