describe('Teste de integracao', () => {
    it('encripta corretamente o caracter <', () => {
        cy.visit("./index.html")
        cy.get("#htmltexto").type("funciona")
        cy.get("#htmlchave").type("56")
        cy.get("button").contains("CRIPTOGRAFAR").click()
        cy.get("#htmlsaida").should("have.text", "?NG<BHG:")
    })
})
