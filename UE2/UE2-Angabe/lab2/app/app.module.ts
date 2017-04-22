import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppComponent }         from './components/app.component';
import { DeviceDetailComponent } from './components/device-detail.component'
import { DeviceOverviewComponent } from './components/device-overview.component'
import { DeviceService } from './services/device.service'
import { LoginComponent }   from './components/login.component';
import { OptionsComponent }   from './components/options.component';
import { ControlTypeContinuousComponent } from './components/controlTypeContinuous.component';
import { ControlTypeEnumComponent } from './components/controlTypeEnum.component';
import { ControlTypeBooleanComponent } from './components/controlTypeBoolean.component';
import { FooterComponent } from './components/footer.component';
import { HeaderLoggedInComponent } from './components/header-loggedIn.component';
import { HeaderLogged0utComponent } from './components/header-loggedOut.component';



import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DeviceDetailComponent,
    DeviceOverviewComponent,
    LoginComponent,
    OptionsComponent,
    ControlTypeBooleanComponent,
    ControlTypeContinuousComponent,
    ControlTypeEnumComponent,
    FooterComponent,
    HeaderLoggedInComponent,
    HeaderLogged0utComponent
  ],
  providers: [
    DeviceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
