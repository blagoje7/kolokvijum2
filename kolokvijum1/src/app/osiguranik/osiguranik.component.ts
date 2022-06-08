import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Osiguranik } from '../model/osiguranik';
import { OsiguranikService } from '../service/osiguranik.service';

@Component({
  selector: 'app-osiguranik',
  templateUrl: './osiguranik.component.html',
  styleUrls: ['./osiguranik.component.css']
})
export class OsiguranikComponent implements OnInit {

  constructor(private osiguranikService : OsiguranikService) {
    this.osiguranikService.getAll().subscribe(noviOsiguranici =>{
      this.osiguranici = noviOsiguranici;
    })
   }

  osiguranici : Osiguranik[] = [];

  forma = new FormGroup({
    "id" : new FormControl(null),
    "ime" : new FormControl(null, [Validators.required]),
    "prezime" : new FormControl(null, [Validators.required]),
    "datumRodjenja" : new FormControl(null),
    "uklonjen" : new FormControl(false)
  
  })

  ngOnInit(): void {

  }

  dodaj(){
    if(this.forma.valid){
      var idOsiguranika = this.forma.value.idOsiguranika;
      console.log(idOsiguranika);
      if(this.forma.value["id"] == null){
        this.osiguranikService.create(this.forma.value).subscribe(_ =>{
          this.osiguranikService.getAll().subscribe(noviOsiguranici =>{
            this.osiguranici = noviOsiguranici;
          })
        }); 
      }
      else {
        if(this.forma.valid){
          this.osiguranikService.update(this.forma.value.id , this.forma.value).subscribe(_ =>{
            this.osiguranikService.getAll().subscribe(noviOsiguranici =>{
              this.osiguranici = noviOsiguranici;
              this.forma.reset();
            })
          })  
        }
      }
    }
  }

  odaberiZaBrisanje(id : number){
    this.osiguranici[id].uklonjen = true;
    // this.namirnice[id].obrisana = true;
    this.osiguranikService.update(this.osiguranici[id].id, this.osiguranici[id]).subscribe(_ =>{
      this.osiguranikService.getAll().subscribe(x =>{
        this.osiguranici = x;
      })
    })
  }

  ukloniOsiguranika(n : number){
    this.osiguranikService.delete(n).subscribe(_=>{
      this.osiguranikService.getAll().subscribe(x =>{
        this.osiguranici = x;
      })
    });
  }

  vratiOsiguranika(id : number){
    this.osiguranici[id].uklonjen = false;
    // this.namirnice[id].obrisana = true;
    this.osiguranikService.update(this.osiguranici[id].id, this.osiguranici[id]).subscribe(_ =>{
      this.osiguranikService.getAll().subscribe(x =>{
        this.osiguranici = x;
      })
    })
  }

  odaberiZaIzmenu(osiguranik : Osiguranik){
    this.forma.patchValue(osiguranik);
  }

}
