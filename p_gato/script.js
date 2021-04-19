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
tl.to(".boton",{duration:0, y:40});
tl.to(".felicitaciones",{duration:0,opacity:0, scale:0,x:0, y:-250}); //pocision inicial de mensaje



var overlapThreshold = "70%"; //Area minima aceptada

function ganar(){  //Funcion que es llamada para compara si las figuras ya estan en su lugar
  document.getElementById('Nbuenas').innerHTML="Buenas: "+conteo; //
  if (conteo === 7){
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
    tl.to(".figNull",{duration:0, fill:"#9a99ff"}); //todas las figuras inamovibles regresan a tener su color principal
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
    tl.to(".figNull",{duration:0,fill:"#dfdfdf"});  //la figura pasa a ser de color gris
    tl.to(".figAyuda",{duration:0, x:0, y:0, opacity:1, scale:1}) //la figura de ayuda (la que se mueve sola) comienza su reccorio
      .to(".figAyuda",{duration:1, x:241})
      .to(".figAyuda",{duration:1, y:34});
    bandera_ayuda=1;
    document.getElementById("ayuda").innerHTML="Volver";
  }else if (bandera_ayuda == 1){
    tl.to(".fig",{duration:0, opacity:1, scale:1, x:0, y:0,rotation:0});
    tl.to(".figNull",{duration:0,fill:"#9a99ff"});
    tl.to(".figAyuda",{duration:0, opacity:0, scale:0, rotation:0});
    bandera_ayuda=0;
    document.getElementById("ayuda").innerHTML="Ayuda";
    document.getElementById('Nbuenas').innerHTML=".";
  }
})
//-------------------Funciones que mueven las figuras con el mouse
//------------------------------------------------------

/*Mover el triangulo rojo 1*/
Draggable.create("#TriangleRed1", {            
  type: "x,y",                              //tipo de movimiento
  onDrag:function(e){                       //funcion que es llamada tras detecta un click del mouse a la figura
    tl.to(this.target, {duration: 0, rotation:0});
  },
  onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento
    if (this.hitTest("#TriangleRed1Null", overlapThreshold)){  //si detecta que esta sobre su espacio correspondiente
      tl.to(this.target, {duration: 0, opacity:0, scale:0}); //borra la figura
      tl.to("#TriangleRed1Null", {duration: 0, fill:"#ff0000"}); //la figura gris pasa a tener un color
      conteo++; //el conteo de las figuras puestos en su lugar incrementaa
      ganar(); //checa si las figuras ya estan een su lugar
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); //regresa a su lugar de origen
    }
  }
});

/*Mover el triangulo rojo 2 */
Draggable.create("#TriangleRed2",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:0})
  },
  onRelease:function(e){
    if(this.hitTest("#TriangleRed2Null", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#TriangleRed2Null", {duration: 0, fill:"#ff0000"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el triangulo rosado */
Draggable.create("#TrianglePink",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:0})
  },
  onRelease:function(e){
    if(this.hitTest("#TrianglePinkNull", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#TrianglePinkNull", {duration: 0, fill:"#ff00ff"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el tringulo verde 1*/
Draggable.create("#TriangleGreen1",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:0})
  },
  onRelease:function(e){
    if(this.hitTest("#TriangleGreen1Null", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#TriangleGreen1Null", {duration: 0, fill:"#007f00"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
    }
  }
});

/*Mover el triangulo verde 2 */
Draggable.create("#TriangleGreen2",{
  type:"x,y",
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:0})
  },
  onRelease:function(e){
    if(this.hitTest("#TriangleGreen2Null", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#TriangleGreen2Null", {duration: 0, fill:"#007f00"}); 
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
  onDrag:function(e){
    tl.to(this.target, {duration:0, rotation:0})
  },
  onRelease:function(e){
    if(this.hitTest("#SquareNull", overlapThreshold)){
      tl.to(this.target, {duration: 0, opacity:0, scale:0});
      tl.to("#SquareNull", {duration: 0, fill:"#4c00ff"}); 
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
      tl.to("#RomboNull", {duration: 0, fill:"#ffcc00"}); 
      conteo++;
      ganar();
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0}); 
    }
  }
});

/*
Draggable.create(TriangleRed1, {            
  type: "x,y",                              //tipo de movimiento
  onDrag:function(e){                       //funcion que es llamada tras detecta un click del mouse
    tl.to(this.target, {duration: 0, rotation:45}); //El triangulo gira 45 grados
  },
  onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento
    if (this.hitTest(TriangleRed1Null, overlapThreshold)){  //si detecta que esta sobre su espacio correspondiente
      tl.to(this.target, {duration: 0, opacity:0, scale:0}); //borra el triangulo rojo 1
      conteo++;
      tl.to(TriangleRed1Null, {duration: 0, fill:"#ffff00"}); //El triangulo gris pasa a tener un color
    }else {
    TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); //regresa a su lugar de origen
    }
  }
}); 
*/