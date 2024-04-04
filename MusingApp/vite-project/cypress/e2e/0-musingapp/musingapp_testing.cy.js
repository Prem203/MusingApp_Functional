/// <reference types="cypress" />

describe('MusingApp Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    
    it('displays the title', () => {
        cy.get('h1').should('have.text', 'MusingApp')
    })
    
    it('displays the subtitle', () => {
        cy.get('h2').should('have.text', 'A simple app to write and share your musings')
    })
    
    it('displays the input field', () => {
        cy.get('input').should('have.attr', 'placeholder', 'Write your musing here...')
    })
    
    it('displays the submit button', () => {
        cy.get('button').should('have.text', 'Submit')
    })
    
    it('displays the musing list', () => {
        cy.get('ul').should('have.attr', 'data-testid', 'musing-list')
    })
    
    it('can add a new musing', () => {
        const newMusing = 'Hello, world!'
    
        cy.get('input').type(`${newMusing}{enter}`)
    
        cy.get('ul li')
        .should('have.length', 1)
        .last()
        .should('have.text', newMusing)
    })
    
    it('can delete a musing', () => {
        const newMusing = 'Hello, world!'
    
        cy.get('input').type(`${newMusing}{enter}`)
    
        cy.get('ul li').should('have.length', 1)
    
        cy.get('button').click()
    
        cy.get('ul li').should('have.length', 0)
    })
    });