import { Component } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model: tf.Model;
  predictions: any;

  async loadModel() {
    this.model = await tf.loadModel('/assets/model.json');
  }

  async predict(imageData: ImageData) {

    await tf.tidy(() => {
  
      // Convert the canvas pixels to a Tensor of the matching shape
      let img = tf.fromPixels(imageData, 1);
      img = img.reshape([28, 28, 1]);
      img = tf.cast(img, 'float32');
  
      // Make and format the predications
      const output = this.model.predict(img) as any;
  
      // Save predictions on the component
      this.predictions = Array.from(output.dataSync()); 
    });
  
  }
}
