import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeronsService } from '../services/perons.service';
import { Person } from '../shared/model/person';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeletePersonDialogComponent } from '../delete-person-dialog/delete-person-dialog.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-persons-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatProgressBarModule,
  ],
  templateUrl: './persons-list.component.html',
  styleUrl: './persons-list.component.css',
})
export class PersonsListComponent implements OnInit {
  isLoadingDone = false;

  constructor(
    private personService: PeronsService,
    private dialogService: MatDialog
  ) {}

  ngOnInit(): void {
    this.personService.list().then((result: Person[]) => {
      this.allPersons = result;
      this.isLoadingDone = true;
    });
  }

  allPersons: Person[] = [];
  displayedColumns = ['fullName', 'email', 'actions'];

  deletePerson(id: string, fullName: string) {
    const dialogRef = this.dialogService.open(DeletePersonDialogComponent, {
      data: fullName,
    });

    dialogRef.afterClosed().subscribe((deletionResult) => {
      if (deletionResult) {
        this.personService.delete(id).then(() => {
          this.personService
            .list()
            .then((result: Person[]) => (this.allPersons = result));
        });
      }
    });
  }
}
