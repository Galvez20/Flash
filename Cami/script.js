/*Ver https://www.greensock.com/draggable/ y https://greensock.com/docs/v3/GSAP para más detalles */

//Variables
var conteo = 0; // llevaa el conteo de las figuras que estan en su lugar
var bandera_ayuda = 0; 
/**
 * Bandera 0 -> juego normal
 * Bandera 1 -> modo ayuda
 * Bandera 2 -> figura completada
 */

var tl = gsap.timeline(); //Linea de tiempo
tl.to(".figAyuda",{duration:0, opacity:0, scale:0}); //pone transparente la figura de ayuda
tl.to(".felicitaciones",{duration:0,opacity:0, scale:0,x:150, y:-250}); //pocision inicial de mensaje


var overlapThreshold = "70%"; //Area minima aceptada

function ganar(){  //Funcion que es llamada para compara si las figuras ya estan en su lugar
  document.getElementById('Nbuenas').innerHTML="Buenas: "+conteo; // imprime el numero de buenas
  if (conteo === 7){ 
    console.log("LISTO");
    bandera_ayuda = 2; //activa la bandera
    tl.to(".svg",{duration:1, x:-300}) //mueve la figura completada
    .to(".felicitaciones",{duration:0,opacity:1, scale:1}); //mensaje de felicitar
  }
}

//Funciones que detectan los botones
document.getElementById("reinicio").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Reinicio"
  if(bandera_ayuda==0 || bandera_ayuda ==2){
    tl.to(".fig", {duration:0, x:0, y:0, rotation:0, opacity:1, scale:1 }); //todas las figuras movibles regresan a su posicion
    tl.to(".figNull",{duration:0, fill:"#a3c4a7"}); //todas las figuras inamovibles regresan a tener su color principal
    tl.to(".svg",{duration:0, x:0}); //en el caso de que la figura fuera completada, volveria a su lugar de origen
    tl.to(".felicitaciones",{duration:0,opacity:0, scale:0});  
    conteo = 0;
    bandera_ayuda=0; 
    document.getElementById('Nbuenas').innerHTML=".";
  }
});

document.getElementById("ayuda").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Ayuda"
  if(bandera_ayuda==0){  
    conteo = 0;
    document.getElementById('Nbuenas').innerHTML=".";
    tl.to(".fig",{duration:0, opacity:0, scale:0});  //las figuras pasan a ser invisibles
    tl.to(".figNull",{duration:0,fill:"#dfdfdf"});  //la figura pasa a ser de color gris
    tl.to(".figAyuda",{duration:0, x:0, y:0, opacity:1, scale:1}) //la figura de ayuda (la que se mueve sola) comienza su reccorio
      .to(".figAyuda",{duration:1.2, rotation:45})
      .to(".figAyuda",{duration:1, x:444})
      .to(".figAyuda",{duration:1, y:-33});
    bandera_ayuda=1;
    document.getElementById("ayuda").innerHTML="Volver"; //camvia el mensaje de "Ayuda" a "Volver"
  }else if (bandera_ayuda == 1){ //si esta en modo ayuda
    tl.to(".fig",{duration:0, opacity:1, scale:1, x:0, y:0,rotation:0}); //regresa las figuras en su lugar y su opacidad
    tl.to(".figNull",{duration:0,fill:"#a3c4a7"}); 
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
    tl.to(this.target, {duration: 0, rotation:45}); //El triangulo gira 45 grados
  },
  onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento
    if (this.hitTest("#BigTriangleNull1", overlapThreshold)){  //si detecta que esta sobre su espacio correspondiente
      tl.to(this.target, {duration: 0, opacity:0, scale:0}); //borra el triangulo grande Amarillo
      tl.to("#BigTriangleNull1", {duration: 0, fill:"#ffff00"}); //El triangulo gris pasa a tener un color
      conteo++; //el conteo de las figuras puestos en su lugar incrementaa
      ganar(); //checa si las figuras ya estan een su lugar
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); //regresa a su lugar de origen
    }
  }
});

/*Mover el triangulo grande Rojo */

Draggable.create("#BigTriangle2",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:-90})
  },
  onRelease:function(e){
    if(this.hitTest("#BigTriangleNull2", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#BigTriangleNull2", {duration: 0, fill:"#ff0000"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el triangulo mediano azul */
Draggable.create("#MediumTriangle",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:-45})
  },
  onRelease:function(e){
    if(this.hitTest("#MediumTriangleNull", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#MediumTriangleNull", {duration: 0, fill:"#106fce"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el tringulo pequeño verde */
Draggable.create("#SmallTriangle1",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:0})
  },
  onRelease:function(e){
    if(this.hitTest("#SmallTriangleNull1", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SmallTriangleNull1", {duration: 0, fill:"#00db42"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el triangulo pequeño morado */
Draggable.create("#SmallTriangle2",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:0})
  },
  onRelease:function(e){
    if(this.hitTest("#SmallTriangleNull2", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SmallTriangleNull2", {duration: 0, fill:"#bf10cc"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*mover el cuadrardo naranja*/
Draggable.create("#Square",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:45})
  },
  onRelease:function(e){
    if(this.hitTest("#SquareNull", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SquareNull", {duration: 0, fill:"#ff7f00"}); 
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
  onDrag:function(e){
    tl.to(this.target, {duration:0})
  },
  onRelease:function(e){
    if(this.hitTest("#RomboNull", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#RomboNull", {duration: 0, fill:"#ff007f"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0}); 
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
    if (this.hitTest("#BigTriangleNull1", overlapThreshold)){  //si detecta que esta sobre su espacio correspondiente
      tl.to(this.target, {duration: 0, opacity:0, scale:0}); //borra el triangulo grande Amarillo
      conteo++;
      tl.to("#BigTriangleNull1", {duration: 0, fill:"#ffff00"}); //El triangulo gris pasa a tener un color
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); //regresa a su lugar de origen
    }
  }
}); 
*/