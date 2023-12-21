import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAdviceService {

  root="https://api.adviceslip.com/advice"

  constructor(private http:HttpClient) { }

  getAdvice(){
    return this.http.get(this.root)
  }
}
