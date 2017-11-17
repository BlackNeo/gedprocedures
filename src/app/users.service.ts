import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  private _getUrl    = '/api/users';
  private _postUrl   = '/api/user';
  private _putUrl    = '/api/user/';
  private _deleteUrl = '/api/user/';

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }
}
