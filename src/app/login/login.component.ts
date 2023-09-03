import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.userForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.authenticationService.userLogin(
      this.userForm.value.username,
      'password'
    );
    this.router.navigateByUrl('/home');
  }
}
