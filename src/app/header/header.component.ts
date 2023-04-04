import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() navOption = new EventEmitter<{
  //   recipesActive: boolean,
  //   shoppingActive: boolean,
  // }>();
  constructor() { }

  ngOnInit(): void {
  }

  // viewRecipePage() {
  //   this.navOption.emit({
  //     recipesActive: true,
  //     shoppingActive: false,
  //   })
  // }

  // viewShoppingListPage() {  
  //   this.navOption.emit({
  //     recipesActive: false,
  //     shoppingActive: true,
  //   })
  // }

}
