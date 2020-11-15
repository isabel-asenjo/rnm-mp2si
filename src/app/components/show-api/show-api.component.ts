import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import {ApiFetcherService} from 'src/app/services/api-fetcher.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-api',
  templateUrl: './show-api.component.html',
  styleUrls: ['./show-api.component.scss']
})
export class ShowApiComponent implements OnInit {
  characters: Array<Character> = [];
  singleChar: Character = null;

  constructor(private apifetcher : ApiFetcherService, private router: Router) { }
  filterChar = '';
  p: number = 1;

 
  ngOnInit(): void {
    this.getCharacters(this.p);
  }

  getCharacters(p: number): void {
    this.apifetcher.getCharacters(this.p).then(response => {
      this.characters = response.data.results;
      console.log('responses',response);
      console.log('characters',this.characters);
    }).catch(error => {

    })
  }


  showDeets(nombre: string): void{
    this.apifetcher.getSingleCharacter(nombre).then(response => {
      this.singleChar = response.data;
      this.router.navigate(['characters/:this.nombre']);
      return this.singleChar;
    })
    
  }


}
