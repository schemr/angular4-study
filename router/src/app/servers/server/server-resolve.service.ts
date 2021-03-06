import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
import { ServersService } from '../servers.service';

interface Server{
    id: number,
    name: string,
    status: string,
}

@Injectable()

export class ServerResolver implements Resolve<Server>{
    constructor(private serversService: ServersService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server>| Promise<Server> | Server{
        return this.serversService.getServer(+route.params['id']);
    }
}