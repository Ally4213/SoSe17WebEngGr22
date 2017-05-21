import {Device} from '../model/device';
import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import {DEVICES} from '../resources/mock-device';
import {DeviceParserService} from './device-parser.service';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DeviceService {

    constructor(private parserService: DeviceParserService, private http :Http) {
    }

    //TODO Sie können dieses Service benutzen, um alle REST-Funktionen für die Smart-Devices zu implementieren

    getDevices(): Promise<Device[]> {
        //TODO Lesen Sie die Geräte über die REST-Schnittstelle aus
        /*
         * Verwenden Sie das DeviceParserService um die via REST ausgelesenen Geräte umzuwandeln.
         * Das Service ist dabei bereits vollständig implementiert und kann wie unten demonstriert eingesetzt werden.
         */
        return Promise.resolve(DEVICES).then(devices => {
            for (let i = 0; i < devices.length; i++) {
                devices[i] = this.parserService.parseDevice(devices[i]);
            }
            return devices;
        });
    }

    getDevice(id: string): Promise<Device> {
        return this.getDevices()
            .then(devices => devices.find(device => device.id === id));
    }
  
  removeDevice(id: string) {
   console.log("in device service removing device");
console.log('called delete on id>' + id);
        return this.http.delete('http://localhost:8081/device/delete/a79acab4-e88b-11e6-bf01-fe55135034f3').map(res => res.toString());

    }
  
  }


