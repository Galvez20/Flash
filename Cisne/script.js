/*Ver https://www.greensock.com/draggable/ y https://greensock.com/docs/v3/GSAP para más detalles */

//Variables
var conteo = 0; // llevaa el conteo de las figuras que estan en su luz
var bandera_ayuda = 0; 
/**
 * Bandera 0 -> juego normal
 * Bandera 1 -> modo ayuda
 * Bandera 2 -> figura completada
 */
var tl = gsap.timeline(); //creamos una linea de tiempo para las animaciones
var t2 = gsap.timeline(); //linea de tiempo 2 (solo para el boton de ayuda)
tl.to(".figAyuda",{duration:0, opacity:0, scale:0})
  .to(".felicitaciones",{duration:0,opacity:0, scale:0,x:150, y:0}); //pocision inicial de mensaje

//Cambio de las instrucciones-------------------------------------

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


//----------------------------------------------------

var overlapThreshold = "70%"; //Area minima aceptada

function ganar(){  //Funcion que es llamada para compara si las figuras ya estan en su lugar
  document.getElementById('Nbuenas').innerHTML="Buenas: "+conteo; //
  if (conteo === 7){
    console.log("LISTO");
    bandera_ayuda = 2; //activa la bandera
    tl.to(".conteobuenas",{duration:0,opacity:0, scale:0})
    .to(".layer",{duration:1, x:-300}) //mueve la figura completada
    .to(".felicitaciones",{duration:0,opacity:1, scale:1}); //mensaje de felicitar
    clearInterval(id); //termina el proceso
    textWrapper.innerHTML=".";

    document.getElementById("boton").outerHTML = ""; //elimina el boton
  }
}

//Funciones que detectan el botones
document.getElementById("boton").addEventListener("click",()=>{ //activa una funcion tras precionar el boton 
  if(bandera_ayuda==1){
    console.log("Modo normal");
    tl.to(".fig", {duration:0, x:0, y:0, rotation:0, opacity:1, scale:1 }); //todas las figuras movibles regresan a su posicion
    tl.to(".figNull",{duration:0, fill:"#afafaf"}); //todas las figuras inamovibles regresan a tener su color principal
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
    t2.to(".figAyuda",{duration:0, x:0, y:0, opacity:1, scale:1}) //la figura de ayuda (la que se mueve sola) comienza su reccorio
      .to(".figAyuda",{duration:1, rotation:45})
      .to(".figAyuda",{duration:1, x:263, y:93});
    bandera_ayuda=1;
    document.getElementById("boton").innerHTML="Volver"; //camvia el mensaje de "Ayuda" a "Volver"
  }
})
//-------------------Funciones que mueven las figuras con el mouse
//------------------------------------------------------

/*Mover el triangulo grande Verde*/
Draggable.create("#BigTriangle1", {            
  type: "x,y",                              //tipo de movimiento
  bounds:"svg",
  onDrag:function(e){                       //funcion que es llamada tras detecta un click del mouse a la figura
    tl.to(this.target, {duration: 0}); //El triangulo gira 45 grados
  },
  onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento
    if (this.hitTest("#BigTriangleNull2", overlapThreshold)){  //si detecta que esta sobre su espacio correspondiente
      tl.to(this.target, {duration: 0, opacity:0, scale:0}); //borra el triangulo grande Verde
      tl.to("#BigTriangleNull2", {duration: 0, fill:"#0bed00"}); //El triangulo gris pasa a tener un color
      conteo++; //el conteo de las figuras puestos en su lugar incrementaa
      ganar(); //checa si las figuras ya estan een su lugar
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); //regresa a su lugar de origen
    }
  }
});

/*Mover el triangulo grande Azul */

Draggable.create("#BigTriangle2",{
  type:"x,y",
  bounds:"svg",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:90})
  },
  onRelease:function(e){
    if(this.hitTest("#BigTriangleNull1", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#BigTriangleNull1", {duration: 0, fill:"#0090ff"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el triangulo Mediano rosado */
Draggable.create("#MediumTriangle",{
  type:"x,y",
  bounds:"svg",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:45})
  },
  onRelease:function(e){
    if(this.hitTest("#MediumTriangleNull", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#MediumTriangleNull", {duration: 0, fill:"#f774ea"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el tringulo pequeño verdeAgua bajo */
Draggable.create("#SmallTriangle1",{
  type:"x,y",
  bounds:"svg",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:-135})
  },
  onRelease:function(e){
    if(this.hitTest("#SmallTriangleNull1", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SmallTriangleNull1", {duration: 0, fill:"#11c68d"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el triangulo pequeño Azul cielo */
Draggable.create("#SmallTriangle2",{
  type:"x,y",
  bounds:"svg",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:45})
  },
  onRelease:function(e){
    if(this.hitTest("#SmallTriangleNull2", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SmallTriangleNull2", {duration: 0, fill:"#55e8db"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*mover el cuadrardo*/
Draggable.create("#Square",{
  type:"x,y",
  bounds:"svg",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:45})
  },
  onRelease:function(e){
    if(this.hitTest("#SquareNull", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SquareNull", {duration: 0, fill:"#ff0000"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el Rombo */
Draggable.create("#Rombo",{
  type:"x,y",
  bounds:"svg",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:-45})
  },
  onRelease:function(e){
    if(this.hitTest("#RomboNull", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#RomboNull", {duration: 0, fill:"#f2f22b"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*
Draggable.create("#BigTriangle1", {            
  type: "x,y",                              //tipo de movimiento
  onDrag:function(e){                       //funcion que es llamada tras detecta un click del mouse
    tl.to(this.target, {duration: 0, rotation:45}); //El triangulo gira 45 grados
  },
  onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento
    if (this.hitTest(BigTriangleNull_1, overlapThreshold)){  //si detecta que esta sobre su espacio correspondiente
      tl.to(this.target, {duration: 0, opacity:0, scale:0}); //borra el triangulo grande Verde
      conteo++;
      tl.to(BigTriangleNull_1, {duration: 0, fill:"#ffff00"}); //El triangulo gris pasa a tener un color
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); //regresa a su lugar de origen
    }
  }
}); 
*/