import * as tf from '@tensorflow/tfjs';
import 'bootstrap/dist/css/bootstrap.css';

document.getElementById('output').innerText = "Hello World";

// Define a machine learning model for linear regression
const model = tf.sequential();

model.add(tf.layers.dense({
    units: 1,
    inputShape: [1]
}));

// Specify loss and optimizer for model
model.compile({
    loss: 'meanSquaredError',
    optimizer: 'sgd'
});
