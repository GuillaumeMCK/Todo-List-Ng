import {Injectable} from '@angular/core';
import Task from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private static readonly defaultTasks: Task[] = [
    {
      id: 'aakqcrd5v2p',
      content: 'Sleep',
      done: true,
      date: "03/11/2022, 9:0:0 AM"
    },
    TasksService.createTask('Learn Angular'),
    TasksService.createTask('Learn React'),
    TasksService.createTask('Learn Vue'),
    TasksService.createTask('Learn Svelte')
  ];
  private static tasks: Task[] = TasksService.getTasks();

  private static generateId(): string {
    return Math.random().toString(36).substring(2);
  }

  public static createTask(content: string): Task {
    return {
      id: this.generateId(),
      content,
      done: false,
      date: new Date().toLocaleString()
    }
  }

  public static getTasks(): Task[] {
    const localTasks = localStorage.getItem('todo-app-tasks');
    if (localTasks) {
      this.tasks = JSON.parse(localTasks);
    }
    else {
      this.writeDefaultTasks();
    }
    return this.tasks;
  }

  public static addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
  }

  public static getCount(): number {
    return this.tasks.length;
  }

  public static getCountDone(): number {
    return this.tasks.filter(t => t.done).length;
  }

  public static deleteTask(id: string): void {
    let index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.saveTasks();
  }

  public static updateTask(task: Task): void {
    this.tasks = this.tasks.map(t => t.id === task.id ? task : t);
    this.saveTasks();
  }

  private static saveTasks(): void {
    localStorage.setItem('todo-app-tasks', JSON.stringify(this.tasks));
  }

  private static writeDefaultTasks(): void {
    this.tasks = this.defaultTasks;
    localStorage.setItem('todo-app-tasks', JSON.stringify(this.defaultTasks));
  }

  public static getTask(id: string): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }
}
