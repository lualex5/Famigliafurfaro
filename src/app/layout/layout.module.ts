import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, NavComponent, FooterComponent, RouterModule
  ],
  exports:[NavComponent, FooterComponent]
})
export class LayoutModule { }
