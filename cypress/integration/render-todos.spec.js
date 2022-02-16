describe("Todos", () => {
  context("basic crud", () => {
    it("renders the default message if there are no todos", () => {
      cy.visit("/");
      cy.get("[data-testid=no-todos]").should("be.visible");
    });

    it("renders an error message if no value is entered", () => {
      cy.visit("/");
      cy.get("[data-testid=create-todo-input]").type("{enter}");
      cy.get("[data-testid=create-todo-error-message]").should(
        "contain",
        "Please enter a todo name",
      );
    });

    it("creates a new todo with the main form", () => {
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const TODO_TEXT = todos[0].text;
        cy.get("[data-testid=create-todo-input]").type(`${TODO_TEXT}{enter}`);
        cy.get("[data-testid=todos-list] li").should("have.length", 1);
        cy.contains(TODO_TEXT).click();
        cy.get("[data-testid=todo-item-input]").should("have.value", TODO_TEXT);
        cy.get("[data-testid=todo-item-checkbox]").should("exist");
      });
    });

    it("renders the total number of todos", () => {
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const TODO_TEXT = todos[0].text;
        cy.get("[data-testid=create-todo-input]").type(`${TODO_TEXT}{enter}`);
        cy.get("[data-testid=app-footer]").contains("1 todos left");
      });
    });

    it("changes the todo name", () => {
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const PREV_TODO_TEXT = todos[0].text;
        const NEW_TODO_TEXT = " edited";

        cy.get("[data-testid=create-todo-input]").type(
          `${PREV_TODO_TEXT}{enter}`,
        );
        cy.contains(PREV_TODO_TEXT).click();
        cy.get("[data-testid=todo-item-input]").type(`${NEW_TODO_TEXT}{enter}`);
        cy.get("[data-testid=todo-item-input]").should("not.exist");
      });
    });

    it("sets the todo as checked", () => {
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const TODO_TEXT = todos[0].text;
        cy.get("[data-testid=create-todo-input]").type(`${TODO_TEXT}{enter}`);
        cy.get("[data-testid=todo-item-checkbox]")
          .first()
          .should("not.be.checked")
          .click()
          .should("be.checked");
        cy.get("[data-testid=app-footer]").contains("0 todos left");
      });
    });

    it("deletes the todo", () => {
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const TODO_TEXT = todos[0].text;
        cy.get("[data-testid=create-todo-input]")
          .first()
          .type(`${TODO_TEXT}{enter}`);
        cy.get("[data-testid=todo-item-delete-button]").click();
        cy.get("[data-testid=todo-list-item]").should("have.length", 0);
        cy.get("[data-testid=app-footer]").contains("0 todos left");
      });
    });
  });

  context("pages navigation", () => {
    it("/ page: renders all the todos", () => {
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const TODO_1_TEXT = todos[0].text;
        const TODO_2_TEXT = todos[1].text;

        cy.get("[data-testid=create-todo-input]").type(`${TODO_1_TEXT}{enter}`);
        cy.get("[data-testid=create-todo-input]").type(`${TODO_2_TEXT}{enter}`);
        cy.get("[data-testid=todos-list]").contains(TODO_1_TEXT);
        cy.get("[data-testid=todos-list]").contains(TODO_2_TEXT);
        cy.get("[data-testid=todos-list] li").should("have.length", 2);
        cy.get("[data-testid=app-footer]").contains("2 todos left");
      });
    });

    it("/ page: renders all the active or not todos", () => {
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const TODO_1_TEXT = todos[0].text;
        const TODO_2_TEXT = todos[1].text;

        cy.get("[data-testid=create-todo-input]").type(`${TODO_1_TEXT}{enter}`);
        cy.get("[data-testid=create-todo-input]").type(`${TODO_2_TEXT}{enter}`);
        cy.get("[data-testid=todo-item-checkbox]").first().check();
        cy.get("[data-testid=app-footer]").contains("1 todos left");
        cy.get("[data-testid=todos-list] li").should("have.length", 2);
      });
    });

    it("/active page: renders only the active todos", () => {
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const TODO_1_TEXT = todos[0].text;
        const TODO_2_TEXT = todos[1].text;

        cy.get("[data-testid=create-todo-input]").type(`${TODO_1_TEXT}{enter}`);
        cy.get("[data-testid=create-todo-input]").type(`${TODO_2_TEXT}{enter}`);
        cy.get("[data-testid=todo-item-checkbox]").first().check();
        cy.get("[data-testid=footer-active-link]").click();
        cy.location("pathname").should("eq", "/active");
        cy.get(".active").should("be.visible").and("have.length", 1);
        cy.get("[data-testid=app-footer]").contains("1 todos left");
      });
    });

    it("/completed page: renders only the completed todos", () => {
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const TODO_1_TEXT = todos[0].text;
        const TODO_2_TEXT = todos[1].text;

        cy.get("[data-testid=create-todo-input]").type(`${TODO_1_TEXT}{enter}`);
        cy.get("[data-testid=create-todo-input]").type(`${TODO_2_TEXT}{enter}`);
        cy.get("[data-testid=todo-item-checkbox]").first().check();
        cy.get("[data-testid=footer-completed-link]").click();
        cy.location("pathname").should("eq", "/completed");
        cy.get(".active").should("be.visible").and("have.length", 1);
        cy.get("[data-testid=app-footer]").contains("1 todos left");
      });
    });
  });

  context("extras", () => {
    it("loads the todos from localStorage", () => {
      cy.setTodosInLocalStorage();
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        cy.get("[data-testid=todo-item]")
          .should("have.length", todos.length)
          .its("length")
          .should("be.gt", 0);
        cy.get("[data-testid=no-todos]").should("not.exist");
      });
    });

    it("updates the done todos in localStorage", () => {
      cy.setTodosInLocalStorage();
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const ITEM_INDEX = 1;
        cy.get("[data-testid=todo-item]")
          .eq(ITEM_INDEX)
          .should("contain", todos[ITEM_INDEX].text)
          .find("[data-testid=todo-item-checkbox]")
          .click()
          .should("be.checked")
          .and(() => {
            const localStorageTodos = localStorage.getItem(
              Cypress.env("todosLocalStorageKey"),
            );

            const parsedTodos = JSON.parse(localStorageTodos);
            const doneTodo = parsedTodos.find((todo) => todo.done);
            expect(doneTodo).not.to.be.null;
            expect(doneTodo.done).to.be.true;
            expect(doneTodo.text).to.eq(todos[ITEM_INDEX].text);
          });
      });

      cy.fixture("todos.json").then((todos) => {
        cy.get("[data-testid=app-footer]").contains(
          `${todos.length - 1} todos left`,
        );
      });
    });

    it("updates a todo text in localStorage", () => {
      cy.setTodosInLocalStorage();
      cy.visit("/");

      cy.fixture("todos.json").then((todos) => {
        const ITEM_INDEX = 1;
        const PREV_TODO_TEXT = todos[ITEM_INDEX].text;
        const NEW_TODO_TEXT = `${PREV_TODO_TEXT} edited`;

        cy.get("[data-testid=todo-item]")
          .eq(ITEM_INDEX)
          .should("contain", PREV_TODO_TEXT)
          .click()
          .get("[data-testid=todo-item-input]")
          .clear()
          .type(`${NEW_TODO_TEXT}{enter}`)
          .should("not.exist")
          .and(() => {
            const localStorageTodos = localStorage.getItem(
              Cypress.env("todosLocalStorageKey"),
            );

            const parsedTodos = JSON.parse(localStorageTodos);
            const foundTodo = parsedTodos.find(
              (todo) => todo.text === NEW_TODO_TEXT,
            );

            expect(foundTodo).not.to.be.null;
            expect(foundTodo.text).to.eq(NEW_TODO_TEXT);
          });
      });
    });

    it("has the default theme switch aria-label of set dark mode", () => {
      cy.visit("/");
      cy.get("button[aria-label='Set dark mode']").should("be.visible");
    });

    it("toggles the light and dark mode", () => {
      cy.visit("/");
      cy.get("button[aria-label='Set dark mode']").click().should("be.visible");
      cy.get("button[aria-label='Set light mode']")
        .click()
        .should("be.visible");
    });
  });
});
