import { Exercise } from './exercise';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = false;
  exercises: Exercise[] = [{
    name: 'abdominal',
    duration: 30,
    repetition: 3,
    preparation: 15,
    rest: 15

  }];

}
