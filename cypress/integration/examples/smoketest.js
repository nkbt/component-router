/* globals cy, context, beforeEach, it */


context('Smoketest', () => {
  beforeEach(() => {
    cy.visit(`pub/index.html`);
  });
  it('should have component-router text', () => {
    cy.get('#app').should('contain', 'component-router');
  });
});
