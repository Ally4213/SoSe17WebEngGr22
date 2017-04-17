import { Component, Input } from '@angular/core';

import { Device } from '../model/device'

@Component({
  selector: 'device-detail',
  template: `
    <div *ngIf="device">
      <h2>{{device.display_name}} details!</h2>
      <div><label>id: </label>{{device.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="device.display_name" placeholder="name"/>
      </div>
    </div>
  `
  
})
export class DeviceDetailComponent {
  
  @Input() device: Device;
}