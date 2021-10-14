import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  textInput = new FormControl("", [
    Validators.required,
    Validators.pattern("[0-9.,]*")
  ]);

  public amountChanged(event: any) {
    console.log(event);
  }
}
