import { Component } from "@angular/core";
import { HotToastService } from "@ngneat/hot-toast";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  title: string = "";

  constructor(
    private taskService: TaskService,
    private toast: HotToastService
  ) {}

  submit() {
    if (this.title.length >= 8) {
      this.taskService.createTask(this.title);
      this.title = "";
      return;
    }

    this.toast.error("Mínimo 8 caracteres");
  }
}
