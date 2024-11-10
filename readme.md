# crear mi encuesta para recolectar  datos
- cree mi encuesta para asi poder manejar una base de datos, para poder manejar el ingreso de personal de seguridad.
- asi se ve en la pagina wed:

![imagen_2024-11-09_202151670](https://github.com/user-attachments/assets/9b2e4255-ef96-4be6-b6e9-34511b834e84)

# A MI BUTTON LE CREE UNA FUNCION:
- en mi button submit le  cree una funcion que me permita recolectar los datos de la encuesta y poder almacenar:

document.getElementById('form-user').addEventListener("submit",function (tareo){
    tareo.preventDefault()
    const fecha = document.getElementById('fecha').value;
    const turno = document.getElementById('turno').value;
    const unidad = document.getElementById('unidad').value;
    const avpentrante = document.getElementById('avpentrante').value;
    createcard(fecha,turno,unidad,avpentrante)
})

# CREO UNA FUNCION PARA QUE SE ENVIE LO RECOLECTADO A UN HTML:

    function createcard(fecha,turno,unidad,avpentrante){
        const element = `
                <article class="card">
            <header class="card-header">
                <span class="card-fecha">${fecha}</span>
                <span class="card-turno">${turno}</span>
                <span class="card-unidad">${unidad}</span>
                <span class="card-turno">${avpentrante}</span>
            </header>
        </article>
        `
        users.innerHTML += element
    }

# TENIENDO COMO RESULTADO:

![imagen_2024-11-09_203256761](https://github.com/user-attachments/assets/9330f0f7-a916-4a23-8959-382926ddddab)

