import { NgModule } from '@angular/core';
import { StarsComponent } from './stars/stars';
import { ChildComponent } from './child/child';
import { IonratingComponent } from './ionrating/ionrating';
@NgModule({
	declarations: [StarsComponent,
    ChildComponent,
    IonratingComponent],
	imports: [],
	exports: [StarsComponent,
    ChildComponent,
    IonratingComponent]
})
export class ComponentsModule {}
