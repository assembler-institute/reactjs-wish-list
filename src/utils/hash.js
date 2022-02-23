export default function makeNewId() {
  const base = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let index = 0; index < 4; index += 1) {
    const random = Math.round(Math.random() * (62 - 1));
    id += base[random];
  }
  return id;
}
