import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { AppRoutingModule } from '../app-routing.module'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
