const brain = require('brain.js');

// Initializing a network
const network = new brain.NeuralNetwork();

// Adding training data (outputting the first value in the array)
network.train([
  {input: [0, 0, 0], output: [0]},
  {input: [0, 0, 1], output: [0]},
  {input: [0, 1, 1], output: [0]},
  {input: [1, 0, 1], output: [1]},
  {input: [1, 1, 1], output: [1]}
]);

// Output: 0 --> input[0] wins; 1 --> input[1] wins
/*network.train([
   {input: [1, 2], output: [1]}, // Team 2 wins
   {input: [1, 3], output: [1]}, // Team 3 wins
   {input: [2, 3], output: [0]}, // Team 2 wins
   {input: [2, 4], output: [1]}, // Team 4 wins
   // {input: [1, 2], output: [0]}, // Team 1 wins
   // {input: [1, 3], output: [0]}, // Team 1 wins
   // {input: [3, 4], output: [0]}, // Team 3 wins
]);*/

const output = network.run([1, 0, 0]);
console.log(`Prob: ${output}`); // Outputs "0.91" --> 90% chances of outputting 1