describe('Base Display', () => {
  it('displays the title and form, but no reservations', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Turing Cafe Reservations');
    cy.get('.resy-form').should('exist');
    cy.get('.reservation-card').should('exist');  }); //this would fail if no reservations existed, but that's beyond the scope of this midmod
});

describe('Form Interaction', () => {
  it('should reflect the input values in the form', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input[name="name"]').type('Firstname Lastname').should('have.value', 'Firstname Lastname');
    cy.get('input[name="date"]').type('12/31').should('have.value', '12/31');
    cy.get('input[name="time"]').type('5:00').should('have.value', '5:00');
    cy.get('input[name="number"]').type('5').should('have.value', '5');
  });
});

describe('Adding a Reservation', () => {
  it('should allow a user to add a new reservation', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input[name="name"]').type('Jane Doe');
    cy.get('input[name="date"]').type('01/01');
    cy.get('input[name="time"]').type('7:00');
    cy.get('input[name="number"]').type('4');
    cy.get('button[type="submit"]').click();
    
  });
});