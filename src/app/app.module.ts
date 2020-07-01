import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Data } from './view-model/data';
import { AboutComponent } from './about/about.component';
import { ServerService } from './server/server.service';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropDComponent } from './drop-d/drop-d.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DropDComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [Data,ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
