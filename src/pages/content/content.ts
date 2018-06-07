import { Component,OnChanges, SimpleChanges, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChildComponent } from '../../components/child/child';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  rating:string;
  item:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rating = navParams.get('param');
    this.item = navParams.get('item');
    console.log("contents--->"+this.rating);
    console.log('Content Main Constructor');
  }

  starClicked(value){
    alert("ContentPage---starClicked value"+value);
    this.rating = value;
    console.log("Rated starClicked:", value);
  }

  onModelChange(value){
    alert("ContentPage---onModelChange value"+value);
    console.log("Rated onModelChange :", value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('Content Main ngOnChanges');
  }

  ngOnInit() {
      console.log('Content Main ngOnInit');
  }

  ngAfterContentInit() {
      console.log('Content Main ngAfterContentInit');
  }

  ngAfterContentChecked() {
      console.log('Content Main ngAfterContentChecked');
  }

  ngAfterViewInit() {
      console.log('Content Main ngAfterViewInit');
  }

  ngAfterViewChecked() {
      console.log('Content Main ngAfterViewChecked');
  }


  // myChild 프로퍼티에 자식 컴포넌트 ChildComponent의 인스턴스가 바인딩된다.
  @ViewChild(ChildComponent) myChild: ChildComponent;
  
  toggle() {
    // 자식 컴포넌트의 프로퍼티를 직접 변경할 수 있다.
    this.myChild.isShow = !this.myChild.isShow;
  }

  changeText() {
    // 자식 컴포넌트의 메소드를 직접 실행할 수 있다.
    this.myChild.changeText('Hello');
  }

}
