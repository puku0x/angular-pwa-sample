import { NgModule } from '@angular/core';
import { MatToolbarModule, MatProgressBarModule } from '@angular/material';

// Modules
const modules = [
  MatToolbarModule,
  MatProgressBarModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: []
})
export class MaterialModule { }
