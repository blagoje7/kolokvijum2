import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Osiguranik } from '../model/osiguranik';

@Injectable({
  providedIn: 'root'
})
export class OsiguranikService {

  constructor(private httpClient : HttpClient) { }

  getAll(){
    return this.httpClient.get<Osiguranik[]>("http://localhost:3000/osiguranici")
  }

  get(id : number){
    return this.httpClient.get<Osiguranik>(`http://localhost:3000/osiguranici/${id}`)
  }

  create(osiguranik : Osiguranik){
    return this.httpClient.post(`http://localhost:3000/osiguranici`, osiguranik)
  }

  update(id : number, osiguranik : Osiguranik){
    return this.httpClient.put(`http://localhost:3000/osiguranici/${id}`, osiguranik)
  }

  delete(id : number){
    return this.httpClient.delete(`http://localhost:3000/osiguranici/${id}`)
  }
}
