import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-santander-form',
  templateUrl: './santander-form.component.html',
  standalone: false,
  styleUrls: ['./santander-form.component.scss']
})
export class SantanderFormComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  titulo = 'Novo Usuário';

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = +paramId;
      this.titulo = 'Editar Usuário';
      this.usuarioService.buscarPorId(this.id).subscribe(usuario => {
        this.form.patchValue(usuario);
      });
    }
  }

  salvar() {
    if (this.id) {
      this.usuarioService.atualizar(this.id, this.form.value).subscribe(() => this.router.navigate(['/usuarios']));
    } else {
      this.usuarioService.salvar(this.form.value).subscribe(() => this.router.navigate(['/usuarios']));
    }
  }
}
