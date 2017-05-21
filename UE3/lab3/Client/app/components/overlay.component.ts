import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OverviewComponent } from "./overview.component";
import { DeviceService } from "../services/device.service";
import { Device } from "../model/device";
import { ControlUnit } from "../model/controlUnit";
import { ControlType } from "../model/controlType";

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'my-overlay',
  templateUrl: '../views/overlay.component.html'
})
export class OverlayComponent implements OnInit {
    response: any;
  @ViewChild('addForm') loginForm: NgForm;
  @Input()
  overviewComponent: OverviewComponent = null;

  device_types: any;
  controlUnit_types: any;
  selected_type: string = null;
  controlUnitType_selected: string = null;

  addError: boolean = false;
  createError: boolean = false;

  constructor(private deviceService: DeviceService) {
  }


  ngOnInit(): void {
    this.device_types = ["Beleuchtung", "Heizkörperthermostat", "Rollladen", "Überwachungskamera", "Webcam"]
    this.controlUnit_types = ["Ein/Auschalter", "Diskrete Werte", "Kontinuierlicher Wert"];
    this.selected_type = this.device_types[0];
    this.controlUnitType_selected = this.controlUnit_types[0];
  }

  doClose(): void {
    if (this.overviewComponent != null) {
      this.overviewComponent.closeAddDeviceWindow();
    }
  }

  /**
   * Liest die Daten des neuen Gerätes aus der Form aus und leitet diese an die REST-Schnittstelle weiter
   * @param form
   */
  onSubmit(form: NgForm): void {
    
    this.overviewComponent.closeAddDeviceWindow();
    var displayname = $('#displayname-input').val();
    var typeInput = $('#type-input').val();
    var typeName = $('typename-input').val();
    var elemName = $('elementname-input').val();
    var elemType = $('#elementtype-input').val();
    console.log(displayname +" ," + typeInput +" ," + typeName +" ," + elemName +" ," + elemType);
    this.deviceService.addDevice(displayname, typeInput, typeName, elemName, elemType).subscribe(data => {
    this.response = data;
      console.log(this.response)
    });
    form.reset();
  }

  isSelected(type: string): boolean {
    return type == this.device_types[0];
  }

  isBooleanSelected(): boolean {
    return this.controlUnitType_selected === this.controlUnit_types[0];
  }

  isEnumSelected(): boolean {
    return this.controlUnitType_selected === this.controlUnit_types[1];
  }

  isContinuousSelected(): boolean {
    return this.controlUnitType_selected === this.controlUnit_types[2];
  }

}
