import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { BottomComponent } from './bottom/bottom.component';
import { FilterByTabPipe } from './filter-by-tab.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    ItemComponent,
    BottomComponent,
    FilterByTabPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
