import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Mod2Module } from './mod2.module';
import { Comp3Component } from './componentes/comp3/comp3.component';
import { Comp4Component } from './components/comp4/comp4.component';
import { Comp5Component } from './components/comp5/comp5.component';
import { Comp6propComponent } from './components/comp6prop/comp6prop.component';
import { Comp7TestComponent } from './components/comp7-test/comp7-test.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { CompDecoComponent } from './comp-deco/comp-deco.component';
import { CompbycompComponent } from './components/compbycomp/compbycomp.component';
import { ComplifehookComponent } from './components/complifehook/complifehook.component';
import { ComDir1Component } from './components/com-dir1/com-dir1.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6propComponent,
    Comp7TestComponent,
    OperacionesComponent,
    CompDecoComponent,
    CompbycompComponent,
    ComplifehookComponent,
    ComDir1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mod2Module,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
