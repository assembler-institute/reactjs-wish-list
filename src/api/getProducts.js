import todos from "../utils/demo-data";

function getProducts(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }

      res(todos);
    }, 1000);
  });
}

export { getProducts };
