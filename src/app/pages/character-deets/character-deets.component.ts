import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import {ApiFetcherService} from 'src/app/services/api-fetcher.service';


@Component({
  selector: 'app-character-deets',
  templateUrl: './character-deets.component.html',
  styleUrls: ['./character-deets.component.scss']
})
export class CharacterDeetsComponent implements OnInit {

  character: Character = null;

  constructor(private apifetcher : ApiFetcherService, private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      this.getSingleCharacter(name);
      console.log(this.character);
    })
  }

  ngOnInit(): void {
  }

  getSingleCharacter(name: string){
    this.apifetcher.getSingleCharacter(name).then( response => {
      this.character = response.data;
    })
  }

}
