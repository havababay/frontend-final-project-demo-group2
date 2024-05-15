import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColorTimerComponent } from '../color-timer/color-timer.component';

@Component({
  selector: 'app-timer-container',
  standalone: true,
  imports: [
    CommonModule, ColorTimerComponent
  ],
  templateUrl: './timer-container.component.html',
  styleUrl: './timer-container.component.css',
})
export class TimerContainerComponent { 
  childColor = ''

  childColorChanges(eventColor : string) {
    this.childColor = eventColor;
  }
}
