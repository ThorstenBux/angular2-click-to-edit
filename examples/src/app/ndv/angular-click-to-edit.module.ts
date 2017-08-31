import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';


import { NdvEditAreaComponent } from "./ndv.edit.area.component";
import { NdvEditComponent } from "./ndv.edit.component";
import { NdvEditDateComponent } from "./ndv.edit.date.component";
import { NdvEditDropComponent } from "./ndv.edit.drop.component";
import { NdvEditSelectComponent } from "./ndv.edit.select.component";
import { NdvEditTimeComponent } from "./ndv.edit.time.component";

@NgModule({
    declarations: [
        NdvEditAreaComponent,
        NdvEditComponent,
        NdvEditDateComponent,
        NdvEditSelectComponent,
        NdvEditDropComponent,
        NdvEditTimeComponent
      ],
      imports: [
        CommonModule, FormsModule
      ],
      exports: [
        NdvEditAreaComponent,
        NdvEditComponent,
        NdvEditDateComponent,
        NdvEditSelectComponent,
        NdvEditDropComponent,
        NdvEditTimeComponent       
    ]
})
export class AngularClickToEditModule {}