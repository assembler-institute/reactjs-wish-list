import tasks from "../utils/demo-data";

function getTasks(fail = false) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (fail) {
        rej(new Error("Failed to fetch"));
      }

      res(tasks);
    }, 1000);
  });
}

export { getTasks };
