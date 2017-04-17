import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { RouterModule }   from '@angular/router';

import { AppComponent }         from './components/app.component';
import { DeviceDetailComponent } from './components/device-detail.component'
import { DeviceOverviewComponent } from './components/device-overview.component'
import { DeviceService } from './services/device.service'
import { LoginComponent }   from './components/login.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot([
      {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
    path: 'overview',
    component: DeviceOverviewComponent
  },
          {
      path: 'login',
      component: LoginComponent
    }
])
  ],
  declarations: [
    AppComponent,
    DeviceDetailComponent,
    DeviceOverviewComponent,
    LoginComponent
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
