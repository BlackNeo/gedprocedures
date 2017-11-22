import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private _getUrl = '/api/users';
  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

}
