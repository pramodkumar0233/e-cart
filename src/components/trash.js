// console.log("Start");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => response.json())
//   .then(data => console.log("Fetched Data:", data));

// console.log("End");

// async function getData() {
//   console.log("1. Start fetching...");

//   let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//   console.log("2. Response received");

//   let data = await response.json();

//   console.log("3. Data parsed:", data.title);
// }

// console.log("A. Before function call");
// getData();
// console.log("B. After function call");

async function getData() {
  console.log("Start fetching...");
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await res.json();
  console.log("Data received:", data.title);
}

getData();

// Heavy blocking loop
for (let i = 0; i < 5e9; i++) {} // <- blocks for a few seconds

console.log("Main loop finished");
