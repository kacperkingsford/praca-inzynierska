import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-success-dialog',
  templateUrl: './logout-dialog-confirmation.component.html',
  styleUrls: ['./logout-dialog-confirmation.component.css']
})
export class LogoutDialogConfirmation implements OnInit {

  constructor(private authService: AuthenticationService, private snackBar: MatSnackBar, public router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login').then(() => {
        this.snackBar.open('Logged out successfully ✅', '', {
          duration: 5000, // 5s
        })
      }
    )
  }

}
