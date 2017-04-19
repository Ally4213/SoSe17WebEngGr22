// Keep the Input import for now, you'll remove it later:
import { Device } from '../model/device';
import { ControlUnit } from '../model/controlUnit';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { DeviceService } from '../services/device.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'device-detail',
  templateUrl: '../app/views/devicedetail.component.html',
  
})
export class DeviceDetailComponent implements OnInit {
  
  
  
  constructor(
  private deviceService: DeviceService,
  private route: ActivatedRoute,
  private location: Location
) {}
  
  @Input() device: Device;
  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.deviceService.getDevice(params['id']))
    .subscribe(device => this.device = device);
}
  goBack(): void {
  this.location.back();
}
  
  
  
}