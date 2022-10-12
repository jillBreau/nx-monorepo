export const getTodos = () => cy.get('li.todo');
export const getAddTodoButton = () => cy.get('button#add-todo');
export const geDeleteTodoButton = () => cy.get('button#delete-todo');
