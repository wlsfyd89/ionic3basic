import { Component } from '@angular/core';

/**
 * Generated class for the ChildComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'child',
  templateUrl: 'child.html'
})
export class ChildComponent {

  constructor() {
  }

  // 부모 컴포넌트가 자식 컴포넌트의 뷰를 감추거나 보이기 위해 직접 접근할 프로퍼티.
  isShow = true;
  contentText = 'Child';

  // 부모 컴포넌트가 자식 컴포넌트의 contentText 프로퍼티를 변경하기 위해 직접 접근할 메소드
  changeText(text: string) {
    this.contentText = text;
  }


}
