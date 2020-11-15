import {Character} from '../models/character'

export interface APIResponse {
    info:{
        count: number
        pages: number
        next: string
        prev: string
    },
    retults: Array<Character>

}
