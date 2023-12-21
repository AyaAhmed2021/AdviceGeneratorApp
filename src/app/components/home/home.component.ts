import { Component } from '@angular/core';
import { GetAdviceService } from 'src/app/services/get-advice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'adviceGenerator-APP';
  header;
  advice;
  imageSrc: any;
  outerWidth: number;
  constructor(private getAdvice:GetAdviceService){}

  ngOnInit() {
    this.outerWidth = window.outerWidth;
    // console.log(this.outerWidth)
    if(this.outerWidth <=590){
      this.imageSrc = "../assets/images/pattern-divider-mobile.svg"
    }
    else {
      this.imageSrc = "../assets/images/pattern-divider-desktop.svg"

    }
    this.getAdvice.getAdvice().subscribe(res =>{
      // console.log(res)
      this.header =res["slip"]["id"]
      this.advice=res["slip"]["advice"]
    })
  }


}
