
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

	       // Modo claro/oscuro
	       const darkBtn = document.getElementById('toggle-dark');
	       darkBtn.addEventListener('click', function() {
		       document.body.classList.toggle('dark-mode');
		       const icon = darkBtn.querySelector('i');
		       if(document.body.classList.contains('dark-mode')) {
			       icon.classList.remove('fa-moon-o');
			       icon.classList.add('fa-sun-o');
		       } else {
			       icon.classList.remove('fa-sun-o');
			       icon.classList.add('fa-moon-o');
		       }
	       });
});
