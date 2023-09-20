import { Component } from "@angular/core";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  title: string = "";

  constructor(private taskService: TaskService) {}

  submit() {
    this.taskService.createTask(this.title);
    this.title = "";
  }
}
