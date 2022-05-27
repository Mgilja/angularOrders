import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

  onSignUp(form:NgForm) {
    if(form.invalid) {
      return
    }
    this.authService.createUseer(form.value.email,form.value.password)
  }
}
