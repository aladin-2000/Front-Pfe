import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Wallet } from '../../entity/wallet';
import { WalletGroup } from '../../entity/walletGroup';

@Injectable({
  providedIn: 'root'
})
export class AlotService {

  private BaseURL="http://localhost:8080/admin/AWlot/"


  constructor(private http:HttpClient) { }

  GetPortefeuilles():Observable<Wallet[]>
  {
    return this.http.get<Wallet[]>(this.BaseURL+"alor_aidprtr_valuesList_01Service2");
  }

//// =================> begin    Wallet Table 

  Select_initial_wallet_group():Observable<WalletGroup[]>
  {
    return this.http.get<WalletGroup[]>(this.BaseURL+"initial-wallet-group");
  }

  Select_last_wallet_group():Observable<WalletGroup[]>
  {
    return this.http.get<WalletGroup[]>(this.BaseURL+"last-wallet-group");
  }




  Select_initial_wallet():Observable<Wallet[]>
  {
    return this.http.get<Wallet[]>(this.BaseURL+"initial-wallet");
  }


  Select_last_wallet():Observable<Wallet[]>
  {
    return this.http.get<Wallet[]>(this.BaseURL+"last_wallet");
  }


//// =================> Fin    Wallet Table 



}
