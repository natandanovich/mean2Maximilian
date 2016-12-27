import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

import {User} from "./user.model";

@Injectable()
export class AuthService {
    constructor(private http: Http){}

    signup(user: User){
        const body = JSON.stringify(user);
        const header = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user',body,{headers: header})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    signin(user: User){
        const body = JSON.stringify(user);
        const header = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/signin',body,{headers: header})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}