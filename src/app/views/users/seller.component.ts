import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/dtos/User';
import { NewUser } from 'src/app/dtos/NewUser';

@Component({
  templateUrl: 'seller.component.html',
})
export class SellerComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users?: User[];
  seller = new NewUser();

  ngOnInit() {
    this.getSellers();
  }

  getSellers() {
    this.usersService.getSellers().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.users = res.data;
      }
    });
  }

  addSeller() {
    this.usersService.addSeller(this.seller).subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.getSellers();
        this.seller = new NewUser();
      }
    });
  }

  toggleStatus(user: User) {
    if (user.status == 'Active') {
      this.usersService.blockSeller(user).subscribe((res) => {
        if (res.status.toLowerCase() == 'ok') {
          this.getSellers();
        }
      });
    } else {
      this.usersService.unblockSeller(user).subscribe((res) => {
        if (res.status.toLowerCase() == 'ok') {
          this.getSellers();
        }
      });
    }
  }
}
