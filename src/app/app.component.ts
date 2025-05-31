import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  template: '<ion-router-outlet></ion-router-outlet>',
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {}