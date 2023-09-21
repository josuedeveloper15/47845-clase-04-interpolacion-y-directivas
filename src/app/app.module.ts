import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoundedBlockDirective } from './directives/rounded-block.directive';
import { DraggableDirective } from './directives/draggable.directive';

import { FormsModule } from '@angular/forms';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';

@NgModule({
  declarations: [AppComponent, RoundedBlockDirective, DraggableDirective, ListaDeUsuariosComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
