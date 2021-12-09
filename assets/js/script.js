/***************************************RADIOLOGIA***************************************************************************/

let radiologia = [{

    hora: "11:00",
    especialista: "Ignacio Schulz",
    paciente: "Francisca Rojas",
    rut: "9878782-1",
    prevision: "Fonasa"
}, {

    hora: "11:30",
    especialista: "Federico Subercaseaux",
    paciente: "Pamela Estrada",
    rut: "15345241-3",
    prevision: "Isapre"
}, {

    hora: "15:00",
    especialista: "Fernando Wurthz",
    paciente: "Armando Luna",
    rut: "16445145-9",
    prevision: "Isapre"
}, {
    hora: "15:30",
    especialista: "Ana Maria Godoy",
    paciente: "Manuel Godoy",
    rut: "17666419-0",
    prevision: "Fonasa"
}, {

    hora: "16:00",
    especialista: "Patricia Suazo",
    paciente: "Ramon Ulloa",
    rut: "14989389-k",
    prevision: "Isapre"
}];

// capturo la tabla
let tablaRadiologia = document.querySelector('#tablaRadiologia');
//Creo el cuerpo de la tabla
let cuerpoRadiologia = document.createElement('tbody');

//Recorro el array de traumatologia
for (radio of radiologia) {

    //creo la fila
    let fila = document.createElement('tr');

    //creo la columna -td-
    let columnaHora = document.createElement('td');
    //Le doy el valor de Hora a la columna -td- 
    columnaHora.innerHTML = radio.hora;
    //introduzco el valor a la primera columna de la fila
    fila.appendChild(columnaHora);

    //creo la columna -td-
    let colEspec = document.createElement('td');
    //Le doy el valor de Especialista a la columna -td- 
    colEspec.innerHTML = radio.especialista;
    //introduzco el valor a la segunda columna de la fila
    fila.appendChild(colEspec);

    //creo la columna -td-
    let colPaciente = document.createElement('td');
    //Le doy el valor de Paciente a la columna -td- 
    colPaciente.innerHTML = radio.paciente;
    //introduzco el valor a la tercera columna de la fila
    fila.appendChild(colPaciente);

    //creo la columna -td-
    let colRut = document.createElement('td');
    //Le doy el valor de Rut a la columna -td- 
    colRut.innerHTML = radio.rut;
    //introduzco el valor a la cuarta columna de la fila
    fila.appendChild(colRut);

    //creo la columna -td-
    let colPrev = document.createElement('td');
    //Le doy el valor de Hora a la columna -td- 
    colPrev.innerHTML = radio.prevision;
    //introduzco el valor a la quinta columna de la fila
    fila.appendChild(colPrev);

    //Agrego la fila a la fila
    cuerpoRadiologia.appendChild(fila);

}

//Agrego el cuerpo de la tabla -tbody- a la tabla
tablaRadiologia.appendChild(cuerpoRadiologia);

document.querySelector("#footRadio").innerHTML = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length-1].paciente} - ${radiologia[radiologia.length-1].prevision}`;



/***************************************TRAUMATOLOGIA*************************************************************************/

let traumatologia = [{

    hora: "8:00",
    especialista: "Maria Paz Altuzarra",
    paciente: "Paula Sanchez",
    rut: "15554774-5",
    prevision: "Fonasa"
}, {

    hora: "10:00",
    especialista: "Raul Araya",
    paciente: "Angélica Navas",
    rut: "15444147-9",
    prevision: "Isapre"
}, {

    hora: "10:30",
    especialista: "Maria Arriagada",
    paciente: "Ana Klapp",
    rut: "17879423-9",
    prevision: "Isapre"
}, {
    hora: "11:00",
    especialista: "Alejandro Badilla",
    paciente: "Felipe Mardones",
    rut: "1547423-6",
    prevision: "Isapre"
}, {

    hora: "11:30",
    especialista: "Cecilia Budnik",
    paciente: "Diego Marre",
    rut: "16554741-k",
    prevision: "Fonasa"
}, {

    hora: "12:00",
    especialista: "Arturo Cavagnaro",
    paciente: "Cecilia Mendez",
    rut: "9747535-8",
    prevision: "Isapre"
}, {

    hora: "12:30",
    especialista: "Andrés Kanacri",
    paciente: "Marcial Suazo",
    rut: "11254785-5",
    prevision: "Isapre"
}];

// capturo la tabla
let tablaTraumatologia = document.querySelector('#tablaTraumatologia');
//Creo el cuerpo de la tabla
let cuerpoTraumatologia = document.createElement('tbody');

//Recorro el array de traumatologia
for (trauma of traumatologia) {

    //creo la fila
    let fila = document.createElement('tr');

    //creo la columna -td-
    let columnaHora = document.createElement('td');
    //Le doy el valor de Hora a la columna -td- 
    columnaHora.innerHTML = trauma.hora;
    //introduzco el valor a la primera columna de la fila
    fila.appendChild(columnaHora);

    //creo la columna -td-
    let colEspec = document.createElement('td');
    //Le doy el valor de Especialista a la columna -td- 
    colEspec.innerHTML = trauma.especialista;
    //introduzco el valor a la segunda columna de la fila
    fila.appendChild(colEspec);

    //creo la columna -td-
    let colPaciente = document.createElement('td');
    //Le doy el valor de Paciente a la columna -td- 
    colPaciente.innerHTML = trauma.paciente;
    //introduzco el valor a la tercera columna de la fila
    fila.appendChild(colPaciente);

    //creo la columna -td-
    let colRut = document.createElement('td');
    //Le doy el valor de Rut a la columna -td- 
    colRut.innerHTML = trauma.rut;
    //introduzco el valor a la cuarta columna de la fila
    fila.appendChild(colRut);

    //creo la columna -td-
    let colPrev = document.createElement('td');
    //Le doy el valor de Hora a la columna -td- 
    colPrev.innerHTML = trauma.prevision;
    //introduzco el valor a la quinta columna de la fila
    fila.appendChild(colPrev);

    //Agrego la fila a la fila
    cuerpoTraumatologia.appendChild(fila);

}

//Agrego el cuerpo de la tabla -tbody- a la tabla
tablaTraumatologia.appendChild(cuerpoTraumatologia);

document.querySelector("#footTrauma").innerHTML = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length-1].paciente} - ${traumatologia[traumatologia.length-1].prevision}`;

/***************************************DENTAL*************************************************************************/


let dental = [{

    hora: "8:30",
    especialista: "Andrea Zuñiga",
    paciente: "Marcela Retamal",
    rut: "11123425-6",
    prevision: "Isapre"
}, {

    hora: "11:00",
    especialista: "Maria Paz Zañartu",
    paciente: "Angel Muñoz",
    rut: "9878789-2",
    prevision: "Isapre"
}, {

    hora: "11:30",
    especialista: "Scarlett Witting",
    paciente: "Mario Kast",
    rut: "7998789-5",
    prevision: "Fonasa"
}, {
    hora: "13:00",
    especialista: "Francisco Von Teuber",
    paciente: "Karin Fernandez",
    rut: "18887662-k",
    prevision: "Fonasa"
}, {

    hora: "13:30",
    especialista: "Eduardo Viñuela",
    paciente: "Hugo Sanchez",
    rut: "17665461-4",
    prevision: "Fonasa"
}, {

    hora: "14:00",
    especialista: "Raquel Villaseca",
    paciente: "Ana Sepulveda",
    rut: "14441281-0",
    prevision: "Isapre"
}];

// capturo la tabla
let tablaDental = document.querySelector('#tablaDental');
// //Creo el cuerpo de la tabla
let cuerpoDental = document.createElement('tbody');

//Recorro el array de traumatologia
for (dent of dental) {

    //creo la fila
    let fila = document.createElement('tr');

    //creo la columna -td-
    let columnaHora = document.createElement('td');
    //Le doy el valor de Hora a la columna -td- 
    columnaHora.innerHTML = dent.hora;
    //introduzco el valor a la primera columna de la fila
    fila.appendChild(columnaHora);

    //creo la columna -td-
    let colEspec = document.createElement('td');
    //Le doy el valor de Especialista a la columna -td- 
    colEspec.innerHTML = dent.especialista;
    //introduzco el valor a la segunda columna de la fila
    fila.appendChild(colEspec);

    //creo la columna -td-
    let colPaciente = document.createElement('td');
    //Le doy el valor de Paciente a la columna -td- 
    colPaciente.innerHTML = dent.paciente;
    //introduzco el valor a la tercera columna de la fila
    fila.appendChild(colPaciente);

    //creo la columna -td-
    let colRut = document.createElement('td');
    //Le doy el valor de Rut a la columna -td- 
    colRut.innerHTML = dent.rut;
    //introduzco el valor a la cuarta columna de la fila
    fila.appendChild(colRut);

    //creo la columna -td-
    let colPrev = document.createElement('td');
    //Le doy el valor de Hora a la columna -td- 
    colPrev.innerHTML = dent.prevision;
    //introduzco el valor a la quinta columna de la fila
    fila.appendChild(colPrev);

    //Agrego la fila a la fila
    cuerpoDental.appendChild(fila);

}

//Agrego el cuerpo de la tabla -tbody- a la tabla
tablaDental.appendChild(cuerpoDental);

document.querySelector("#footDental").innerHTML = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length-1].paciente} - ${dental[dental.length-1].prevision}`;