Cypress.Commands.add("setTodosInLocalStorage", () => {
  cy.fixture("todos.json")
    .as("todos")
    .then((todos) => {
      localStorage.setItem(
        Cypress.env("todosLocalStorageKey"),
        JSON.stringify(todos),
      );
    });
});
