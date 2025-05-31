import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';
// import { provideIonicAngular } from '@ionic/angular/standalone';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideIonicAngular({})
//   ]
// };