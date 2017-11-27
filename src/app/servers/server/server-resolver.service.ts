import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ServersService} from '../servers.service';
import {Injectable} from '@angular/core';

export interface Server {
  id: number,
  name: string,
  status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
    const serverID: number = +route.params['id'];
    return this.serversService.getServer(serverID);
  }


}
