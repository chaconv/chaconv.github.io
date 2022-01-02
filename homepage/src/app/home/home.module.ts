import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home/home.component';
import { NavbarModule } from '../shared/components/navbar/navbar.module';
import { HeroModule } from '../shared/components/hero/hero.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // Components
    NavbarModule,
    HeroModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
