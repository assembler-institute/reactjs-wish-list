import todos from "../utils/demo-data";

function getTodos(fail = false) {
  return new Promise((res, rej) => {
    if (fail) {
      rej(new Error("Failed to fetch"));
    }

    res(todos);
  }, 1000);
}

export { getTodos };
