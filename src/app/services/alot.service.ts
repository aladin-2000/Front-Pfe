import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortefeuillePageComponent } from '../portefeuille-page/portefeuille-page.component';
import { Portefeuille } from '../entity/portefeuille';

@Injectable({
  providedIn: 'root'
})
export class AlotService {

  private BaseURL="http://localhost:8080/admin/AWlot/"


  constructor(private http:HttpClient) { }

  GetPortefeuilles():Observable<Portefeuille[]>
  {
    return this.http.get<Portefeuille[]>(this.BaseURL+"alor_aidprtr_valuesList_01Service2");
  }
}
