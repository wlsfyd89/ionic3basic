import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

   // private students: {name: string, age: number, address: string}[] = [
    private students: iStudent[] = [
      {name: 'HongGilDong', age: 20, address: 'Seoul'},
      {name: 'IlJimea', age: 25, address: 'Busan'},
      {name: 'ImGGekJung', age: 30, address: 'InChen'},
      {name: 'NolBu', age: 50, address: 'Seoul'},
      {name: 'HungBu', age: 40, address: 'Seoul'},
  ]

  private name: string = 'HongGilDong';
  private kor: number = 80;
  private eng: number = 95;
  private total: number;

  public gender:string = 'male';
  public grade: string= 'null';
  

  private hong: {id: number, address: string} = {
      id: 20,
      address: 'Seoul'
  }

  private onTotal(): number{
      this.total = this.kor / this.eng;
      return this.total;
  }

  private onAvg(): number{
      return this.total / 2;
  }

  private change() {
    
    this.name = "홍길동";
  }

  // Event는 모든 event의 부모 타입
  private onChange(evt: Event): void{
      console.log(evt);
      // this.name = evt.target.value;
      let elem:HTMLInputElement = evt.target as HTMLInputElement;
      this.name = elem.value;
  }

 

}

interface iStudent{
  name: string;
  age: number;
  address: string;
}