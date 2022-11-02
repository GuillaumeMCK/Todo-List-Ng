import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { NewTaskInputComponent } from './components/new-task-input/new-task-input.component';
import { TasksViewerComponent } from './components/tasks-viewer/tasks-viewer.component';
import { TasksRecapComponent } from './components/tasks-recap/tasks-recap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskItemComponent,
    NewTaskInputComponent,
    TasksViewerComponent,
    TasksRecapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
