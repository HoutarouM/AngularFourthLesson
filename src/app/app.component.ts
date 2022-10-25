import { Component } from '@angular/core';
import { Firma } from './firma.interface';

@Component({
  selector: 'app-root',
  templateUrl: './myFile.html',
  styleUrls: ['./style.css'],
})
export class AppComponent implements Firma {
  title: string = 'IT Firma';

  color: string = 'white';

  logo: string = 'assets/images/logo.jpg';

  active: boolean = true;

  changeBackground() {
    this.color = this.color === 'white' ? 'coral' : 'white';
  }
}
