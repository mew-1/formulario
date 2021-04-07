const formulario=<HTMLFormElement> document.getElementById("formulario")
const botonLimpiar=<HTMLButtonElement> document.getElementById("limpiar")
const mensajito=<HTMLSpanElement> document.getElementById("mensaje")

formulario.addEventListener("submit",function(event:Event){
    console.log(formulario.elements);


   

    let rut2 = (<HTMLInputElement>formulario.elements.namedItem("rut")).value
    console.log(rut2)

    let i;
    let cont = 0;
    let cont2 = 0;
    let contAlert = 0;

    for(i=0;i<rut2.length;i++){
        if(rut2[i]=="."){
            cont = 1
        }
        if(rut2[i]=="-"){
            cont2 = cont2 +1;
        }
    }

    if(cont2!=1){
        contAlert = 1;
        alert("Escriba el rut con el guion digito verificador")
    }

    if (cont==1){
        contAlert = 1;
        alert("Escriba el rut sin puntos")
    }

    let telefono2 = (<HTMLInputElement>formulario.elements.namedItem("telefono")).value
    console.log(telefono2)

    if(telefono2.length!=9){
        contAlert = 1;
        alert("El telefono debe contener 9 digitos")
    }

    let lenguajes = (<RadioNodeList>formulario.elements.namedItem("casilla"))


    let arreglo: string[] = [];
    
    lenguajes.forEach(function(elemento:Node){
        const lenguajeInput = <HTMLInputElement> elemento;
        console.log(lenguajeInput)
        if(lenguajeInput.checked){
           arreglo.push(lenguajeInput.value) 
        }
    });

    if(arreglo.length<1){
        contAlert = 1
        alert("Seleccione al menos un lenguaje de programacion");
    }

    console.log(arreglo.length)


    let descripcion2 = (<HTMLInputElement>formulario.elements.namedItem("descripcion")).value
    console.log(descripcion2)
    
    if(descripcion2.length>300){
        contAlert = 1;
        alert("La descripcion debe tener maximo 300 caracteres")
    }



    if(contAlert==0){

        formulario.style.display="none";
        mensajito.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        mensajito.style.backgroundColor="blue"
        mensajito.style.color="white"
        
    }


    event.preventDefault();
});

botonLimpiar.addEventListener("click",function(event:Event){
console.log("Reseteado con exito");
formulario.reset();


event.preventDefault();
});



 

function forEach(arg0: () => void) {
    throw new Error("Function not implemented.");
}

