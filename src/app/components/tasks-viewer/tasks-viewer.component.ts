import { Component } from '@angular/core';
import { TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-tasks-viewer',
  templateUrl: './tasks-viewer.component.html',
  styleUrls: ['./tasks-viewer.component.scss']
})
export class TasksViewerComponent {
  public tasks = TasksService.getTasks();
}
