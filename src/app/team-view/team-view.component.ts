import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-team-view',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './team-view.component.html',
  styleUrl: './team-view.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamViewComponent { }
