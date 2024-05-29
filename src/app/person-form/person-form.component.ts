import { PeronsService } from './../services/perons.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../shared/model/person';
import { Router } from '@angular/router';
import { PhoneNumber } from '../shared/model/phone-number';
import { PhoneType } from '../shared/model/phone-type';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    CommonModule,       
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormComponent implements OnInit { 
  currentPerson: Person = new Person('','','','');
  @ViewChild('phoneGroup') phoneGroup? : NgModelGroup;

  @Input()
  id? : string;

  constructor(private personService: PeronsService, private router: Router) {}

  ngOnInit(): void {
    if (this.id) {
      this.personService.get(this.id).then((personFromService) => {
        if (personFromService) {
          this.currentPerson = personFromService;
        }
      });
    }
  }

  onSubmitRegistration() {
    console.log("Form submitted!");
    if (this.id) {
      this.personService.update(this.currentPerson).then(
        () => {
          this.router.navigate(['']);
        }
      )
    } else {
      this.personService.add(this.currentPerson).then(
        () => this.router.navigate([''])
      );
    }
  }

  addPhoneNumber() {
    this.currentPerson.phones.push(new PhoneNumber("", PhoneType.Mobile));
  }

  removePhoneNumber(index : number) {
    this.currentPerson.phones.splice(index, 1);
    this.phoneGroup?.control.markAsDirty();
  }
 } 
