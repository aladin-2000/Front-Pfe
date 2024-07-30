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

//// ==========================Wallet Table=============> begin
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
    return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"initial-wallet",
      {"p01_alod_azgrpf_t":"'9911'"});
  }
  Select_last_wallet(body:any):Observable<Array<Array<Map<string,any>>>>
  {
    return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"last-wallet",
      {"p01_alod_azgrpf_t":"'9911'","p02_alod_azprtf_t":"'576'","p03_alod_azprtf_t":"'589'"});
  }
//// =================Wallet Table=======================> Fin  





// ==============================WalletRef========================> 
show_All_WalletRef(body:any):Observable<Array<Array<Map<string,any>>>>
{
  return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"alor_aidprtr_valuesList_01Service2",{"p01_alot_aidlot":"SS"});  
}
select_WalletRef(body:any):Observable<Array<Array<Map<string,any>>>>
{
  return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"alod0plec_05Service2",{"p02_alor_aidprtr":"0001001"});  
}
// ==============================WalletRef=========================> 

// ============================Visualisation=========================> 
visualiser(body:any):Observable<Array<Array<Map<string,any>>>>
{
  return this.http.get<Array<Array<Map<string,any>>>>(this.BaseURL+"alot_del_01Service1");  
}
// ============================Visualisation=========================> 


// ========================table lot de lot=========================> begin
listerLesLots(body:any):Observable<Array<Array<Map<string,any>>>> // ValueList
{
  return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"alol_azdlott_valuesList_01Service2" , {"p01_alot_aidlot":"'lotsko'"});  
}

addLot(body:any):Observable<Array<Array<Map<string,any>>>> // retourne des portefeuilles qui appartient au lot 
{
   this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"alod0plec_03Service4" , {"p01_typtra":"'M'" , "p02_alot_aidlot":"'SS'" , "p03_alot_azdlot":"'MERIEML'"});
   return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"alod0plec_02Service3" , {
    "p01_alot_aidlot" : "'SS'",
    "p02_alot_azdlot" : "'MERIEML'"
  });  
}
supprimerLot(body:any):Observable<Array<Array<Map<string,any>>>> { // retourne le status
  return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"acdlott_verif_01Service3" , {"aidlot":"'SS'" , "acdlott":"'MERIEML'"});

}
// ========================table lot de lot=========================> End

// ===================================> WalletRef
showAllWalletRef(body:any):Observable<Array<Array<Map<string,any>>>>
{
  return this.http.post<Array<Array<Map<string,any>>>>(this.BaseURL+"alor_aidprtr_valuesList_01Service2",{"p01_alot_aidlot":"SS"});  
}
// ===================================> WalletRef

// Services ===========================>      Le 23/07/2024


listOfCreatedWallets() : Observable<Array<Array<Map<string,any>>>>{
  return  this.http.get<Array<Array<Map<string,any>>>>(this.BaseURL+"ListOfCreatedWallets");
}









}
