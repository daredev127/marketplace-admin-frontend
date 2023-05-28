import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/dtos/User';
import { NewUser } from 'src/app/dtos/NewUser';

@Component({
  templateUrl: 'buyer.component.html',
})
export class BuyerComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users?: User[];
  buyer = new NewUser();

  ngOnInit() {
    this.getBuyers();
  }

  getBuyers() {
    this.usersService.getBuyers().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.users = res.data;
      }
    });
  }

  addBuyer() {
    this.usersService.addBuyer(this.buyer).subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.getBuyers();
        this.buyer = new NewUser();
      }
    });
  }

  toggleStatus(user: User) {
    if (user.status == 'Active') {
      this.usersService.blockBuyer(user).subscribe((res) => {
        if (res.status.toLowerCase() == 'ok') {
          this.getBuyers();
        }
      });
    } else {
      this.usersService.unblockBuyer(user).subscribe((res) => {
        if (res.status.toLowerCase() == 'ok') {
          this.getBuyers();
        }
      });
    }
  }
}
