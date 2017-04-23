import { Device } from '../model/device';
import { DeviceService } from '../services/device.service';


import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';

declare function LoadSVGToDom(): void;

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
    if(this.devices === undefined){
    return;
    }
    else{
   LoadSVGToDom();
    console.log(this.devices);
    this.drawDeviceImgs(this.devices);
    }
  
  }
  
  ngOnInit(): void {
    this.getDevices();
    
  }
 
  ngDoCheck(){
    if(this.devices === undefined){
    return;
    }
    else{
   /*
   * needed for loading of svg pictures in overview - 
   * otherwise they can't call the draw function and manipulate the svgs.
   */
   LoadSVGToDom();
    console.log(this.devices);
    this.drawDeviceImgs(this.devices);
    }

  }
  
 drawDeviceImgs(devices : Device[]) : void{
     devices.forEach((device)=>{
         
         device.draw_image(device.id, device.image, device.control_units[0].min, device.control_units[0].max, device.control_units[0].current, device.control_units[0].values)});
       
   
 }
      
  onSelect(device: Device): void {
    this.selectedDevice = device;
    
  }

}
