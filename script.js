
// Validación de campos y mensajes de error
const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const email = document.getElementById('email');
const errorNombre = document.getElementById('error-nombre');
const errorEdad = document.getElementById('error-edad');
const errorEmail = document.getElementById('error-email');

// Validación al perder foco
nombre.addEventListener('blur', function() {
    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio.';
    } else {
        errorNombre.textContent = '';
    }
});

edad.addEventListener('blur', function() {
    if (edad.value.trim() === '') {
        errorEdad.textContent = 'La Edad es obligatoria.';
    } else {
        errorEdad.textContent = '';
    }
});

email.addEventListener('blur', function() {
    if (email.value.trim() === '') {
        errorEmail.textContent = 'El email es obligatorio.';
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errorEmail.textContent = 'Ingrese un email válido.';
    } else {
        errorEmail.textContent = '';
    }
});

document.addEventListener('DOMContentLoaded', function() {
	   // Botón Enviar
	   document.getElementById('fanpage').addEventListener('click', function(e) {
		   e.preventDefault();
		   const nombre = document.getElementById('nombre').value.trim();
		   const edad = document.getElementById('edad').value.trim();
		   const email = document.getElementById('email').value.trim();
		   const comentario = document.querySelector('textarea[name="comment"]').value.trim();
		   if (!nombre || !edad || !email || !comentario) {
			   alert('Por favor, complete todos los campos del formulario.');
		   } else {
			   alert('¡Formulario enviado con éxito!');
		   }
	   });

	   // Botón Borrar
	   document.getElementById('local').addEventListener('click', function(e) {
		   e.preventDefault();
		   document.getElementById('nombre').value = '';
		   document.getElementById('edad').value = '';
		   document.getElementById('email').value = '';
		   document.querySelector('textarea[name="comment"]').value = '';
	   });

		// Modo claro/oscuro con persistencia
		const darkBtn = document.getElementById('toggle-dark');
		const icon = darkBtn.querySelector('i');
		// Aplica el modo guardado al cargar
		if (localStorage.getItem('dark-mode') === 'enabled') {
			document.body.classList.add('dark-mode');
			icon.classList.remove('fa-moon-o');
			icon.classList.add('fa-sun-o');
		} else {
			document.body.classList.remove('dark-mode');
			icon.classList.remove('fa-sun-o');
			icon.classList.add('fa-moon-o');
		}
		darkBtn.addEventListener('click', function() {
			document.body.classList.toggle('dark-mode');
			if(document.body.classList.contains('dark-mode')) {
				icon.classList.remove('fa-moon-o');
				icon.classList.add('fa-sun-o');
				localStorage.setItem('dark-mode', 'enabled');
			} else {
				icon.classList.remove('fa-sun-o');
				icon.classList.add('fa-moon-o');
				localStorage.setItem('dark-mode', 'disabled');
			}
		});
		
});
