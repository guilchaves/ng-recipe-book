import { createNgModuleType } from '@angular/compiler/src/render3/r3_module_compiler'
import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoginMode: boolean = true
  isLoading: boolean = false

  constructor(private authService: AuthService) {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return
    }

    const email = form.value.email
    const password = form.value.password

    this.isLoading = true

    if (this.isLoginMode) {
      //...
    } else {
      this.authService.signup(email, password).subscribe(
        resData => {
          console.log(resData)
          this.isLoading = false
        },
        err => {
          console.log(err)
          this.isLoading = false
        }
      )
    }

    form.reset()
  }
}
