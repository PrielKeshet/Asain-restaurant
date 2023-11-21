import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestUtilsService {

  constructor(private http: HttpClient) { }

  GetData(url: string){
    return this.http.get<any[]>(url);
    }
    GetById(url: string, id: string){
      return this.http.get<any>(`${url}/${id}`);
      }

   AddItem(url: string, obj:any){
    return this.http.post(url,obj);
   }
    
}
