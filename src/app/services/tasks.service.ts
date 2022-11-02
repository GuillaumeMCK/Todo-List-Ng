import {Injectable} from '@angular/core';
import Task from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private static tasks: Task[] = TasksService.getTasks();

  private static generateId(): string {
    return Math.random().toString(36).substring(2);
  }

  public static createTask(content: string): Task {
    return {
      id: this.generateId(),
      content,
      done: false,
      date: new Date()
    }
  }

  public static getTasks(): Task[] {
    const localTasks = localStorage.getItem('todo-app-tasks') ?? '[]';
    this.tasks = JSON.parse(localTasks);
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
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
  }

  public static updateTask(task: Task): void {
    this.tasks = this.tasks.map(t => t.id === task.id ? task : t);
    this.saveTasks();
  }

  private static saveTasks(): void {
    localStorage.setItem('todo-app-tasks', JSON.stringify(this.tasks));
  }

  public static getTask(id: string): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }
}
