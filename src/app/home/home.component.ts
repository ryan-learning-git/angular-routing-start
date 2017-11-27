import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  amILoggedIn = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedInEmitter.subscribe(
      () => {
        this.amILoggedIn = this.authService.loggedIn;
      }
    );
  }


  loadServers() {
    // complex calculation etc
    this.router.navigate(['/servers']);
  }

  loadServer(id: number){
    // complex calculation etc
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
