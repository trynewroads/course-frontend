import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Task } from '@tnr/features/tasks/models/task.model';

@Component({
  selector: 'app-task-card',
  imports: [DecimalPipe, MatSlideToggleModule, MatIconModule, MatButtonModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  task = input.required<Task>();
}
