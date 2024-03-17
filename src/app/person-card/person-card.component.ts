import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../shared/model/person';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [
    CommonModule, MatCardModule
  ],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonCardComponent { 
  @Input()
  currentPerson? : Person;
}
