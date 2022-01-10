/*Ver https://www.greensock.com/draggable/ y https://greensock.com/docs/v3/GSAP para más detalles */

//Variables
var conteo = 0; // llevaa el conteo de las figuras que estan en su lugar
var bandera_ayuda = 0; 

var overlapThreshold = "70%"; //Area minima aceptada
/**
 * Bandera 0 -> juego normal
 * Bandera 1 -> modo ayuda
 * Bandera 2 -> figura completada
 */
var tl = gsap.timeline(); //Linea de tiempo
var t2 = gsap.timeline(); //linea de tiempo 2 (solo para el boton de ayuda)

t2 .to(".figAyuda",{duration:1.2, rotation:45})
   .to(".figAyuda",{duration:1, x:443, y:-33});
t2.pause();

tl.to(".figAyuda",{duration:0, opacity:0, scale:0})         //pone transparente la figura de ayuda
  .to(".felicitaciones",{duration:0,opacity:0, scale:0});   //Oculta el mensaje


//----------------------------------------------------

const figuras = [];

figuras["BigTriangle1"] = ["BigTriangleNull1",45];
figuras["BigTriangle2"] = ["BigTriangleNull2",-90] ;
figuras["MediumTriangle"] = ["MediumTriangleNull",-45];
figuras["SmallTriangle1"] = ["SmallTriangleNull1",0];
figuras["SmallTriangle2"] = ["SmallTriangleNull2",0];
figuras["Square"] = ["SquareNull",45];
figuras["Rombo"] = ["RomboNull",0];

var colo;
var FiguraId;


//----------------------------------------------------------------
//-------------------Funciones que mueven las figuras con el mouse
//----------------------------------------------------------------

Draggable.create( ".fig", {                //Asignamos la clase de las fichas para movelos         
   type: "x,y",  
   bounds:".svg",                         
  

   onPress:function(e){                  //funcion que es llamada tras detecta un click del mouse a la figura
      color = this.target.attributes['fill'].value;
      figurasId = this.target.attributes['id'].value;

      gsap.to(this.target,{duration:0, rotation:figuras[figurasId][1] });     //rotamos la figura
  },                
  onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento s
      if (this.hitTest("#" + figuras[figurasId][0], overlapThreshold)){  //si detecta que esta sobre su espacio correspondiente
         tl.to(this.target, {duration: 0, opacity:0, scale:0}); //borra el triangulo grande Amarillo
         tl.to("#" + figuras[figurasId][0], {duration: 0, fill: color}); //la figura cambiara de colo
          
         conteo++;         //el conteo de las figuras puestos en su lugar incrementaa
         document.getElementById('Nbuenas').innerHTML="Buenas: "+conteo; // imprime el numero de buenas

         if(conteo == 7) ganar();

      }
      TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); //regresa a su lugar de origen
        
  }
});


document.getElementById("boton").addEventListener("click",()=>{ //activa una funcion tras precionar el boton 
   if(bandera_ayuda==1){
      console.log("Modo normal");

      gsap.to(".figAyuda",{duration:0,  opacity:0, scale:0})

      t2.restart();
      t2.pause();

      tl.to(".fig", {duration:0, x:0, y:0, rotation:0, opacity:1, scale:1 }); //todas las figuras movibles regresan a su posicion
      tl.to(".figNull",{duration:0, fill:"#a3c4a7"}); //todas las figuras inamovibles regresan a tener su color principal
      tl.to(".figAyuda",{duration:0, opacity:0, scale:0, rotation:0}); // la figura de ayuda vuelve a us sitio
      tl.to(".layer",{duration:0, x:0}); //en el caso de que la figura fuera completada, volveria a su lugar de origen
      tl.to(".felicitaciones",{duration:0,opacity:0, scale:0});  
      conteo = 0;
      bandera_ayuda=0; 
      document.getElementById("boton").innerHTML="Ayuda"; //camvia el mensaje de "Ayuda" a "Volver"
      document.getElementById('Nbuenas').innerHTML=".";
  
      comenzarAnimacion();
    }
    else{  //ayuda 
      clearInterval(id);//Para la animacion de las letras
      textWrapper.innerHTML=".";
      posicion = 0;
      
      conteo = 0;
      console.log("Modo ayuda");
      document.getElementById('Nbuenas').innerHTML=".";
      tl.to(".fig",{duration:0, opacity:0, scale:0});  //las figuras pasan a ser invisibles
      tl.to(".figNull",{duration:0,fill:"#dfdfdf"});  //la figura pasa a ser de color gris
      gsap.to(".figAyuda",{duration:0, x:0, y:0, opacity:1, scale:1})
      t2.resume();
      bandera_ayuda=1;
      document.getElementById("boton").innerHTML="Volver"; //camvia el mensaje de "Ayuda" a "Volver"
    }
})


function ganar(){  //Funcion que es llamada para compara si las figuras ya estan en su lugar

    bandera_ayuda = 2; //activa la bandera
    tl.to(".layer",{duration:1, x:-300}) //mueve la figura completada
    .to(".felicitaciones",{duration:0,opacity:1, scale:1}); //mensaje de felicitar

    clearInterval(id); //termina el proceso
    textWrapper.innerHTML=".";

    document.getElementById("boton").outerHTML = ""; //elimina el boton

}

var textWrapper = document.querySelector('.instrucciones');
function animar(){
  anime.timeline()
  .add({
    targets: '.instrucciones .letter',
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: 400
  }).add({
    targets: '.instrucciones .letter',
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1400,
    delay: 400
  });
}

function iniciarAnimation(){
  textWrapper.innerHTML=instrucciones[posicion];
  posicion +=1;
  if (posicion > 3) {
    posicion = 0;
  }
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  animar()
}

function comenzarAnimacion(){
  iniciarAnimation();
  id =setInterval(()=>{
    textWrapper.innerHTML=instrucciones[posicion];
    posicion +=1;
    if (posicion > 3) {
      posicion = 0;
    }
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    animar();
  }
  ,3500);
}

let posicion = 0;
let instrucciones = ["has clic sobre las figuras de color del tangram",
                    "y arr\u00E1stralas hacia el caminante",
                    "cada vez que coloques una figura en el lugar correcto,",
                    "la figura cambiar\u00E1 de color y se quedar\u00E1  en su lugar"];
                    
                    
comenzarAnimacion()
