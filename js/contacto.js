document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var profile;
    var message = document.getElementById("message").value;

    try {
        // Intentar obtener el valor del perfil
        profile = document.getElementById("profile").value;
    } catch (error) {
        // Manejar el error si no se puede obtener el valor
        console.error("Error al obtener el perfil:", error.message);
        profile = "No se especificó";
    }

    // Crear el mensaje que se enviará por WhatsApp
    var whatsappMessage = "Nombre: " + name + "\n" +
                          "Email: " + email + "\n" +
                          "Perfil: " + profile + "\n" +
                          "Mensaje: " + message;

    // Codificar la URL correctamente
    var encodedMessage = encodeURIComponent(whatsappMessage);

    // Número de WhatsApp al que se enviará el mensaje
    var whatsappNumber = "5493512008852"; // Incluye el código de país

    // Crear la URL para abrir WhatsApp con el mensaje
    var whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + encodedMessage;

    console.log(whatsappURL)

    // Redirigir a la URL de WhatsApp
    window.open(whatsappURL, '_blank');
});
