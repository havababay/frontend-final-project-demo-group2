import { TaskDuration } from "./task-duration";

export class HouseholdTask {
  constructor(
    public id : number,
    public name: string,
    public description: string,
    public duration: TaskDuration) {}
}
