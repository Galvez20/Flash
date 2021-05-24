/*Ver https://www.greensock.com/draggable/ y https://greensock.com/docs/v3/GSAP para más detalles */

//variables


let tl = gsap.timeline(); //Preparamos la linea de tiempo
let tJ = gsap.timeline();
let nombreFiguraas;
let instrunccion1 = "Observa como a partir de un rectangulo se forman las figuras de abajo.";
let instrunccion2 = "Has click en cada uno de ellas y veras el ejemplo."

//pociciones principales

tl.to(".fig",{duration:0,opacity:0,scale:0}); //las figuras se vuelven transparentes
//tl.to("#trapecio",{duration:0,x:500,y:-330}); //coloca los botones en su lugar
//tl.to("#romboide",{duration:0,x:0,y:-220});
//tl.to("#rectangulo",{duration:0,x:0,y:-110});
tl.to("#volver",{duration:0,opacity:0,scale:0}); //el voton de "volver" desaparece


//deteccion de botones:
document.getElementById("trapecio").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Trapecio"
    /* acomodamos las figuras */
    document.getElementById("ins_1").innerHTML="";
    document.getElementById("ins_2").innerHTML="Trapecio";

    nombreFiguraas = document.getElementById("ins_2");
    nombreFiguraas.classList.add("nombreFig");
    tl.to(".fig",{duration:0,opacity:1,scale:1}); //las figuras son vicibles
    tl.to("#trapecio",{duration:0,opacity:0,scale:0});  //los botones se vuelven tranparentes
    tl.to("#romboide",{duration:0,opacity:0,scale:0});
    tl.to("#rectangulo",{duration:0,opacity:0,scale:0});
    tl.to("#volver",{duration:0,opacity:1,scale:1}); //el boton de volver aparece

    /*Comiensa a mover las figuras para armar un trapecio*/
    tl.to("#BigTriangle1",{duration:0.6,x:0})
    .to("#BigTriangle1",{duration:1,rotation:90})
    .to("#BigTriangle1",{duration:1,x:177})
    .to("#BigTriangle1",{duration:1,y:178});
    
});

document.getElementById("romboide").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Romboide"
    /* acomodamos las figuras */
    document.getElementById("ins_1").innerHTML="";
    document.getElementById("ins_2").innerHTML="Romboide";

    nombreFiguraas = document.getElementById("ins_2");
    nombreFiguraas.classList.add("nombreFig");
    tl.to(".fig",{duration:0,opacity:1,scale:1}); //las figuras son vicibles
    tl.to("#trapecio",{duration:0,opacity:0,scale:0});  //los botones se vuelven tranparentes
    tl.to("#romboide",{duration:0,opacity:0,scale:0});
    tl.to("#rectangulo",{duration:0,opacity:0,scale:0});
    tl.to("#volver",{duration:0,opacity:1,scale:1}); //el boton de volver aparece

    /*Comiensa a mover las figuras para armar un trapecio*/
    tl.to("#BigTriangle1",{duration:0.6,x:0})
    .to("#BigTriangle1",{duration:1,rotation:180})
    .to("#BigTriangle1",{duration:1,x:177})
    .to("#BigTriangle1",{duration:1,y:178});
}); 

document.getElementById("rectangulo").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "rectangulo"
     /* acomodamos las figuras */
     document.getElementById("ins_1").innerHTML="";
     document.getElementById("ins_2").innerHTML="Rectangulo";
 
     nombreFiguraas = document.getElementById("ins_2");
     nombreFiguraas.classList.add("nombreFig");
     
     tl.to(".fig",{duration:0,opacity:1,scale:1}); //las figuras son vicibles
     tl.to("#trapecio",{duration:0,opacity:0,scale:0});  //los botones se vuelven tranparentes
     tl.to("#romboide",{duration:0,opacity:0,scale:0});
     tl.to("#rectangulo",{duration:0,opacity:0,scale:0});
     tl.to("#volver",{duration:0,opacity:1,scale:1}); //el boton de volver aparece
 
     /*Comiensa a mover las figuras para armar un trapecio*/
     tl.to("#BigTriangle1",{duration:0.6,x:0})
     .to("#BigTriangle1",{duration:1,rotation:180})
     .to("#BigTriangle1",{duration:1,x:-180})
     .to("#BigTriangle1",{duration:1,y:177});
});

document.getElementById("volver").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Volver"

    document.getElementById("ins_1").innerHTML=instrunccion1;
    document.getElementById("ins_2").innerHTML=instrunccion2;

    nombreFiguraas = document.getElementById("ins_2");
    nombreFiguraas.classList.remove("nombreFig");

    tl.to(".fig",{duration:0,opacity:0,scale:0,rotation:0,x:0,y:0});
    tJ.to(".fig",{duration:0,opacity:0,scale:0,rotation:0,x:0,y:0});
    tJ.to("#trapecio",{duration:0,opacity:1,scale:1}); 
    tJ.to("#romboide",{duration:0,opacity:1,scale:1});
    tJ.to("#rectangulo",{duration:0,opacity:1,scale:1});
    tJ.to("#volver",{duration:0,opacity:0,scale:0});
});