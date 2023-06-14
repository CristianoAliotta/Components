import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Components';

  public user: User = {
    firstName: "Crash",
    lastName: "Bandicoot",
    phone: 3391824537,
    address: "Wumpa Island 1"
  }
}
