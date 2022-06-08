import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Osiguranik } from '../model/osiguranik';
import { Osiguranje } from '../model/osiguranje';
import { OsiguranikService } from '../service/osiguranik.service';
import { OsiguranjeService } from '../service/osiguranje.service';
import * as moment from 'moment';

@Component({
  selector: 'app-osiguranje',
  templateUrl: './osiguranje.component.html',
  styleUrls: ['./osiguranje.component.css']
})
export class OsiguranjeComponent implements OnInit {

  constructor(private osiguranjeSerice : OsiguranjeService, private osiguranikService : OsiguranikService) {
    this.osiguranjeSerice.getAll().subscribe(x =>{
      this.osiguranja = x;
    });
    this.osiguranikService.getAll().subscribe(x =>{
      this.osiguranici = x;
    })
   }

  osiguranja : Osiguranje[] = [];
  osiguranici : Osiguranik[] = [];
  

  forma = new FormGroup({
    "id" : new FormControl(null),
    "idOsiguranika" : new FormControl(null),
    "brojPolise" : new FormControl(null, [Validators.required]),
    "naziv" : new FormControl(null, [Validators.required]),
    "kamata" : new FormControl(null, [Validators.required]),
    "cena" : new FormControl(null),
    "orocenje" : new FormControl(null, [Validators.required])

  })
  ngOnInit(): void {
  }

  dodaj(){
    if(this.forma.valid){
      if(this.forma.value["id"] == null){
        this.osiguranjeSerice.create(this.forma.value).subscribe(_ =>{
          this.osiguranjeSerice.getAll().subscribe(novaOsiguranja =>{
            this.osiguranja = novaOsiguranja;
          })
        }); 
      }
      else {
        if(this.forma.valid){
          this.osiguranjeSerice.update(this.forma.value.id , this.forma.value).subscribe(_ =>{
            this.osiguranjeSerice.getAll().subscribe(novaOsiguranja =>{
              this.osiguranja = novaOsiguranja;
              this.forma.reset();
            })
          })  
        }
      }
    }
  }

  odaberiZaIzmenu(osiguranje : Osiguranje){
    this.forma.patchValue(osiguranje);
  }

  obrisi(id : number){
    this.osiguranjeSerice.delete(id).subscribe(_ =>{
      this.osiguranjeSerice.getAll().subscribe(novaOsiguranja =>{
        this.osiguranja = novaOsiguranja;
      });
    })
  }

}
