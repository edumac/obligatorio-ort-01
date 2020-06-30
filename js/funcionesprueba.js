window.addEventListener("load", comienzo);

let nuestroSistema = new sistema();

function comienzo(){
	document.getElementById("idButton1").addEventListener("click", visualizacion);
	document.getElementById("idNombre2").addEventListener("change", compararNombre);
	document.getElementById("idNumero").addEventListener("change", compararNumero);
	document.getElementById("idButton2").addEventListener("click", datosTabla);
	document.getElementById("idBotonReintegro").addEventListener("click", reintegroCompra);
	document.getElementById("idBotonConsultarTotales").addEventListener("click", consultarTotales);
	document.getElementById("idBotonConsultarCompras").addEventListener("click", consultarPalabra);
}

function visualizacion(){
	if (document.getElementById("idFormulario1").reportValidity()){
		let nombre = document.getElementById("idNombre").value;
		let seccion = document.getElementById("idSeccion").value;
		let mail = document.getElementById("idMail").value;
		let per = new personas(nombre,seccion,mail);
		nuestroSistema.agregarLista(per);
		document.getElementById("idFormulario1").reset();
		AgregarEnLista();
		HechaPor();
		Persona();
		correspondeA();
	}
}	

function AgregarEnLista(){
	let lista1 = document.getElementById("idLista1");
	lista1.innerHTML="";
	let datos = nuestroSistema.listaRegistro;
	for (let elemento of datos){
		let nodo = document.createElement("li");
		let nodoTexto = document.createTextNode(elemento);
		nodo.appendChild(nodoTexto);
		lista1.appendChild(nodo);
	}
}
	
function HechaPor(){
	let combo1 = document.getElementById("idHechapor");
	combo1.innerHTML="";
	let datos1 = nuestroSistema.listaRegistro;
	for(let elemento of datos1 ){
		let opcion = document.createElement("option");
		let nodoTexto1 = document.createTextNode(elemento.nombre);
		opcion.appendChild(nodoTexto1);
		combo1.appendChild(opcion);
	}
}

function Persona(){
	let combo2 = document.getElementById("idPersona");
	combo2.innerHTML="";
	let datos2 = nuestroSistema.listaRegistro;
	for(let elemento of datos2){
		let opcion1 = document.createElement("option");
		let nodoTexto2 = document.createTextNode(elemento.nombre);
		opcion1.appendChild(nodoTexto2);
		combo2.appendChild(opcion1);
	}
}

function correspondeA(){
	let contendor = document.getElementById("idDiv");
	contendor.innerHTML="";
	for(let elemento in nuestroSistema.listaRegistro){
		let nombreCheck = document.createElement("input");   
		nombreCheck.value = "checked";
		nombreCheck.type = "checkbox";
		nombreCheck.id = nuestroSistema.listaRegistro[elemento].nombre;
		nombreCheck.name = "corresponde";
		let labelNombre = document.createTextNode(nuestroSistema.listaRegistro[elemento].nombre);
		labelNombre.id = "nombreCheck";
		contendor.appendChild(nombreCheck);
		document.getElementById("idDiv").appendChild(labelNombre);
		let espacio = document.createElement("br");
		document.getElementById("idDiv").appendChild(espacio);
    }
}

function checked(){
	for(let elemC in nuestroSistema.listaRegistro){
		let mostrar = document.getElementById("nombreCheck");
		let largo = nuestroSistema.listaRegistro[elemC].nombre;
		//alert(mostrar);
		for(let i = 0;i < largo.length;i++){ 
			if(largo[i].checked){
				document.getElementById(nuestroSistema.listaRegistro[elemC].nombre).innerHTML = largo[i].value;
				//let mostrar1 = document.getElementById(nuestroSistema.listaRegistro[elemC].nombre).value;
				//alert(mostrar);
			}
        }
	}
}

function compararNombre(){
	let orden;
	let opciones = document.getElementsByName("orden");
	for (let elemO of opciones){
		if (elemO.checked){
			orden = parseInt(elemO.value);
		}
	}
	let tablaOrdenada = nuestroSistema.ordenarPorNombre(orden);
	ordenTabla(tablaOrdenada);
}

function compararNumero(){
	let orden1;
	let opciones1 = document.getElementsByName("orden");
	for (let elemO1 of opciones1){
		if (elemO1.checked){
			orden1 = parseInt(elemO1.value);
		}
	}
	let tablaOrdenada1 = nuestroSistema.ordenarNumero(orden1);
	ordenTabla(tablaOrdenada1);
}

function datosTabla(){
	if (document.getElementById("idFormulario2").reportValidity()){
		let responsable = document.getElementById("idHechapor").value;
        let descripcion = document.getElementById("idDescripcion").value;
        let monto = parseInt(document.getElementById("idMonto").value);
		let participantes = ""; 
		let estado = "pendiente";
		let compraNueva = new compra(responsable, descripcion, monto, participantes, estado);
		nuestroSistema.agregarCompra(compraNueva);
		document.getElementById("idFormulario2").reset();
		ordenTabla(nuestroSistema.titulos);
		cargarReintegro();
		checked();
	}
}

function ordenTabla(informacionTabla) {
	let tabla = document.getElementById("infoTabla");
	tabla.innerHTML = "";
	
	// let informacionTabla = nuestroSistema.titulos;

		
	for(let elemento of informacionTabla){
		let fila = tabla.insertRow();
        let c1 = fila.insertCell();
        c1.innerHTML = elemento.numero;
		
		let c2 = fila.insertCell();
        c2.innerHTML = elemento.responsable;
		
		let c3 = fila.insertCell();
        c3.innerHTML = elemento.descripcion;

        let c4 = fila.insertCell();
        c4.innerHTML = elemento.monto;
		
		let c5 = fila.insertCell();
        c5.innerHTML = elemento.participantes;
		
		let c6 = fila.insertCell();
        c6.innerHTML = elemento.estado;
		
	}
}
	
function cargarReintegro(){
	let combo3 = document.getElementById("idReintegro");
	combo3.innerHTML="";
	let datos3 = nuestroSistema.titulos;
	for(let elemento of datos3){
		let opcion2 = document.createElement("option");
		let nodoTexto3 = document.createTextNode(elemento.numero);
		opcion2.appendChild(nodoTexto3);
		combo3.appendChild(opcion2);
	}
}


/*
function reintegroCompra(){
	let cualReintegro = document.getElementById("idReintegro").value;
	for(let elemE in nuestroSistema.titulos){
		if(cualReintegro == nuestroSistema.titulos[elemE].numero){
			nuestroSistema.titulos[elemE].estado = "reintegrado";
			ordenTabla();
			eliminarCompra();
		}
	}
}
//falta eliminar el numero de la compra reintegrada

function eliminarCompra(){
	
	
	let aBorrar = document.getElementById("idReintegro");
	aBorrar.remove(aBorrar.selectedIndex);
}

*/


function reintegroCompra(){
	let cualReintegro = document.getElementById("idReintegro").value;
	for(let elemE in nuestroSistema.titulos){
		if(cualReintegro == nuestroSistema.titulos[elemE].numero){
			nuestroSistema.titulos[elemE].estado = "reintegrado";
			ordenTabla(nuestroSistema.titulos);
			eliminarCompra();
		}
	}
}
//falta eliminar el numero de la compra reintegrada

function eliminarCompra(){
	let aBorrar = document.getElementById("idReintegro");
	let valor = document.getElementById("idReintegro").value;
	aBorrar.remove(aBorrar.selectedIndex);
	let numeros =[];
	let total = nuestroSistema.titulos;
		for(let i=0; i<= total.length; i=i+5){
			numeros.push(total[i]);
			//alert(numeros);
		}
		numeros.pop(valor);
		//alert(numeros);
}



function consultarTotales(){
	let montoTotal = 0;
	let personaConsultar = document.getElementById("idPersona").value;
	for(let elem in nuestroSistema.titulos){
		let leerEstado = nuestroSistema.titulos[elem].estado;
		if(leerEstado == "pendiente"){
			if(personaConsultar == nuestroSistema.titulos[elem].responsable){
				montoTotal = montoTotal + nuestroSistema.titulos[elem].monto;
			}
		}
	}
	let totales = "Responsable de compras por $" + montoTotal;
	let campoTotales = document.getElementById("idCampoTotales2");
	campoTotales.innerHTML = totales;
}

function consultarPalabra(){
    if(document.getElementById("idFormulario5").reportValidity()){
        let lista2 = document.getElementById("idLista2");
        lista2.innerHTML = "";  
		let palabras = document.getElementById("idPalabra").value.toUpperCase();
		//palabras.setAttribute = ("id", "palabraBusco");
		//let elementosss = document.getElementById("palabraBusco");
		//elementosss.style.color = "red";
		let listaConPalabra = nuestroSistema.buscarPalabras(palabras);		
		
		for (let elemD of listaConPalabra){
			let nodo4 = document.createElement("li");
			let nodoTexto4 = document.createTextNode("Compra "+ elemD.numero + ": " + elemD.descripcion);
			nodo4.appendChild(nodoTexto4);
			lista2.appendChild(nodo4);
		}
		document.getElementById("idFormulario5").reset();
	}
}
