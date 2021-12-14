import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from '../app-routing.module'
import { SharedModule } from '../shared/shared.module'

import { HeaderComponent } from './components/header/header.component'
import { AuthComponent } from './components/auth/auth.component'

@NgModule({
  declarations: [HeaderComponent, AuthComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
