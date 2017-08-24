import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-click-to-edit';
  firstName: String = 'Robert';
  lastName: String = 'Johnson';
  age: Number = 23;

  saveMethod(obj) {
      alert(' saved! the obj  - ' + JSON.stringify(obj));
  }
}
