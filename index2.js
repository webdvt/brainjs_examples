// Let's take a data set and train the neural network to recognize
// if a piece of text is related to hardware of software

const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingData, {
  iterations: 2000
});

const output = network.run('The code has some bugs');

console.log(`Category: ${output}`);
