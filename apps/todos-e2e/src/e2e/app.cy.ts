import { getAddTodoButton, getTodos, geDeleteTodoButton } from '../support/app.po';

describe('TodoApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should((t) => expect(t.length).equal(2));
    getAddTodoButton().click();
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equal(4));
    geDeleteTodoButton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });
});
