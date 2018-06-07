//start.ts
import { Component,Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'stars', 
  templateUrl: 'stars.html'  
})
export class StarsComponent {

  @Input() numStars: number = 5;
	@Input() readOnly: boolean = true;
	@Input() value: number = 5;

	@Output() clicked: EventEmitter<number> = new EventEmitter<number>();

	stars: string[] = [];

  ngAfterViewInit(){
    this.calc();
  }

  calc(){
    setTimeout(() => {
      this.stars = [];
      let tmp = this.value;
      for(let i=0; i < this.numStars; i++, tmp--)
        if(tmp >= 1)
          this.stars.push("star");
        else if (tmp < 1 && tmp > 0)
          this.stars.push("star-half");
        else
          this.stars.push("star-outline");
    }, 0) ;
  }

  starClicked(index){
  	if(!this.readOnly) {
		  this.value = index + 1;
		  this.calc();
		  this.clicked.emit(this.value);
	  }
  }


  constructor(){
    console.log('stars child Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('stars child ngOnChanges');
  }

  ngOnInit () {       
    console.log('stars child ngOnInit');
  }  

  ngAfterContentInit() {
    console.log('stars child ngAfterContentInit');
  }

  ngAfterContentChecked() {
      console.log('stars child ngAfterContentChecked');
  }

  // ngAfterViewInit() {
  //     console.log('stars child ngAfterViewInit');
  // }

  ngAfterViewChecked() {
      console.log('stars child ngAfterViewChecked');
  }

}

