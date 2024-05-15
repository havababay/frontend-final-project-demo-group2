export class Employee {
  role: string;
  branch : string;

  constructor(
    public name : string,
    private salary: number,
    newRole : string,
    newBranch : string) { 
    this.role = newRole;
    this.branch =newBranch;
  }

  getFullName() {
    const name = "hava";
    return this.name + " " + this.role;
  }
}