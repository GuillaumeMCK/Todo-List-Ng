import {Component} from '@angular/core';
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-tasks-recap',
  templateUrl: './tasks-recap.component.html',
  styleUrls: ['./tasks-recap.component.scss']
})
export class TasksRecapComponent {
  public tasksDone = () => TasksService.getCountDone();
  public tasks = () => TasksService.getCount() - this.tasksDone();
}
