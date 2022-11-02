import {Injectable} from '@angular/core';
import Task from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private static tasks: Task[] = []

  private static generateId(): string {
    return Math.random().toString(36).substring(2);
  }

  static createTask(content: string): Task {
    return {
      id: this.generateId(),
      content,
      completed: false,
      date: new Date()
    }
  }

  static getTasks(): Task[] {
    const tasks = localStorage.getItem('todo-app-tasks');
    if (!tasks)
      return this.tasks;
    return JSON.parse(tasks) as Task[];
  }

  static addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
  }

  static deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  static updateTask(task: Task): void {
    this.tasks = this.tasks.map(t => t.id === task.id ? task : t);
    this.saveTasks();
  }

  private static saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  static getTask(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }
}
