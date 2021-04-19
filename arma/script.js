/*Ver https://www.greensock.com/draggable/ y https://greensock.com/docs/v3/GSAP para más detalles */

//variables

function acomodar(){
     /* acomodamos las figuras */
     tl.to(".botones",{duration:0,opacity:0,scale:0});
     tl.to(".fig",{duration:0,opacity:1,scale:1}).to("#Rombo",{duration:0,opacity:0,scale:0}); //las figuras son vicibles
     tl.to(".svg",{duration:0,y:-100});
     tl.to("#volver",{duration:0,opacity:1,scale:1}); //el boton de volver aparece
 
     /*Ordenamos las figuras principales*/
     tl.to("#BigTriangle1",{duration:0,rotation:90,x:120,y:180}) //Triangulo amarillo
        .to("#BigTriangle2",{duration:0,rotation:0,x:0,y:-110}) //Triangulo rosa claro
        .to("#MediumTriangle",{duration:0,rotation:135,x:0,y:-250}) //Triangulo morado
        .to("#SmallTriangle1",{duration:0,rotation:90,x:-300,y:-20}) //Triangulo rosado fuerte
        .to("#SmallTriangle2",{duration:0,rotation:-45,x:40,y:-210}) //triangulo azul
        .to("#Square",{duration:0,rotation:0,x:-70,y:20}) //cuadrado 
}

let tl = gsap.timeline(); //Preparamos la linea de tiempo
//pociciones principales

tl.to(".fig",{duration:0,opacity:0,scale:0}); //las figuras se vuelven transparentes
tl.to("#volver",{duration:0,opacity:0,scale:0,y:-100}); //el boton de "volver" desaparece
tl.to("#nombre",{duration:0,opacity:0,scale:0,y:-350,x:-100}); //el nombre de la figura desaparece



//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------


//deteccion de botones:
document.getElementById("trapecio").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Trapecio"
    /* acomodamos las figuras */

    document.getElementById("nombre").innerHTML = "Trapecio";
   
    acomodar();

    tl.to("#Rombo2",{duration:0, opacity:0 ,scale:0}) //rombo inverso
    .to("#Rombo",{duration:0, opacity:1 ,scale:1, x:180,y:-120}); //rombo
    

     /*
     tl.to("#BigTriangle1",{duration:0,rotation:90,x:120,y:180}) //Triangulo amarillo
        .to("#BigTriangle2",{duration:0,rotation:0,x:0,y:-110}) //Triangulo rosa claro
        .to("#MediumTriangle",{duration:0,rotation:135,x:0,y:-250}) //Triangulo morado
        .to("#SmallTriangle1",{duration:0,rotation:90,x:-300,y:-20}) //Triangulo rosado fuerte
        .to("#SmallTriangle2",{duration:0,rotation:-45,x:40,y:-210}) //triangulo azul
        .to("#Square",{duration:0,rotation:0,x:-70,y:20}) //cuadrado 
        .to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
        .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 
        */

        var duracion = 0.8;
        tl.to("#BigTriangle2",{duration:0.6})
        .to("#BigTriangle2",{duration:duracion,x:430})
        .to("#BigTriangle2",{duration:duracion,y:-40})
   
        .to("#BigTriangle1",{duration:duracion,x:608,rotation:90})
        .to("#BigTriangle1",{duration:duracion,y:138})
       
        .to("#Square",{duration:duracion,x:430})
        .to("#Square",{duration:duracion,y:-40})   
        
        .to("#SmallTriangle2",{duration:duracion,x:430,rotation:0,y:-90})    
        .to("#SmallTriangle2",{duration:duracion,y:-40})
       
        .to("#SmallTriangle1",{duration:duracion,rotation:0,y:-40})    
        .to("#SmallTriangle1",{duration:duracion,x:430})
        
        .to("#Rombo",{duration:duracion,y:-40})
        .to("#Rombo",{duration:duracion,x:430})
        
        .to("#MediumTriangle",{duration:duracion,rotation:0,y:-40})
        .to("#MediumTriangle",{duration:duracion,x:430})
        .to("#nombre",{duration:0,opacity:1,scale:1}) ;
    
});

document.getElementById("triangulo").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "triangulo"
    /* acomodamos las figuras */
document.getElementById("nombre").innerHTML = "Triangulo";
   
    acomodar();
    tl.to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
    .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 

     /*
     tl.to("#BigTriangle1",{duration:0,rotation:90,x:120,y:180}) //Triangulo amarillo
        .to("#BigTriangle2",{duration:0,rotation:0,x:0,y:-110}) //Triangulo rosa claro
        .to("#MediumTriangle",{duration:0,rotation:135,x:0,y:-250}) //Triangulo morado
        .to("#SmallTriangle1",{duration:0,rotation:90,x:-300,y:-20}) //Triangulo rosado fuerte
        .to("#SmallTriangle2",{duration:0,rotation:-45,x:40,y:-210}) //triangulo azul
        .to("#Square",{duration:0,rotation:0,x:-70,y:20}) //cuadrado 
        .to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
        .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 
        */

    var duracion = 0.8;
     tl.to("#BigTriangle2",{duration:0.6})
     .to("#BigTriangle2",{duration:duracion,x:700})
     .to("#BigTriangle2",{duration:duracion,rotation:90,y:0})

     .to("#BigTriangle1",{duration:duracion,x:344})
     .to("#BigTriangle1",{duration:duracion,y:0})
    
     .to("#Square",{duration:duracion,x:256})
     .to("#Square",{duration:duracion,y:0})   
     
     .to("#SmallTriangle2",{duration:duracion,x:344,rotation:90,y:-90})    
     .to("#SmallTriangle2",{duration:duracion,y:0})
     
     .to("#SmallTriangle1",{duration:duracion,rotation:-90,y:-90})    
     .to("#SmallTriangle1",{duration:duracion,x:257})
     
     .to("#Rombo2",{duration:duracion,y:66})
     .to("#Rombo2",{duration:duracion,x:310})
     
     .to("#MediumTriangle",{duration:duracion,rotation:0,y:0})
     .to("#MediumTriangle",{duration:duracion,x:346})
     .to("#nombre",{duration:0,opacity:1,scale:1});
    
});

document.getElementById("cuadrado").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "cuadrado"
    /* acomodamos las figuras */

    document.getElementById("nombre").innerHTML = "Cuadrado";
   
    acomodar();
    tl.to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
    .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 
     /*
     tl.to("#BigTriangle1",{duration:0,rotation:90,x:120,y:180}) //Triangulo amarillo
        .to("#BigTriangle2",{duration:0,rotation:0,x:0,y:-110}) //Triangulo rosa claro
        .to("#MediumTriangle",{duration:0,rotation:135,x:0,y:-250}) //Triangulo morado
        .to("#SmallTriangle1",{duration:0,rotation:90,x:-300,y:-20}) //Triangulo rosado fuerte
        .to("#SmallTriangle2",{duration:0,rotation:-45,x:40,y:-210}) //triangulo azul
        .to("#Square",{duration:0,rotation:0,x:-70,y:20}) //cuadrado 
        .to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
        .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 
        */

        var duracion = 0.8;
        tl.to("#BigTriangle2",{duration:0.6})
        .to("#BigTriangle2",{duration:duracion,x:430})
        .to("#BigTriangle2",{duration:duracion,rotation:-45,y:-40})
        
        .to("#BigTriangle1",{duration:duracion,x:378,rotation:45})
        .to("#BigTriangle1",{duration:duracion,y:13})
       
        .to("#Square",{duration:duracion,rotation:45,x:287})
        .to("#Square",{duration:duracion,y:87})   
        
        .to("#SmallTriangle2",{duration:duracion,x:313,rotation:45,y:-90})    
        .to("#SmallTriangle2",{duration:duracion,y:150})
       
        .to("#SmallTriangle1",{duration:duracion,rotation:225,y:-191})    
        .to("#SmallTriangle1",{duration:duracion,x:350})
        
        .to("#Rombo2",{duration:duracion,rotation:45,y:-7})
        .to("#Rombo2",{duration:duracion,x:468})
        
        .to("#MediumTriangle",{duration:duracion,rotation:135,y:-65})
        .to("#MediumTriangle",{duration:duracion,x:439})
        
        .to("#nombre",{duration:0,opacity:1,scale:1}) ;
    
})

document.getElementById("romboide").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Romboide"
    /* acomodamos las figuras */
    document.getElementById("nombre").innerHTML = "Romboide";
   
    acomodar();
    tl.to("#Rombo2",{duration:0, opacity:0 ,scale:0}) //rombo inverso
    .to("#Rombo",{duration:0, opacity:1 ,scale:1, x:180,y:-120}); //rombo
    

     /*
     tl.to("#BigTriangle1",{duration:0,rotation:90,x:120,y:180}) //Triangulo amarillo
        .to("#BigTriangle2",{duration:0,rotation:0,x:0,y:-110}) //Triangulo rosa claro
        .to("#MediumTriangle",{duration:0,rotation:135,x:0,y:-250}) //Triangulo morado
        .to("#SmallTriangle1",{duration:0,rotation:90,x:-300,y:-20}) //Triangulo rosado fuerte
        .to("#SmallTriangle2",{duration:0,rotation:-45,x:40,y:-210}) //triangulo azul
        .to("#Square",{duration:0,rotation:0,x:-70,y:20}) //cuadrado 
        .to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
        .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 
        */

        var duracion = 0.8;
        tl.to("#BigTriangle2",{duration:0.6})
        .to("#BigTriangle2",{duration:duracion,x:430})
        .to("#BigTriangle2",{duration:duracion,y:-40})
   
        .to("#BigTriangle1",{duration:duracion,x:608,rotation:180})
        .to("#BigTriangle1",{duration:duracion,y:138})
       
        .to("#Square",{duration:duracion,x:430})
        .to("#Square",{duration:duracion,y:-40})   
        
        .to("#SmallTriangle2",{duration:duracion,x:430,rotation:0,y:-90})    
        .to("#SmallTriangle2",{duration:duracion,y:-40})
       
        .to("#SmallTriangle1",{duration:duracion,rotation:0,y:-40})    
        .to("#SmallTriangle1",{duration:duracion,x:430})
        
        .to("#Rombo",{duration:duracion,y:-40})
        .to("#Rombo",{duration:duracion,x:430})
        
        .to("#MediumTriangle",{duration:duracion,rotation:0,y:-40})
        .to("#MediumTriangle",{duration:duracion,x:430})
        .to("#nombre",{duration:0,opacity:1,scale:1}) ;
});

document.getElementById("rectangulo").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "rectangulo"
    
    document.getElementById("nombre").innerHTML = "Rectangulo";
   
    acomodar();
    tl.to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
    .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 

    var duracion = 0.8;
     tl.to("#BigTriangle2",{duration:0.6})
     .to("#BigTriangle2",{duration:duracion,x:550})
     .to("#BigTriangle2",{duration:duracion,rotation:180})
     .to("#BigTriangle1",{duration:duracion,x:553})
     .to("#BigTriangle1",{duration:duracion,rotation:-90,y:68})
     .to("#Square",{duration:duracion,x:463})
     .to("#Square",{duration:duracion,y:-20})   
     .to("#SmallTriangle2",{duration:duracion,x:641})    
     .to("#SmallTriangle2",{duration:duracion,y:-111,rotation:-90})
     .to("#SmallTriangle1",{duration:duracion,x:284})    
     .to("#SmallTriangle1",{duration:duracion,y:-110})
     .to("#Rombo2",{duration:duracion,rotation:90,y:48})
     .to("#Rombo2",{duration:duracion,x:429})
     .to("#MediumTriangle",{duration:duracion,rotation:0,y:-199})
     .to("#MediumTriangle",{duration:duracion,x:463})
     .to("#nombre",{duration:0,opacity:1,scale:1})
     ;
});

document.getElementById("volver").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Volver"


    tl.to(".fig",{duration:0,opacity:0,scale:0,rotation:0,x:0,y:0});
    tl.to(".svg",{duration:0,y:0});
    tl.to(".botones",{duration:0,opacity:1,scale:1});
    tl.to("#volver",{duration:0,opacity:0,scale:0});
    tl.to("#nombre",{duration:0,opacity:0,scale:0});
});