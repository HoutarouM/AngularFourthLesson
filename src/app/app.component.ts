import { Component } from '@angular/core';
import { Firma, FirmType } from './firma.interface';

@Component({
  selector: 'app-root',
  templateUrl: './myFile.html',
  styleUrls: ['./style.css'],
})
export class AppComponent {
  firma: Firma = {
    title: 'IT Firma',
    logo: 'assets/images/logo.jpg',
    noLogo: 'assets/images/nofoto.jpg',
    adres: [
      "Adres 24",
      "41-400",
      "Middle of nowhere"
    ],
    type: FirmType.finansy
  }

  color: string = 'white';

  active: boolean = true;

  showImage: boolean = false;

  changeBackground() {
    this.color = this.color === 'white' ? 'coral' : 'white';
  }
}
