import { Device } from '../model/device';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { DEVICES } from '../resources/mock-device';
import { DeviceParserService } from './device-parser.service';
import { DefaultValueAccessor } from '@angular/forms';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DeviceService {

  constructor(private parserService: DeviceParserService, private http: Http) {
  }

  //TODO Sie können dieses Service benutzen, um alle REST-Funktionen für die Smart-Devices zu implementieren

  fetchDevices() {
  return  this.http.get('http://localhost:8081/devices').map((res) => {return res.json()}).toPromise();
  }
  
  getDevices(): Promise<Device[]> {
    //TODO Lesen Sie die Geräte über die REST-Schnittstelle aus
    /*
     * Verwenden Sie das DeviceParserService um die via REST ausgelesenen Geräte umzuwandeln.
     * Das Service ist dabei bereits vollständig implementiert und kann wie unten demonstriert eingesetzt werden.
     */
    
        let serverdata = new Array();
    
//return this.http.get('http://localhost:8081/devices').toPromise().then(function(data):Device[]  {
//   let serverdata = new Array();
//   let rdata = data.json();
//
//    let x = Promise.resolve(rdata).then(devices => {
//      for (let i = 0; i < devices.length; i++) {
//        serverdata[i] = this.parserService.parseDevice(devices[i]);
//      }
//      return devices;
//    });
//    
//    console.log(x);
//    
//   return serverdata;
//  
//  
//} );
    
    let x = Promise.resolve(this.http.get('http://localhost:8081/devices').map(resp => resp.json().devices).toPromise()).then(devices => {
      for (let i = 0; i < devices.length; i++) {
        devices[i] = this.parserService.parseDevice(devices[i]);
      }
      return devices;
    });
    
    console.log(x);
    
   return x;
    
    
    
    
    
//    console.log(serverdata);
//    
//    let x = Promise.resolve(DEVICES).then(devices => {
//      for (let i = 0; i < devices.length; i++) {
//        devices[i] = this.parserService.parseDevice(devices[i]);
//      }
//      return devices;
//    });
//    
//    console.log(x);
//    
//   return x;
  }

  getDevice(id: string): Promise<Device> {
    return this.getDevices()
      .then(devices => devices.find(device => device.id === id));
  }

  removeDevice(id: string) {
    console.log("in device service removing device");
    console.log('called delete on id>' + id);
    return this.http.delete('http://localhost:8081/device/delete/' + id).map(res => res.toString());

  }

  addDevice(displayname:string, typeInput:string,typeName:string, elemName:string, elemType:string){
    console.log('adding device in device service');
    let headers = new Headers({ 'content-type': 'application/json' });

      let options = new RequestOptions({ headers: headers });
  return this.http.post('http://localhost:8081/device/add', JSON.stringify({ display_name: displayname, 'type': typeInput, type_name: typeName, control_units: [{'name': elemName, 'type': elemType}]}), options).map(res => res.json());
  
  }


}


