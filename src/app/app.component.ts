import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navBarStates: {recipesOn:boolean, shoppingOn: boolean} = {
    recipesOn: true,
    shoppingOn: false,
  };
  showOptionNav(navBarData:{recipesActive: boolean, shoppingActive: boolean}) {
    this.navBarStates.recipesOn = navBarData.recipesActive;
    this.navBarStates.shoppingOn = navBarData.shoppingActive;
  }
}
