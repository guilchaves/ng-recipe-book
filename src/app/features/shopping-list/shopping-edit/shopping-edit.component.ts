import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core'

import { Ingredient } from 'src/app/core/models/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  /**
   * @ViewChild is an alternative to pass data from a child component to it's parent
   * To use this approach the following properties needs to be created before ingredientAdded:
   *
   * @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef
   * @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef
   */
  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() {}

  ngOnInit(): void {}

  /**
   * This method would not receive any params if the @ViewChild approach was used.
   *
   * @param name The value from nameInput property
   * @param amount The value from amountInput property
   */
  onAddItem(name: string, amount: number): void {
    //  const name = this.nameInputRef.nativeElement.value
    //  const amount = this.amountInputRef.nativeElement.value
    this.ingredientAdded.emit(new Ingredient(name, amount))
  }
}
