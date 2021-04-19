/*Ver https://www.greensock.com/draggable/ y https://greensock.com/docs/v3/GSAP para más detalles */

//Variables
var conteo = 0; // llevaa el conteo de las figuras que estan en su luz
var bandera_ayuda = 0; 
/**
 * Bandera 0 -> juego normal
 * Bandera 1 -> modo ayuda
 * Bandera 2 -> figura completada
 */

var tl = gsap.timeline();
tl.to(".figAyuda",{duration:0, opacity:0, scale:0});
tl.to(".felicitaciones",{duration:0,opacity:0, scale:0,x:-150, y:-250}); //pocision inicial de mensaje


var overlapThreshold = "70%"; //Area minima aceptada

function ganar(){  //Funcion que es llamada para compara si las figuras ya estan en su lugar
  document.getElementById('Nbuenas').innerHTML="Buenas: "+conteo; //
  if (conteo === 8){
    console.log("LISTO");
    bandera_ayuda = 2;
    tl.to(".svg",{duration:1, x:-300})
    .to(".felicitaciones",{duration:0,opacity:1, scale:1});
  }
}

//Funciones que detectan los botones
document.getElementById("reinicio").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Reinicio"
  if(bandera_ayuda==0 || bandera_ayuda ==2){
    tl.to(".fig", {duration:0, x:0, y:0, rotation:0, opacity:1, scale:1 }); //todas las figuras movibles regresan a su posicion
    tl.to(".figNull",{duration:0, fill:"#000000"}); //todas las figuras inamovibles regresan a tener su color principal
    tl.to(".svg",{duration:0, x:0}); //en el caso de que la figura fuera completada, volveria a su lugar de origen
    tl.to(".felicitaciones",{duration:0,opacity:0, scale:0}); 
    conteo = 0;
    bandera_ayuda=0; 
    document.getElementById('Nbuenas').innerHTML=".";
  }
});

document.getElementById("ayuda").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "A"
  if(bandera_ayuda==0){
    conteo = 0;
    document.getElementById('Nbuenas').innerHTML=".";
    tl.to(".fig",{duration:0, opacity:0, scale:0});  //las figuras pasan a ser invisibles
    tl.to(".figNull",{duration:0,fill:"#12e9ec"});  //la figura pasa a ser de color gris
    tl.to(".figAyuda",{duration:0, x:0, y:0, opacity:1, scale:1}) //la figura de ayuda (la que se mueve sola) comienza su reccorios
      .to(".figAyuda",{duration:1, x:255})
      .to(".figAyuda",{duration:1, y:-41});
    bandera_ayuda=1;
    document.getElementById("ayuda").innerHTML="Volver";
  }else if (bandera_ayuda == 1){
    tl.to(".fig",{duration:0, opacity:1, scale:1, x:0, y:0,rotation:0});
    tl.to(".figNull",{duration:0,fill:"#000000"});
    tl.to(".figAyuda",{duration:0, opacity:0, scale:0, rotation:0});
    bandera_ayuda=0;
    document.getElementById("ayuda").innerHTML="Ayuda";
    document.getElementById('Nbuenas').innerHTML=".";
  }
})
//-------------------Funciones que mueven las figuras con el mouse
//------------------------------------------------------

/*Mover el triangulo grande Amarillo*/
Draggable.create("#BigTriangle1", {            
  type: "x,y",                              //tipo de movimiento
  onDrag:function(e){                       //funcion que es llamada tras detecta un click del mouse a la figura
    tl.to(this.target, {duration: 0, rotation: 0}); //El triangulo gira 45 grados
  },
  onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento
    if (this.hitTest("#BigTriangle1Null", overlapThreshold)){  //si detecta que esta sobre su espacio correspondiente
      tl.to(this.target, {duration: 0, opacity:0, scale:0}); //borra el triangulo grande Amarillo
      tl.to("#BigTriangle1Null", {duration: 0, fill:"#f7da00"}); //El triangulo gris pasa a tener un color
      conteo++; //el conteo de las figuras puestos en su lugar incrementaa
      ganar(); //checa si las figuras ya estan een su lugar
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); //regresa a su lugar de origen
    }
  }
});

/*Mover el triangulo grande Amarillo claro */

Draggable.create("#BigTriangle2",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation: 0})
  },
  onRelease:function(e){
    if(this.hitTest("#BigTriangle2Null", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#BigTriangle2Null", {duration: 0, fill:"#fcf499"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el triangulo pequeño azul */
Draggable.create("#SmallTriangle1",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:0})
  },
  onRelease:function(e){
    if(this.hitTest("#SmallTriangle1Null", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SmallTriangle1Null", {duration: 0, fill:"#007fff"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el tringulo pequeño naranja 1*/
Draggable.create("#SmallTriangle2",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:0})
  },
  onRelease:function(e){
    if(this.hitTest("#SmallTriangle2Null", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SmallTriangle2Null", {duration: 0, fill:"#ff7f00"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el triangulo pequeño Rosa */
Draggable.create("#SmallTriangle3",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:0})
  },
  onRelease:function(e){
    if(this.hitTest("#SmallTriangle3Null", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SmallTriangle3Null", {duration: 0, fill:"#ff007f"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*mover el cuadrado rojo*/
Draggable.create("#Square",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:65})
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

/*Mover el Triangulo chico naranja 4*/
Draggable.create("#SmallTriangle4",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:-135})
  },
  onRelease:function(e){
    if(this.hitTest("#SmallTriangle4Null", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SmallTriangle4Null", {duration: 0, fill:"#ff7f00"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0,rotation:0}); 
    }
  }
});

/*Mover el rombo */
Draggable.create("#Rombo",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0})
  },
  onRelease:function(e){
    if(this.hitTest("#RomboNull", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#RomboNull", {duration: 0, fill:"#00ff00"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0}); 
    }
  }
});

/*
Draggable.create(BigTriangle1, {            
  type: "x,y",                              //tipo de movimiento
  onDrag:function(e){                       //funcion que es llamada tras detecta un click del mouse
    tl.to(this.target, {duration: 0, rotation:45}); //El triangulo gira 45 grados
  },
  onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento
    if (this.hitTest("#BigTriangle1Null", overlapThreshold)){  //si detecta que esta sobre su espacio correspondiente
      tl.to(this.target, {duration: 0, opacity:0, scale:0}); //borra el triangulo grande Amarillo
      conteo++;
      tl.to("#BigTriangle1Null", {duration: 0, fill:"#ffff00"}); //El triangulo gris pasa a tener un color
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); //regresa a su lugar de origen
    }
  }
}); 
*/