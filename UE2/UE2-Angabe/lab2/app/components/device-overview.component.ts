import { Device } from '../model/device';
import { DeviceService } from '../services/device.service';


import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';

  
@Component({
  selector: 'my-devices',
  templateUrl: `../app/views/overview.component.html`,
  
  providers: [DeviceService]
})
  

export class DeviceOverviewComponent implements OnInit {
  devices :Device[]
  selectedDevice: Device;
  
  constructor(private deviceService: DeviceService) { }
  
  getDevices(): void {
    
    this.deviceService.getDevices().then(devices => this.devices = devices);
  
  }
  
  ngOnInit(): void {
    this.getDevices();
  }
 
  ngAfterViewChecked(){
    if(this.devices === undefined){
    return;
    }
    else{
    console.log(this.devices);
    this.drawDeviceImgs(this.devices);
    }
  }
  
 drawDeviceImgs(devices : Device[]) : void{
     devices.forEach((device)=>{
         console.log("calling draw_device in overview with args");
         device.draw_image(device.id, device.image, device.control_units[0].min, device.control_units[0].max, device.control_units[0].current, device.control_units[0].values)});
         console.log("called draw_device in overview with args"); 
   
 }
      
  onSelect(device: Device): void {
  this.selectedDevice = device;
    
    }
  
}
