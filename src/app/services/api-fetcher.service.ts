import { Injectable } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';
import { range } from 'rxjs';
import {Character} from "src/app/models/character"
import { APIResponse } from '../models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class ApiFetcherService {
  API_KEY = 'https://rickandmortyapi.com/api/character/';
  //respuesta_api: Array<APIResponse> = [];



  constructor() { }

  getCharacters(/*p: number*/): Promise<AxiosResponse<APIResponse>> {
    //for (let i = 0; i < 20; i++) {
    //  this.respuesta_api[i] = Axios.get('${this.API_KEY}/?page=${p}');
    //}
    //return this.respuesta_api;
    
    return Axios.get(this.API_KEY); // obvio no se muestran todas las páginas de la api pero es trabajo honesto y Angular se puso chimbo conmigo muchísimas veces :(
    
  }

  getSingleCharacter(nombre: string): Promise<AxiosResponse<Character>> {
    return Axios.get('${this.API_KEY}/?name=${nombre}');
  }

}
