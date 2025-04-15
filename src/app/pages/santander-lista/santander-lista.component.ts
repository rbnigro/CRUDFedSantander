import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-santander-lista',
  templateUrl: './santander-lista.component.html',
  standalone: false,
  styleUrls: ['./santander-lista.component.scss']
})

export class SantanderListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  colunas: string[] = ['id', 'nome', 'email', 'acoes'];

  constructor(private usuarioService: UsuariosService) {}

   ngOnInit(): void {
     this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.listar().subscribe({
      next: data => this.usuarios = data,
      error: err => console.error('Erro ao carregar usuários:', err)
    });
  }

  deletar(id: number) {
    if (confirm('Deseja realmente excluir este usuário?')) {
      this.usuarioService.excluir(id).subscribe({
        next: () => {
          alert('Usuário excluído com sucesso!');
          this.carregarUsuarios();
        },
        error: err => {
          console.error('Erro ao excluir usuário:', err);
          alert('Erro ao excluir o usuário.');
        }
      });
    }
  }
}
