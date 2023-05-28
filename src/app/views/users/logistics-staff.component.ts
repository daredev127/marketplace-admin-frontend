import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/dtos/User';
import { NewUser } from 'src/app/dtos/NewUser';

@Component({
  templateUrl: 'logistics-staff.component.html',
})
export class LogisticsStaffComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users?: User[];
  logisticsStaff = new NewUser();

  ngOnInit() {
    this.getLogisticsStaffs();
  }

  getLogisticsStaffs() {
    this.usersService.getLogisticsStaffs().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.users = res.data;
      }
    });
  }

  addLogisticsStaff() {
    this.usersService
      .addLogisticsStaff(this.logisticsStaff)
      .subscribe((res) => {
        if (res.status.toLowerCase() == 'ok') {
          this.getLogisticsStaffs();
          this.logisticsStaff = new NewUser();
        }
      });
  }

  toggleStatus(user: User) {
    if (user.status == 'Active') {
      this.usersService.blockLogisticsStaff(user).subscribe((res) => {
        if (res.status.toLowerCase() == 'ok') {
          this.getLogisticsStaffs();
        }
      });
    } else {
      this.usersService.unblockLogisticsStaff(user).subscribe((res) => {
        if (res.status.toLowerCase() == 'ok') {
          this.getLogisticsStaffs();
        }
      });
    }
  }
}
