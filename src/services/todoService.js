function getTodo(id = 1) {
  let whatAmI = fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  console.log("1. ", whatAmI);
  let result = whatAmI.then((response) => response.json());
  console.log("2. ", result);
  result.then((payload) => console.log("3. ", payload));
}

export default getTodo;
