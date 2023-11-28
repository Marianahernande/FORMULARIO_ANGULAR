import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {
  
    nombreUsuario: string = '';
    password: string = '';
  
    mensaje: string = '';
  
    constructor(
      public route: Router
    ){}

    private obtenerListaUsuarios(): any[] {
      const listaUsuariosString = localStorage.getItem('listaUsuarios');
      return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
    }
    
    recuperar() {
      const listaUsuarios = this.obtenerListaUsuarios();
    
      // Busca el usuario en la lista
      const usuarioIndex = listaUsuarios.findIndex(listaUsuarios => listaUsuarios.email === this.nombreUsuario);
    
      if (usuarioIndex !== -1) {
        // Actualiza la contraseña del usuario
        listaUsuarios[usuarioIndex].password = this.password;
    
        // Guarda la lista actualizada en el localStorage
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    
        this.mensaje = 'Cambio de contraseña exitoso';
        setTimeout(() => {
          this.route.navigateByUrl('');
        }, 1000);
      } else {
        this.mensaje = 'El usuario no está registrado en el sistema, por favor regístrese';
      }
    }
}