import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ],
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent
  ],
  providers: [],
})
export class GifsModule {
}