const users = document.getElementById('cards-users')

document.getElementById('form-user').addEventListener("submit",function (tareo){
    tareo.preventDefault()
    const fecha = document.getElementById('fecha').value;
    const turno = document.getElementById('turno').value;
    const unidad = document.getElementById('unidad').value;
    const avpentrante = document.getElementById('avpentrante').value;
    createcard(fecha,turno,unidad,avpentrante)
    })

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