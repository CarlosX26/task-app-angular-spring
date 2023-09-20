import { Component, OnInit } from "@angular/core";
import { ITask, TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  taskList: ITask[] = [];

  ngOnInit(): void {
    this.taskService.getAllTasks();
    this.taskService.taskList$.subscribe((data) => {
      this.taskList = data;
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
  isCompleted(id: number) {
    this.taskService.updateTask(id);
  }
}
