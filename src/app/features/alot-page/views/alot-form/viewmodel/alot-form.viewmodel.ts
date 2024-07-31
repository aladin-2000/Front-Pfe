import { map, Observable } from "rxjs";
import { AlotService } from "../../../../../core/services/alot.service";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class AlotFormViewModel {
    constructor(private alotService: AlotService) { }
    listOfCreatedWallets(): Observable<{ data: any[]; columns: string[] }> { 
        return this.alotService.listOfCreatedWallets().pipe(
            map((data: any[]) => {
                let columns: string[] = [];
                if (data.length > 0) {
                  columns = Object.keys(data[0]);
                }
                const updatedData=data.map(item=>({...item,isSelected:false}))
                return { data:updatedData, columns };
              })
            );
}}