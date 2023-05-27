document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtiene los valores del formulario
    var phoneImfoee = '2381031983';
    var username =   document.getElementById('username').value;
    var lastname =   document.getElementById('lastname').value;
    var email =   document.getElementById('email').value;
    var phone =   document.getElementById('phone').value;
    var message =   document.getElementById('message').value;

    var finalMessage = `Buen día, mi nombre es ${username} ${lastname}\n\nMensaje: ${message}\n\nMi teléfono es: ${phone}\n\nMi correo es: ${email}`
    // Construye la URL para enviar el mensaje de WhatsApp
    var url = 'https://api.whatsapp.com/send?phone=' + phoneImfoee + '&text=' + encodeURIComponent(finalMessage);

    // Abre una nueva ventana o pestaña del navegador para enviar el mensaje
    window.open(url, '_blank');
});