import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(
    public route: Router
  ) {}

  login(){
    this.route.navigateByUrl('')
  }

  registrar(){
    alert("hola")
    console.log(this.email)
    console.log(this.password)
  }

  private obtenerListaUsuarios(): any[] {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');
    return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
  }

  enviarDatosRegistro(event: Event) {
    event.preventDefault;
    // Verifica si todos los campos están llenos
    if (
      this.email &&
      this.password
    ) {
      // Crea un nuevo usuario
      const nuevoUsuario = {
        email: this.email,
        password: this.password,
      };

      
  
      console.log('Nuevo Usuario:', nuevoUsuario);
  
      // Obtiene la lista actual de usuarios
      const listaUsuarios = this.obtenerListaUsuarios();
  
      // Agrega el nuevo usuario a la lista
      listaUsuarios.push(nuevoUsuario);
  
      // Guarda la lista actualizada en el localStorage
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
  
      // Muestra un mensaje de registro exitoso
      this.mensaje = 'Registro exitoso';
      setTimeout(() => {
        this.route.navigateByUrl('');;
      }, 2000);
    } else {
      // Muestra un mensaje de error y no realiza la acción de registro
      this.mensaje = 'Error: Todos los campos deben estar llenos para registrar';
    }
  }
}
