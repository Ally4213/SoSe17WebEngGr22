import { Device } from '../model/device';
import { DeviceService } from '../services/device.service';


import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

  
@Component({
  selector: 'my-devices',
  templateUrl: `../app/views/overview.component.html`,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .devices {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .devices li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .devices li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .devices li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .devices .text {
      position: relative;
      top: -3px;
    }
    .devices .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [DeviceService]
})
  

export class DeviceOverviewComponent implements OnInit {
  title: string = "Ally's Angular App";
  devices :Device[];
  selectedDevice: Device;
  
  constructor(private deviceService: DeviceService) { }
  
  getDevices(): void {
   console.log('get devices called in app component');
    console.log('devices currently contains' + this.devices);
    this.deviceService.getDevices().then(devices => this.devices = devices );
    console.log('devices currently contains' + this.devices);
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
