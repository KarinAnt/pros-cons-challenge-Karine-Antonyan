import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ProsConsComponent } from './components/pros-cons/pros-cons/pros-cons.component';
import { ListComponent } from './components/list/list/list.component';
import { NgxsModule } from '@ngxs/store';
import { ProsConsState } from './store/pros-cons.store';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProsConsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([ProsConsState]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
