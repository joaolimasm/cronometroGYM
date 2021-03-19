import { Injectable } from '@angular/core';
import { Exercise } from '../exercise';

@Injectable({
  providedIn: 'root'

})
export class TimerService {
  exercises: Exercise[] = [{
    name: 'abdominal',
    duration: 30,
    repetition: 3,
    preparation: 15,
    rest: 15

  }];
  currentEx: number;
  currentRep: number;
  phase: number;
  timeLeft: number;


  restart() {
    this.currentEx = 0;
    this.currentRep = 0;
    this.phase = 0;
    this.timeLeft = this.getTimeOfCurrentPhase();
  }


  next() {
    if (this.phase < 2) {
      this.phase++;
    } else {
      const ex = this.exercises[this.currentEx];
      if (this.currentRep < ex.repetition - 1) {
        this.currentRep++;
        this.phase = 1;
      } else {
        if (this.currentEx < this.exercises.length - 1) {
          this.currentEx++;
          this.currentRep = 0;
          this.phase = 0;
        } else {
          return;

        }

      }
    }
    this.timeLeft = this.getTimeOfCurrentPhase();

  }


  decrementTimeLeft(ellapsedTimeMs) {
    if (ellapsedTimeMs >= this.timeLeft) {
      this.next();
    } else {
      this.timeLeft = this.timeLeft - ellapsedTimeMs;
    }

  }

  add(exercise: Exercise) {

    this.exercises.push(exercise);
  }

  delete(i: number) {
    this.exercises.splice(i, 1);

  }

  private getTimeOfCurrentPhase() {
    const ex = this.exercises[this.currentEx];

    switch (this.phase) {
      case 0: return ex.preparation * 1000;
      case 1: return ex.duration * 1000;
      case 2: return ex.rest * 1000;
      default: return this.phase;

    }
  }
}

