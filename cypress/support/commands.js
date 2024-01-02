// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('verificaLinks', (listaNomes) => {
    listaNomes.forEach((nome) => {
      cy.get('#menu-menu-principal')
        .contains(nome)
        .as('link')
        .should('have.attr', 'href')
        .then(() => {
          cy.get('@link').should('be.visible');
        });
    });
  });

Cypress.Commands.add('menu', (nome) => {
    cy.get('#menu-menu-principal')
        .contains(nome)
        .click()
})

Cypress.Commands.add('checaH1', (texto) => {
  cy.contains('.title-bar h1 ', texto)
        .and('be.visible')
})

Cypress.Commands.add('verificarRedesSociais', () => {
  const redesSociais = [
    { nome: 'Instagram', url: 'https://www.instagram.com/idwall_co/' },
    { nome: 'Youtube', url: 'https://www.youtube.com/channel/UCjIoKQ3osMdiewFg8gaQVzQ/videos' },
    { nome: 'Medium', url: 'https://medium.com/idwall' }
  ];

  redesSociais.forEach((redeSocial) => {
    cy.get(`.elementor-social-icon-${redeSocial.nome.toLowerCase()}`)
      .should('be.visible')
      .invoke('attr', 'href')
      .should('eq', redeSocial.url);
  });
});

















