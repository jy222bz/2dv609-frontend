import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent {

  constructor(
    private usersService: UsersService,
  ) {
    console.log('users')
    this.test()
  }

  test() {
    this.usersService.get({
      pageIndex: 0,
      pageSize: 50
    }).subscribe(
      (next) => {
        console.log(next);
      }
    )
  }

}


