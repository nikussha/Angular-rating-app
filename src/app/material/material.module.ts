import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const materialComponents = [MatIconModule, MatButtonModule];
@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule {}
