import { Injectable } from '@angular/core';
import { HouseholdTask } from '../shared/model/household-task';
import { TaskDuration } from '../shared/model/task-duration';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private allTasks : HouseholdTask[] = [
    new HouseholdTask(1, "Wash Dishes", "Clean and dry all dishes", TaskDuration.SHORT),
    new HouseholdTask(2, "Vacuum Floors", "Remove dust and debris from floors", TaskDuration.MEDIUM),
    new HouseholdTask(3, "Laundry", "Wash, dry, and fold clothes", TaskDuration.MEDIUM),
    new HouseholdTask(4, "Cook Dinner", "Prepare a nutritious meal", TaskDuration.LONG),
    new HouseholdTask(5, "Water Plants", "Give plants the necessary water", TaskDuration.SHORT),
  ];
  constructor() { }

  list() : HouseholdTask[] {
    return this.allTasks;
  }
}
