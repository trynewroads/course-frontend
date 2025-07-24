import { DecimalPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Task } from '@tnr/features/tasks/models/task.model';
import { TrackStatusPipe } from '@tnr/features/tasks/pipes/track-status-pipe';

@Component({
  selector: 'app-task-card',
  imports: [
    DecimalPipe,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    TrackStatusPipe,
  ],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  task = input.required<Task>();

  changeStatus = output<Task>();
  delete = output<Task>();
  edit = output<Task>();
}
