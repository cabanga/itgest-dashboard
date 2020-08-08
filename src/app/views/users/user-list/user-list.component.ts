import { Component, OnInit } from "@angular/core";
import { ApplicationService } from '../../../api/application.service';

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  users: any = [];

  user: any = {
    name: null,
    email: null,
    password: null,
    role: 0,
  };

  constructor(private _applicationService: ApplicationService) {}

  ngOnInit(): void {
    this._applicationService.getUsres().subscribe((response) => {
      this.users = response;
    });
  }
}
