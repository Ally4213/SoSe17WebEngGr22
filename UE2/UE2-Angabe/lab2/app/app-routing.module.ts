import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './components/app.component';
import { DeviceDetailComponent } from './components/device-detail.component'
import { DeviceOverviewComponent } from './components/device-overview.component'
import { DeviceService } from './services/device.service'
import { LoginComponent }   from './components/login.component';
import { OptionsComponent }   from './components/options.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'overview', component: DeviceOverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'detail/:id', component: DeviceDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}