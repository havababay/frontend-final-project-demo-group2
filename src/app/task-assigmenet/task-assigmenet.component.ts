import { PeronsService } from './../services/perons.service';
import { TasksService } from './../services/tasks.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HouseholdTask } from '../shared/model/household-task';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TaskDuration } from '../shared/model/task-duration';
import { Person } from '../shared/model/person';
import { MatButtonModule } from '@angular/material/button';
import { PersonCardComponent } from '../person-card/person-card.component';

@Component({
  selector: 'app-task-assigmenet',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    PersonCardComponent,
  ],
  templateUrl: './task-assigmenet.component.html',
  styleUrl: './task-assigmenet.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskAssigmenetComponent implements OnInit {
  allTasks: HouseholdTask[] = [];
  allPerson: Person[] = [];
  randomTeam: Person[] = [];

  selectedTask?: HouseholdTask;

  constructor(
    private tasksService: TasksService,
    private personService: PeronsService
  ) {}

  ngOnInit(): void {
    this.allTasks = this.tasksService.list();
    this.allPerson = this.personService.list();
  }

  getDurationStyle(): string {
    switch (this.selectedTask?.duration) {
      case TaskDuration.SHORT:
        return 'task-short';
      case TaskDuration.MEDIUM:
        return 'task-medium';
      case TaskDuration.LONG:
        return 'task-long';
      default:
        return '';
    }
  }

  createRandomTeam() {
    this.randomTeam = [];

    const tempPersons = [...this.allPerson];
    tempPersons.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 4; ++i) {
      this.randomTeam.push(tempPersons[i]);
    }

    //this.randomTeam = tem
  }
}
