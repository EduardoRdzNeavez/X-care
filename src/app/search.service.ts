import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';
import { ResponseType } from '@angular/http/src/enums';
import 'rxjs/add/operator/Observable';


@Injectable()
export class SearchService {
  private Ibrands = [];
  constructor(private _http: Http) { }
  private _endpoint = 'https://hackathonaccia18.herokuapp.com/marcas ';

  getData(): Observable <Ibrands[]>  {
    return this._http.get(this._endpoint).map(res => res.json());
  }
}

