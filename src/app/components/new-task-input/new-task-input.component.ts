import {Component} from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-new-task-input',
  templateUrl: './new-task-input.component.html',
  styleUrls: ['./new-task-input.component.scss']
})
export class NewTaskInputComponent {

  public taskContent: string = '';

  onSubmit() {
    if (this.taskContent !== '') {
      let newTask = TasksService.createTask(this.taskContent);
      TasksService.addTask(newTask);
      this.taskContent = '';
    } else {
      alert('Please enter a task');
    }
  }
}
