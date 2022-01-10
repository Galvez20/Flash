
//leemos los numeros dentro del archivo
var NumDecimal = leerNumeros(leerArchivo("EjerciciosTextos/ejercicios_NumerosBabilonicos.txt"));
console.log(NumDecimal);

//imprimimos los numeros en la pagina
var idNumerosDecimal = ['Ejercicio1','Ejercicio2','Ejercicio3','Ejercicio4','Ejercicio5'];
let i = 0;
while( i != 5){
    document.getElementById(idNumerosDecimal[i]).innerHTML = NumDecimal[i];
    i++
}

/*---------------------------------------------------------------------------------------*/

var numProblema = [];


Draggable.create( ".numMov", {                //Asignamos la clase de las fichas para poder movelos         
    type: "x,y",                              //tipo de movimiento
    bounds:".cuerpo",                         //las fichas no pueden salir desde su espacio
    autoScroll:3,
    snap:function(e){
        console.log('click'); 
    },
    onDrag:function(e){                  //funcion que es llamada cuando una figura es movida

        this.update(0,1);
        id = this.target.attributes['id'].value;

        a = document.getElementById(id);
        a.classList.add("grap"); 

        console.log(id);
    },
    onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento
        console.log("dejado");


        let id,a;

        id = this.target.attributes['id'].value;

        a = document.getElementById(id);
        a.classList.remove("grap"); 
        TweenMax.to(this.target,0,{x:0,y:0}); //la ficha regresa a su lugar de origen
    }
});

