import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ConsumerhomeComponent } from './consumerhome/consumerhome.component';
import { FarmerhomeComponent } from './farmerhome/farmerhome.component';
import { SellproductsComponent } from './sellproducts/sellproducts.component';

const routes: Routes = [
  {path:"", redirectTo: "aboutus", pathMatch: "full"},
  {path:"aboutus", component:AboutusComponent},
  {path:"instruction", component:InstructionComponent},
  {path:"contactus", component:ContactusComponent},
  {path:"consumerhome",component:ConsumerhomeComponent},
  {path:"farmerhome",component:FarmerhomeComponent},
  {path:"sellproducts",component:SellproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
