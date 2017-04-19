import { Device } from '../model/device';
import { DeviceService } from '../services/device.service';


import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

  
@Component({
  selector: 'my-devices',
  templateUrl: `../app/views/overview.component.html`,
  
  providers: [DeviceService]
})
  

export class DeviceOverviewComponent implements OnInit {
  devices :Device[];
  selectedDevice: Device;
  
  constructor(private deviceService: DeviceService) { }
  
  getDevices(): void {
    this.deviceService.getDevices().then(devices => this.devices = devices );
  }
  
  ngOnInit(): void {
    console.log('in function ngOnInit');
    this.getDevices();
    console.log('get devices called');
  }
      
  onSelect(device: Device): void {
  this.selectedDevice = device;
    }
  
}
