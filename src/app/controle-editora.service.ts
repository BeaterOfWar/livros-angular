import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    {
      codEditora: 1,
      nome: 'Panini Comics',
    },
    {
      codEditora: 2,
      nome: 'Shueisha',
    },
    {
      codEditora: 3,
      nome: 'Conrad',
    },
  ];
  constructor() { }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : 'Editora não encontrada';
  }
}
