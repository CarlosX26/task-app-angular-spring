import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HotToastService } from "@ngneat/hot-toast";
import { BehaviorSubject, Observable } from "rxjs";

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: "root",
})
export class TaskService {
  baseURL: string = "http://localhost:8080";
  taskList: BehaviorSubject<ITask[]> = new BehaviorSubject([] as ITask[]);
  taskList$: Observable<ITask[]> = this.taskList.asObservable();

  constructor(private http: HttpClient, private toast: HotToastService) {}

  onError() {
    this.toast.error("Ops! Algo deu errado");
  }

  createTask(title: string): void {
    this.http
      .post<ITask>(`${this.baseURL}/api/tasks`, { title })
      .subscribe((data) => {
        this.taskList.next([...this.taskList.value, data]);
        this.toast.success("Tarefa criada com sucesso");
      }),
      () => {
        this.onError();
      };
  }
  getAllTasks(): void {
    this.http.get<ITask[]>(`${this.baseURL}/api/tasks`).subscribe((data) => {
      this.taskList.next(data);
    });
  }
  updateTask(id: number): void {
    this.http.patch<ITask>(`${this.baseURL}/api/tasks/${id}`, {}).subscribe(
      (data) => {
        const updateTaskList = this.taskList.value.map((task) => {
          if (task.id === id) {
            return data;
          }
          return task;
        });

        this.taskList.next(updateTaskList);
      },
      () => {
        this.onError();
      }
    );
  }
  deleteTask(id: number): void {
    this.http.delete<void>(`${this.baseURL}/api/tasks/${id}`).subscribe(
      () => {
        const updateTaskList = this.taskList.value.filter(
          (task) => task.id !== id
        );
        this.taskList.next(updateTaskList);

        this.toast.success("Tarefa deletada com sucesso");
      },
      () => {
        this.onError();
      }
    );
  }
}
