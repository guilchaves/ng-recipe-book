import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { DataStorageService } from 'src/app/shared/services/data-storage.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true
  @Output() featureSelected = new EventEmitter<string>()

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
  }
}
