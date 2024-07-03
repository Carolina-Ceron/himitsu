// creamos las constantes del formulario 
const formContac = document.getElementById("contactForm")
const fullName = document.getElementById("fullName")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const product = document.getElementById("producto")
const mesagge = document.getElementById("mesagge")

//creamos local storage 
let consults
if (localStorage.getItem('consults')) {
    consults = JSON.parse(localStorage.getItem('consults'))
} else {
    consults = []
}

//psuhear un objeto 
function addConsult(consult) {
    consults.push(consult)
    localStorage.setItem('consults', JSON.stringify(consults))
}


//agregamos un escuchador pal form
formContac.addEventListener('submit', function (event) {
    //prevenimos el envio automatico del form
    event.preventDefault()

    if (formContac.checkValidity()) { //el form esta listo para ser enviado
        
        Swal.fire({
            title: '¡Atención!',
            text: '¿Deses enviar la consulta?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const newConsult = { //si se valida correctamente creo mi objeto y lo pusheo 
                    fullName: fullName.value,
                    phone: phone.value,
                    email: email.value,
                    product: product.value,
                    mesagge: mesagge.value,
                    date: new Date().toISOString(),
                }
        
                addConsult(newConsult)
                formContac.reset();
            }
        });

    } else { // si no fue validado o dio error creamos una devolucion correspondiente
        console.log('Formulario error')
    }

})