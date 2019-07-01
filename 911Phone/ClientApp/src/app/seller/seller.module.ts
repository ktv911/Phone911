import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SellerHomeComponent } from "./home/seller-home.component";
import { SellerRoutingModule } from "./seller-routing.module";
import { SellerPanelComponent } from "./seller-panel/seller-panel.component";


@NgModule({
  declarations: [
    SellerHomeComponent,
    SellerPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SellerRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class SellerModule { }
