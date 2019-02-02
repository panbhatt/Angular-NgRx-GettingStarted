import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "./auth.service";
import { Store } from "@ngrx/store";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  pageTitle = "Log In";
  errorMessage: string;

  maskUserName: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.router.navigate(["welcome"]);
  }

  checkChanged(value: boolean, loginForm: NgForm): void {
    console.log("Coming here. ");
    this.maskUserName = value;
    this.store.dispatch({
      type: "MARK_USER_NAME",
      payload: { markUserName: true }
    });
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(["/products"]);
      }
    } else {
      this.errorMessage = "Please enter a user name and password.";
    }
  }
}
