import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapp';
  constructor(private http:HttpClient){}
  n:string=''
  ack:string=''
  city:string=''
  wind:string=''
  temp:number=0
  humid:string=''
  feelslike:string=''
  pressure:string=''
  img:string=''
  data:any
  get(){
    if(this.n==''){
        this.ack='Please enter city name!...'
    }
    else{
      this.ack=''
    this.http.get('http://api.weatherapi.com/v1/forecast.json?key=9fbe2b83c1114e64b7171434221610&q='+this.n+'&days=5&aqi=no&alerts=no').subscribe((result)=>{
      this.data=result
      console.log(this.data)
      this.wind=this.data['current'].wind_kph
      this.temp=this.data['current'].temp_c
      this.city=this.data['location'].name
      this.humid=this.data['current'].humidity
      this.feelslike=this.data['current'].feelslike_c
      this.pressure=this.data['current'].pressure_in
      this.img=this.data['current']['condition'].icon
      if(this.temp>=27){
        this.img='../assets/hot.jpg'

      }
      else{
        this.img='../assets/cold.jpg'
      }
      this.n=''
    })
  }
  }
} 

