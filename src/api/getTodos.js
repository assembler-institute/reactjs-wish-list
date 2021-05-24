import todos from "./todos";

function getTodos(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }

      res(todos);
    }, 1000);
  });
}

export { getTodos };
