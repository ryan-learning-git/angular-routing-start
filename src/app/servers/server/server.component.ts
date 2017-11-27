import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Initialising server component');
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']); // initial default
    // then react
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log('passed params are ', params);
          const id: number = +params['id'];
          this.server = this.serversService.getServer(id);
        }
      );

  }

}
