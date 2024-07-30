import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Wallet } from '../models/wallet.model';

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

  Select_initial_wallet_group():Observable<Array<Array<Map<string,any>>>>
  {
    return this.http.get<Array<Array<Map<string,any>>>>(this.BaseURL+"initial-wallet-group"); // DONE
  }



  Select_last_wallet_group(body:any):Observable<Array<Array<Map<string,any>>>>
  {
    return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"last-wallet-group" , {"p01_alod_azgrpf_t":"'0003'","p02_alod_azprtf_t":"'0005'"});
  }




  Select_initial_wallet(body:any):Observable<Array<Array<Map<string,any>>>>
  {
    return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"initial-wallet",{"p01_alod_azgrpf_t":"'0003'"});
  }


  Select_last_wallet(body:any):Observable<Array<Array<Map<string,any>>>>
  {
    return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"last-wallet",{"p01_alod_azgrps_t":"'0073'","p02_alod_azgrpf_t":"'0022'","p03_alod_azprtf_t":"'002'"});
  }


//// =================> Fin    Wallet Table 



// Services ===========================>      Le 23/07/2024


CreateNewLot(aidlot : string) : Observable<Array<Array<Map<string,any>>>>{
  return  this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"alot0pexi_01Service2", aidlot);
}









}
