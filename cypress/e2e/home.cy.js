/// <reference types="cypress" />

import { emailGerado } from '../support/helper'
import { emailInvalidoGerado } from '../support/helper';

const listaNomesPrincipal = ['Compliance', 'KYC', 'Mercado Financeiro', 'Varejo', 'Transporte', 'Identidade', 'Onboarding', 'Privacidade', 'Outros'];
const listaNomesOutros = ['Background Check', 'Onboarding', 'Anti-fraude', 'Inovação', 'Notícias', 'Institucional', 'Podcast'];

describe('Navegação na página principal', () => {
  beforeEach(() => {
    cy.step('Dado que o usuário acessa a página inicial do blog')
    cy.visit('/')
    cy.get('.penci-mainlogo').should('be.visible')

  });

  context('Navegar e verificar links', () => {
    it('Verificar links no header da página inicial', () => {
      cy.step('Quando visualiza o header da página')
      cy.get('#menu-menu-principal')
        .should('be.visible')

      cy.step('Então deve ver os itens no header como links')
      cy.get('#menu-menu-principal')
        .should('contain', 'Compliance KYC Mercado Financeiro Varejo Transporte Identidade Onboarding Privacidade Outros')
        .and('be.visible')
      cy.verificaLinks(listaNomesPrincipal)

    })

    it('Navegar para a página Compliance', () => {
      cy.step('Quando clica em Compliance no header')
      cy.menu('Compliance')
      cy.step('Então deve ser redirecionado para a página Compliance')
      cy.url().should('include', '/category/outros/compliance/')
      cy.title().should('eq', 'Arquivos Compliance : Blog idwall')
      cy.contains('.title-bar h1 ', 'Compliance')
        .and('be.visible')
    });

    it('Navegar para a página KYC', () => {
      cy.step('Quando clica em KYC no header')
      cy.menu('KYC')
      cy.step('Então deve ser redirecionado para a página KYC')
      cy.url().should('include', '/category/outros/kyc/')
      cy.title().should('eq', 'Arquivos KYC : Blog idwall')
      cy.contains('.title-bar h1 ', 'KYC')
        .and('be.visible')
    });

    it('Navegar para a página Mercado Financeiro', () => {
      cy.step('Quando clica em Mercado Financeiro no header')
      cy.menu('Mercado Financeiro')
      cy.step('Então deve ser redirecionado para a página Mercado Financeiro')
      cy.url().should('include', '/category/outros/mercado-financeiro/')
      cy.title().should('eq', 'Arquivos Mercado Financeiro : Blog idwall')
      cy.contains('.title-bar h1', 'Mercado Financeiro')
        .and('be.visible')
    });

    it('Navegar para a página Varejo', () => {
      cy.step('Quando clica em Varejo no header')
      cy.menu('Varejo')
      cy.step('Então deve ser redirecionado para a página Varejo')
      cy.url().should('include', '/category/outros/varejo/')
      cy.title().should('eq', 'Arquivos Varejo : Blog idwall')
      cy.contains('.title-bar h1', 'Varejo')
        .and('be.visible')
    });

    it('Navegar para a página Transporte', () => {
      cy.step('Quando clica em Transporte no header')
      cy.menu('Transporte')
      cy.step('Então deve ser redirecionado para a página Transporte')
      cy.url().should('include', '/category/outros/transporte-outros/')
      cy.title().should('eq', 'Arquivos Transporte : Blog idwall')
      cy.contains('.title-bar h1', 'Transporte')
        .and('be.visible')
    });

    it('Navegar para a página Identidade', () => {
      cy.step('Quando clica em Identidade no header')
      cy.menu('Identidade')
      cy.step('Então deve ser redirecionado para a página Identidade')
      cy.url().should('include', '/category/outros/identidade/')
      cy.title().should('eq', 'Arquivos Identidade : Blog idwall')
      cy.contains('.title-bar h1', 'Identidade')
        .and('be.visible')
    });

    it('Navegar para a página Onboarding', () => {
      cy.step('Quando clica em Onboarding no header')
      cy.menu('Onboarding')
      cy.step('Então deve ser redirecionado para a página Onboarding')
      cy.url().should('include', '/category/outros/onboarding/')
      cy.title().should('eq', 'Arquivos Onboarding : Blog idwall')
      cy.contains('.title-bar h1', 'Onboarding')
        .and('be.visible')
    });

    it('Navegar para a página Privacidade', () => {
      cy.step('Quando clica em Privacidade no header')
      cy.menu('Privacidade')
      cy.step('Então deve ser redirecionado para a página Privacidade')
      cy.url().should('include', '/category/outros/privacidade-e-seguranca/')
      cy.title().should('eq', 'Arquivos Privacidade e Segurança')
      cy.contains('.title-bar h1', 'Privacidade')
        .and('be.visible')
    });

    it('Navegar para a página Outros', () => {
      cy.step('Quando clica em Outros no header')
      cy.menu('Outros')
      cy.step('Então deve ser redirecionado para a página Outros')
      cy.url().should('include', '/category/outros/')
      cy.title().should('eq', 'Arquivos Outros : Blog idwall')
      cy.contains('.title-bar h1', 'Outros')
        .and('be.visible')
    });

    it('Verificar links no submenu "Outros"', () => {
      cy.step('Quando posiciona o mouse sobre o link "Outros" no header')
      cy.get('#menu-item-13306').realHover()
      cy.step('Então deve ver os itens no submenu "Outros" como links')
      cy.verificaLinks(listaNomesOutros)

    });

    it('CT12 - Navegar para um página e voltar', () => {
      cy.step('Quando clica em um link de navegação para outra página')
      cy.menu('Compliance')
      cy.step('E verifica que a nova página está carregada corretamente')
      cy.url().should('include', '/category/outros/compliance/')
      cy.title().should('eq', 'Arquivos Compliance : Blog idwall')
      cy.contains('.title-bar h1 ', 'Compliance')
        .and('be.visible')
      cy.step('E clica no botão de voltar do navegador')
      cy.go('back')
      cy.step('Então deve retornar à página inicial do blog')
      cy.url().should('eq', Cypress.config('baseUrl'))

    });

  })
  context('Newsletter', () => {
    it('Assinar Newsletter com E-mail válido', () => {
      cy.step('Quando digita um e-mail válido no campo de newsletter')
      cy.iframe('.mailmunch-embedded-iframe')
        .as('iframe'); 
      cy.get('@iframe')
        .find('input[name="email"]')
        .type(emailGerado);
      cy.step('E clica no botão de assinatura')
      cy.get('@iframe') 
        .contains('Quero assinar!')
        .click();
      cy.step('Então o sistema deve exibir uma mensagem de confirmação')
      cy.get('@iframe')
        .contains('Inscrição feita com sucesso')
        .should('be.visible');
     
    });

    it.only('Assinar Newsletter com E-mail inválido', () => {
      cy.step('Quando digita um e-mail válido no campo de newsletter')
      cy.iframe('.mailmunch-embedded-iframe')
        .as('iframe'); 
      cy.get('@iframe')
        .find('input[name="email"]')
        .type(emailInvalidoGerado);
      cy.step('E clica no botão de assinatura')
      cy.get('@iframe') 
        .contains('Quero assinar!')
        .click();
      cy.step('Então o sistema deve exibir uma mensagem de erro indicando que o e-mail é inválido')
      cy.get('@iframe')
        .contains('e-mail is invalid')
        .should('be.visible');
     
    });
  });

})