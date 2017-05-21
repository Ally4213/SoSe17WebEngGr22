import { SidebarService } from '../services/sideBar.service';
import {Component, OnInit} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'my-sidebar',
  templateUrl: '../views/sidebar.component.html'
})
export class SidebarComponent implements OnInit{

  failed_logins: number = 0;
  server_start: Date = new Date();
  currentUser:string="Admin";

  constructor(private sidebarService: SidebarService){}

  ngOnInit(): void {
    this.sidebarService.failedLogins().subscribe(data =>this.failed_logins =data.failedLogins );
    this.sidebarService.currentUser().subscribe(data =>this.currentUser =data.currentUser );
  }
}
