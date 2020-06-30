class personas{
	constructor(nombre, seccion, mail){
		this.nombre = nombre;
		this.seccion = seccion;
		this.mail = mail;	
	}
	toString(){
		return this.nombre + " - " + "Sección: " + this.seccion + " - " + this.mail;
	}
}

class compra{
	constructor(responsable, descripcion, monto, participantes, estado){
		this.numero = nuestroSistema.titulos.length+1;
		this.responsable = responsable;
		this.descripcion = descripcion;
		this.monto = monto;
		this.participantes = participantes;
		this.estado = estado;
	}
	toString(){
		return "responsable: " + this.responsable + "descripcion: " + this.descripcion + "monto: " + this.monto + "participantes: " + this.participantes + "estado: " + this.estado;
	}
}

class sistema{
    constructor(){
		this.listaRegistro = [];
    	this.titulos = [];
    }
	
	agregarLista(elemento){
		if (this.existeNombre(elemento.nombre)){
			alert("ya existe este nombre");
		}else{
			this.listaRegistro.push(elemento);
		}
	}
	
	
	existeNombre(nombre){
        let existe = false;
        for (let elem in this.listaRegistro){
            if (this.listaRegistro[elem].nombre.toUpperCase() == nombre.toUpperCase()){
                existe = true; 
            }
        }
        return existe;
    }
	
	darLista(){
		return this.listaRegistro;
	}
	
    agregarCompra(clave){
    	this.titulos.push(clave);
    }
	
	darCompra(){
		return titulos;
	}
/*
	ordenarNumero(orden1){
		let numeroOrd = this.titulos.slice();
		numeroOrd.sort(function comp(primero, segundo)	{
			if (orden1 > 0){
				return primero.numero - segundo.numero;
			}
		});		
		return numeroOrd;
	}

	ordenarPorNombre(orden){
		let nombreOrd = this.titulos.slice();
		nombreOrd.sort(function comp(primero, segundo)	{
			if (orden > 0){
				return primero.responsable - segundo.responsable;
			}
		});		
		return nombreOrd;
	}
	
	static compararNumero(primero, segundo){
        return primero.numero - segundo.numero;
    }
    
    static compararNombre(primero,segundo){
        let retorno=0;
        if(primero.nombre.toUpperCase() < segundo.nombre.toUpperCase()){
           retorno = -1;
        }

        if(primero.nombre.toUpperCase() > segundo.nombre.toUpperCase()){
            retorno = 1;
        }
        return retorno;
    }
	

	
	distribucionMonto(rango, monto){
		let tot = [];
		let max = 0;
		//nos agarra el maximo para saber hasta dnd iria.
		for (let i = 0; i < this.titulos.length; i++){
			if(this.titulos[i].monto > max){
				max = this.titulos[i].monto;
			}
		}
		let aux = ((Math.ceil(max/100))*100)-1;
		
		for (let j = 0; i <= aux; i++){
			tot.push(0);
		}
		for (let k = 2; k < titulos.length; k = k + 5){
			
		}
	}
	
	
	// que vaya de 0a99, 100a199, etc
	

	responsableDe(){
		for (let i=0; i < this.titulos.length; i++){
			if (){
			let resp = this.titulos[i].responsable;
			let mont = this.titulos[i].monto;
			}
		}
	}
	
*/
	
	buscarPalabras(palabras){
        let buscarP = this.titulos;
        let listaConPalabras = [];
        for(let i = 0; i < buscarP.length; i++){
                if(buscarP[i].descripcion.toUpperCase().includes(palabras)){
                    listaConPalabras.push(buscarP[i]);        
                }           
        }
        return listaConPalabras; 
    }
}
