import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountTreeService {

  private readonly accountingTree = 'AccountsIndex/BuildTree'
  private readonly accentingChild = 'AccountsIndex/GetByCode/'
  constructor(private http: HttpClient) { }

  getAccountsIndex() {
    const url: string = environment.apiURl + `${this.accountingTree}`;

    return this.http.get(url);
  }

  getAccounting(id: string) {
    const url: string = environment.apiURl + `${this.accentingChild + id}`;

    return this.http.get(url);
  }

}
