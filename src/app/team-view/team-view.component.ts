import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Person } from '../shared/model/person';
import { PeronsService } from '../services/perons.service';
import { PersonCardComponent } from '../person-card/person-card.component';
import { TaskDuration } from '../shared/model/task-duration';

@Component({
  selector: 'app-team-view',
  standalone: true,
  imports: [
    CommonModule, PersonCardComponent
  ],
  templateUrl: './team-view.component.html',
  styleUrl: './team-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamViewComponent implements OnInit{ 
  allPersons : Person[] = [];
  readonly PERSONS_PER_TEAM = 4;
  durationToCount = new Map<TaskDuration, number>();

  constructor(private personService : PeronsService){
    this.durationToCount.set(TaskDuration.SHORT, 2);
    this.durationToCount.set(TaskDuration.MEDIUM, 3);
    this.durationToCount.set(TaskDuration.LONG, 4);
  }

  ngOnInit(): void {
    this.personService.list().then(
      (result : Person[]) => this.allPersons = result
    );
  }
}
