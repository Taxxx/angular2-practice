import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { TestComponentComponent } from './test-component/test-component.component';
import { MyPipePipe } from './my-pipe.pipe';
import { PageNotFoundComponent } from './pageNotFound/page.not.found.component';
import { InitComponent } from './init.component';

//directives
import { GigantDirective } from './directives/gigant.directive';
import { HighLightDirective } from './directives/highlight.directive';

//services
import { TicketService } from './services/ticket.service';

//ngrx
import { StoreModule } from '@ngrx/store';
import { CounterReducer } from './services/counter'

//routes
import { RouterModule, Routes} from '@angular/router';
import { APPROUTER } from './commons/router';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    TestComponentComponent,
    MyPipePipe,
    GigantDirective,
    HighLightDirective,
    PageNotFoundComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({counter: CounterReducer}),
    RouterModule.forRoot(APPROUTER)
  ],
  providers: [TicketService],
  bootstrap: [InitComponent]
})
export class AppModule { }
