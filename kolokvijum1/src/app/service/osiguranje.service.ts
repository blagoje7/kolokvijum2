import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Osiguranje } from '../model/osiguranje';

@Injectable({
  providedIn: 'root'
})
export class OsiguranjeService {

  constructor(private httpClient : HttpClient) { }

  getAll(){
    return this.httpClient.get<Osiguranje[]>("http://localhost:3000/osiguranja")
  }

  get(id : number){
    return this.httpClient.get<Osiguranje>(`http://localhost:3000/osiguranja/${id}`)
  }

  create(osiguranje : Osiguranje){
    return this.httpClient.post(`http://localhost:3000/osiguranja`, osiguranje)
  }

  update(id : number, osiguranje : Osiguranje){
    return this.httpClient.put(`http://localhost:3000/osiguranja/${id}`, osiguranje)
  }

  delete(id : number){
    return this.httpClient.delete(`http://localhost:3000/osiguranja/${id}`)
  }
}
