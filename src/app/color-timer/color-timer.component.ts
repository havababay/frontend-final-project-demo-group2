import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-timer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './color-timer.component.html',
  styleUrl: './color-timer.component.css',
})
export class ColorTimerComponent implements OnInit, OnDestroy{
  @Output()
  colorChanges = new EventEmitter<string>();

  private colors = ['red', 'blue', 'purple']
  currentColor = '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colorChangeInterval? : any;

  changeColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.currentColor = this.colors[randomIndex];
    this.colorChanges.emit(this.currentColor);
  }

  ngOnDestroy(): void {
    clearInterval(this.colorChangeInterval);
  }

  ngOnInit(): void {
    this.colorChangeInterval = setInterval(() => this.changeColor(), 1000);
  } 
}
