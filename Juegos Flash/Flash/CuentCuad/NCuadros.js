gsap.to('.fondoGanar',{duration: 0, opacity: 0});

var fondo = document.getElementById('youWin');


//Variables
areaAbarcada = "30%";
var cuadro = [];
var paloma = [];

var linea = gsap.timeline();
var numero = "";

ocultar();

cuadro["1"] = ["amarillo1"];
cuadro["2"] = ["rojo2"];
cuadro["3"] = ["AzulC3","morado3"];
cuadro["4"] = ["Azul4","verde4"];

paloma["amarillo1"] = ["Paloma4", 0];
paloma["rojo2"] = ["Paloma2", 0];
paloma["AzulC3"] = ["Paloma6", 0];
paloma["morado3"] = ["Paloma3", 0];
paloma["Azul4"] = ["Paloma1", 0];
paloma["verde4"] = ["Paloma5", 0];
var Puntaje1 = document.getElementById("PuntajeJuego1");
var nbuenas1 = 0;


Draggable.create( ".numero", {                //Asignamos la clase de las fichas para movelos         
    type: "x,y",                              //tipo de movimiento
    bounds:".svg1",                             //las fichas no pueden salir desde su espacio
                    
    onPress:function(e){                  //funcion que es llamada tras detecta un click del mouse a la figura
        numero = this.target.attributes['data-num'].value;  //guardamos el numero
        console.log(numero);
    },

    onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento 
        let nombreCuadro;       //Guarda el nombre del cuadro
        let bandera = 0;        //Bandera que se actiba si un numero esta en el lugar correcto 
        
        // checa si el numero esta en uno de los cuadros correctos
        if( this.hitTest("."+cuadro[numero][0], areaAbarcada)){
            nombreCuadro = cuadro[numero][0]
            bandera = 1;
            
        }
        else if ( cuadro[numero].length == 2 && this.hitTest("."+cuadro[numero][1], areaAbarcada)){
            nombreCuadro = cuadro[numero][1]
            bandera = 1;
        }
        
        if(bandera == 1 && paloma[nombreCuadro][1] == 0){
            paloma[nombreCuadro][1] = 1;
            console.log(nombreCuadro);
            console.log("." + paloma[nombreCuadro]);

            //aparece el numero y la paloma
            linea.to("." + paloma[nombreCuadro][0], {duration:0, opacity:1,  scale:1});
            linea.to("." + nombreCuadro, {duration:0, opacity:1, scale:1});
            linea.to(this.target,{duration:0, opacity:0, scale:0});

            nbuenas1++
            Puntaje1.innerHTML="Buenas: " + nbuenas1;
            if (nbuenas1 >= 6){
                fondo.classList.remove("back"); 
                fondo.classList.add("front"); 
                gsap.to('.fondoGanar',{duration: 0, opacity: 1});

                //Para el cronometro
                banderaActiva2 = false;
                parar();
                reiniciar();
            }
        }
        TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
        
    }
});

function ocultar(){
    linea.to(".amarillo1",{duration:0, opacity:0, scale:0 })
    .to(".rojo2",{duration:0, opacity:0, scale:0 })
    .to(".morado3",{duration:0, opacity:0, scale:0 })
    .to(".AzulC3",{duration:0, opacity:0, scale:0 })
    .to(".Azul4",{duration:0, opacity:0, scale:0 })
    .to(".verde4",{duration:0, opacity:0, scale:0 })

    .to(".Paloma1",{duration:0, opacity:0, scale:0 })
    .to(".Paloma2",{duration:0, opacity:0, scale:0 })
    .to(".Paloma3",{duration:0, opacity:0, scale:0 })
    .to(".Paloma4",{duration:0, opacity:0, scale:0 })
    .to(".Paloma5",{duration:0, opacity:0, scale:0 })
    .to(".Paloma6",{duration:0, opacity:0, scale:0 })
    ;
}




















//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------ColorearCuadros----------------------------------------------
//------------------------------------------------------------------------------------------------------------------

//declaramos las variables
var cuadros = [];
cuadros["amarillo"] = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10","A11","A12","A13","A14","A15","A16","A17","A18","A19","A20","A21"];
cuadros["rojo"] = ["R1","R2","R3","R4","R5","R6"];
cuadros["verde"] = ["V1","V2","V3","V4"];
cuadros["morado"] = ["M1","M2","M3","M4","M5"];
cuadros["celeste"] = ["Ac1","Ac2","Ac3","Ac4","Ac5"];
cuadros["azul"] = ["AB1","AB2","AB3","AB4"];

var nbandera = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var areaAbarcada2 = '51%';
var id;     //!guarda el id, importante
var color;

var Puntaje2 = document.getElementById("PuntajeJuego2");
var nbuenas2 = 0;

var draggable = new Draggable.create( ".Mover", {                //Asignamos la clase de las fichas para movelos         
    type: "x,y",                              //tipo de movimiento
    bounds:".svg2",                             //las fichas no pueden salir desde su espacio
                    
    onPress:function(e){                  //funcion que es llamada tras detecta un click del mouse a la figura
        
        id = this.target.attributes['id'].value;             //Recibimos el Id del la ficha
        color = this.target.attributes['fill'].value;

    },

    onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento s
        let i = 0;
        let valorCuadro;
        let num;

        console.log(this)
        
        while( i<cuadros[id].length){
            if (this.hitTest("#"+cuadros[id][i], areaAbarcada2)){

                valorCuadro = document.getElementById(cuadros[id][i]);
                num = parseInt(valorCuadro.attributes['data-cuador'].value);

                if (nbandera[num] == 0) {
                    nbandera[num] = 1
                    gsap.to("#"+cuadros[id][i],{duration:0, fill:color})
                    nbuenas2++
                    Puntaje2.innerHTML="Buenas: " + nbuenas2;

                    if (nbuenas2 == 45){
                        fondo.classList.remove("back"); 
                        fondo.classList.add("front"); 
                        gsap.to('.fondoGanar',{duration: 0, opacity: 1});

                        //Para el cronometro
                        banderaActiva2 = false;
                        parar();
                        reiniciar();
                    }
                }
                
            }
            i++;
        }

        TweenMax.to(this.target,0,{x:0,y:0}); 
    }
});

























//------------------------------------------------------------------------------------------------------------------
//Reiniciar el juego
//------------------------------------------------------------------------------------------------------------------

var reiniciarJuego = document.querySelector("#reiniciarJuego");
reiniciarJuego.onclick = () => {
    
    //if(nbuenas1 == 6){      // Primer juego


        let fichasJuego1 = ["amarillo1","rojo2","AzulC3","morado3","Azul4","verde4"];
        let circulos = ["num1","num2","num3-1","num3-2","num4-1","num4-2"];

        let i=0
        while (i<fichasJuego1.length)
        {

            paloma[fichasJuego1[i]][1] = 0;

            linea.to("." + paloma[fichasJuego1[i]][0], {duration:0, opacity:0,  scale:0});
            linea.to("." + fichasJuego1[i], {duration:0, opacity:0, scale:0});
            linea.to('#' + circulos[i],{duration:0, opacity:1, scale:1});

            i++;
        }

    
    //} else{                 //segundo Juego
        let cuadrosColor = ['amarillo','rojo','verde','morado','celeste','azul']
        let j = 0;
        let k;
        while( j < cuadrosColor.length ){
            k=0;
            while( k < cuadros[cuadrosColor[j]].length){
                gsap.to("#"+cuadros[cuadrosColor[j]][k],{duration:0, fill:'#ffe0a3'});    
                k++;
            }
            j++;
        }
        j=0;
        while( j<nbandera.length){
            nbandera[j] = 0;
            j++;
        }
   // }
    
    nbuenas1 = 0;
    nbuenas2 = 0;
    fondo.classList.remove("front"); 
    fondo.classList.add("back"); 
    gsap.to('.fondoGanar',{duration: 0, opacity: 0});
    Puntaje1.innerHTML="Buenas: "
    Puntaje2.innerHTML="Buenas: "

}





















//-----------------------------Cronometro-----------------------------
//inicio de las variables
var start = document.querySelector("#Inicio");
var stops = document.querySelector("#Alto");
var resume = document.querySelector("#Reset");

var banderaActiva = false;
var banderaActiva2 = false;

var pantalla = document.getElementById("crono");
var m,s,ms,idCrono;

window.onload = iniciar_cronometro;     //pone el cronometro en 0

//----------------Cronometro
function iniciar_cronometro(){
    m = 0;s = 0;ms = 0;
    pantalla.innerHTML="00:00:00";
}

function cronometrar(){
    escribir();
    idCrono = setInterval(escribir,10);
}

function escribir(){

    let mAux, sAux, msAux;
    ms++;
    if (ms>99){s++;ms=0;}
    if (s>59){m++;s=0;}
    if (m>59){m=0;}

    if (ms<10){msAux="0"+ms;}else{msAux=ms;}
    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}

    pantalla.innerHTML =  mAux + ":" + sAux + ":" + msAux; 
}

function parar(){
    clearInterval(idCrono);
}

function reiniciar(){
    clearInterval(idCrono);
    pantalla.innerHTML="00:00:00";
    m=0;s=0;ms= 0;
}

//----------------------Detecta los botones--------
start.onclick = () => {
    if(!banderaActiva2) {

        banderaActiva2 = true;
        banderaActiva = true;
        iniciar_cronometro();
        cronometrar();
    }
    else if(!banderaActiva){
/*
        document.getElementById('amarillo').classList.add('Mover');
        document.getElementById('verde').classList.add('Mover');
        document.getElementById('celeste').classList.add('Mover');
        document.getElementById('azul').classList.add('Mover');
        document.getElementById('morado').classList.add('Mover');
        document.getElementById('rojo').classList.add('Mover');
*/
        draggable[0].enable();
        draggable[1].enable();
        draggable[2].enable();
        draggable[3].enable();
        draggable[4].enable();
        draggable[5].enable();
        cronometrar();
        banderaActiva = true
    }
}
//-------- no se si poner estos botones o no
stops.onclick = () => {
    
    if(banderaActiva){
/*
        document.getElementById('amarillo').classList.remove('Mover');
        document.getElementById('verde').classList.remove('Mover');
        document.getElementById('celeste').classList.remove('Mover');
        document.getElementById('azul').classList.remove('Mover');
        document.getElementById('morado').classList.remove('Mover');
        document.getElementById('rojo').classList.remove('Mover');
*/
        draggable[0].disable();
        draggable[1].disable();
        draggable[2].disable();
        draggable[3].disable();
        draggable[4].disable();
        draggable[5].disable();

        
        console.log(draggable);
        banderaActiva = false;
        parar();
    }
    
}

resume.onclick = () => {
    if(banderaActiva2){
        banderaActiva2 = false;
        parar();
        reiniciar();
    } 
}