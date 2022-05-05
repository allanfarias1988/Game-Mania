import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class UsuariosModule {
  public id!: number;
  public usuario!: string;
  public email!: string;
  public senha!: string;
}
