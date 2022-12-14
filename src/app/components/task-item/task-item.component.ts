import {Component, Input} from '@angular/core';
import Task from "../../models/task";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task!: Task;

  onCheck() {
    this.task.done = !this.task.done
    TasksService.updateTask(this.task);
  }

  onDelete() {
    TasksService.deleteTask(this.task.id);
  }
}
