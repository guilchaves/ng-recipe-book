import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoginMode: boolean = true

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm): void {
    console.log(form.value)
    form.reset()
  }
}
