// arquivo controle-livros.service.ts
import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'One piece',
      resumo: 'A trama segue Monkey D. Luffy, um jovem que tem a ambição de se tornar o Rei dos Piratas - aquele que consegue todas as coisas do mundo. Para isso, ele precisa encontrar o One Piece, o tesouro lendário deixado por Gol D. Roger, primeiro rei da pirataria.',
      autores: ['Eichiro Oda'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Naruto',
      resumo: 'Um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.',
      autores: ['Masashi Kishimoto'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Dragon Ball',
      resumo: 'A historia de um garoto que explora o mundo em busca de sete esferas conhecidas como as Esferas do Dragão, que convocam um dragão que concede um desejo quando reunidas.',
      autores: ['Akira Toriyama'],
    },
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    var maxCodigo = Math.max(...this.livros.map((l) => l.codigo));
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    var indice = this.livros.findIndex((l) => l.codigo === codigo);
    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
  }
}
