import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormComponent } from "./components/form/form.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HotToastModule } from "@ngneat/hot-toast";

@NgModule({
  declarations: [AppComponent, FormComponent, TaskListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HotToastModule.forRoot({
      position: "bottom-right",
      duration: 2000,
      autoClose: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
