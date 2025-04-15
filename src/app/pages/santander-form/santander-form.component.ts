import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

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
  carregando = false;
  erro?: string;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
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
      this.carregando = true;
      this.usuarioService.buscarPorId(this.id).subscribe({
        next: usuario => {
          this.form.patchValue(usuario);
          this.carregando = false;
        },
        error: err => {
          this.erro = 'Erro ao carregar usuário.';
          this.carregando = false;
        }
      });
    }
  }

  salvar() {
    if (this.form.invalid) return;

    const sucesso = () => {
      this.snackBar.open('Usuário salvo com sucesso!', '', {
        duration: 3000,
        panelClass: ['snackbar-sucesso']
       });
      this.router.navigate(['/usuarios']);
    };

    const erro = () => {
      this.snackBar.open('Erro ao salvar usuário. Tente novamente.', 'Fechar', { duration: 4000 });
    };

    this.carregando = true;

    if (this.id) {
      this.usuarioService.atualizar(this.id, this.form.value).subscribe({
        next: sucesso,
        error: erro,
        complete: () => this.carregando = false
      });
    } else {
      this.usuarioService.incluir(this.form.value).subscribe({
        next: sucesso,
        error: erro,
        complete: () => this.carregando = false
      });
    }
  }

  cancelar() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/usuarios']);
      }
    });
  }
}
