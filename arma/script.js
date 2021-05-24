/*Ver https://www.greensock.com/draggable/ y https://greensock.com/docs/v3/GSAP para más detalles */

//variables

function acomodar(){
     /* acomodamos las figuras */
     tl.to(".botones",{duration:0,opacity:0,scale:0});
     tl.to(".fig",{duration:0,opacity:1,scale:1}).to("#Rombo",{duration:0,opacity:0,scale:0}); //las figuras son vicibles
     //tl.to(".svg",{duration:0,y:-100});
     tl.to("#volver",{duration:0,opacity:1,scale:1}); //el boton de volver aparece
 
     /*Ordenamos las figuras principales*/
     tl.to("#BigTriangle1",{duration:0,rotation:90,x:120,y:180}) //Triangulo amarillo 
        .to("#BigTriangle2",{duration:0,rotation:0,x:0,y:-110}) //Triangulo Grande Rosado
        .to("#MediumTriangle",{duration:0,rotation:135,x:0,y:-250}) //Triangulo morado  
        .to("#SmallTriangle1",{duration:0,rotation:90,x:-300,y:-20}) //Triangulo rosado fuerte  //Triangulo  pequeño rosado 
        .to("#SmallTriangle2",{duration:0,rotation:-45,x:40,y:-210}) //triangulo azul  //triangulo pequeño azul
        .to("#Square",{duration:0,rotation:0,x:-70,y:20}) //cuadrado 
}

let tl = gsap.timeline(); //Preparamos la linea de tiempo
let t2 = gsap.timeline(); 
//pociciones principales

tl.to(".fig",{duration:0,opacity:0,scale:0}); //las figuras se vuelven transparentes
tl.to("#volver",{duration:0,opacity:0,scale:0}); //el boton de "volver" desaparece
tl.to("#nombre",{duration:0,opacity:0,scale:0}); //el nombre de la figura desaparece



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
     tl.to("#BigTriangle1",{duration:0,rotation:90,x:120,y:180}) //Triangulo grande amarillo 
        .to("#BigTriangle2",{duration:0,rotation:0,x:0,y:-110}) //Triangulo Grande Rosado
        .to("#MediumTriangle",{duration:0,rotation:135,x:0,y:-250}) //Triangulo Mediano morado  //Triangulo Mediano morado
        .to("#SmallTriangle1",{duration:0,rotation:90,x:-300,y:-20}) //Triangulo  pequeño rosado   //Triangulo  pequeño rosado 
        .to("#SmallTriangle2",{duration:0,rotation:-45,x:40,y:-210}) //triangulo pequeño azul  //triangulo pequeño azul
        .to("#Square",{duration:0,rotation:0,x:-70,y:20}) //cuadrado 
        .to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
        .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 
        */

        var duracion = 0.8;
        tl.to("#BigTriangle2",{duration:0.6}) //Triangulo Grande Rosado
        .to("#BigTriangle2",{duration:duracion,x:430}) //Triangulo Grande Rosado
        .to("#BigTriangle2",{duration:duracion,y:-40}) //Triangulo Grande Rosado
   
        .to("#BigTriangle1",{duration:duracion,x:607,rotation:90}) //Triangulo grande amarillo
        .to("#BigTriangle1",{duration:duracion,y:138}) //Triangulo grande amarillo
       
        .to("#Square",{duration:duracion,x:429})
        .to("#Square",{duration:duracion,y:-40})   
        
        .to("#SmallTriangle2",{duration:duracion,x:430,rotation:0,y:-90}) //triangulo pequeño azul
        .to("#SmallTriangle2",{duration:duracion,y:-40})  //triangulo pequeño azul
       
        .to("#SmallTriangle1",{duration:duracion,rotation:0,y:-40}) //Triangulo  pequeño rosado 
        .to("#SmallTriangle1",{duration:duracion,x:430})  //Triangulo  pequeño rosado 
        
        .to("#Rombo",{duration:duracion,y:-40})
        .to("#Rombo",{duration:duracion,x:430})
        
        .to("#MediumTriangle",{duration:duracion,rotation:0,y:-40})  //Triangulo Mediano morado
        .to("#MediumTriangle",{duration:duracion,x:430})  //Triangulo Mediano morado
        .to("#nombre",{duration:0,opacity:1,scale:1}) ;
    
});

document.getElementById("triangulo").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "triangulo"
    /* acomodamos las figuras */
document.getElementById("nombre").innerHTML = "Triangulo";
   
    acomodar();
    tl.to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
    .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 

     /*
     tl.to("#BigTriangle1",{duration:0,rotation:90,x:120,y:180}) //Triangulo amarillo //Triangulo grande amarillo
        .to("#BigTriangle2",{duration:0,rotation:0,x:0,y:-110}) //Triangulo rosa claro //Triangulo Grande Rosado
        .to("#MediumTriangle",{duration:0,rotation:135,x:0,y:-250}) //Triangulo morado  //Triangulo Mediano morado
        .to("#SmallTriangle1",{duration:0,rotation:90,x:-300,y:-20}) //Triangulo rosado fuerte  //Triangulo  pequeño rosado 
        .to("#SmallTriangle2",{duration:0,rotation:-45,x:40,y:-210}) //triangulo azul  //triangulo pequeño azul
        .to("#Square",{duration:0,rotation:0,x:-70,y:20}) //cuadrado 
        .to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
        .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 
        */

    var duracion = 0.8;
     tl.to("#BigTriangle2",{duration:0.6}) //Triangulo Grande Rosado
     .to("#BigTriangle2",{duration:duracion,x:700}) //Triangulo Grande Rosado
     .to("#BigTriangle2",{duration:duracion,rotation:90,y:0}) //Triangulo Grande Rosado

     .to("#BigTriangle1",{duration:duracion,x:344}) //Triangulo grande amarillo
     .to("#BigTriangle1",{duration:duracion,y:0}) //Triangulo grande amarillo
    
     .to("#Square",{duration:duracion,x:256})
     .to("#Square",{duration:duracion,y:0})   
     
     .to("#SmallTriangle2",{duration:duracion,x:344,rotation:90,y:-90}) //triangulo pequeño azul
     .to("#SmallTriangle2",{duration:duracion,y:0})  //triangulo pequeño azul
     
     .to("#SmallTriangle1",{duration:duracion,rotation:-90,y:-90}) //Triangulo  pequeño rosado 
     .to("#SmallTriangle1",{duration:duracion,x:257})  //Triangulo  pequeño rosado 
     
     .to("#Rombo2",{duration:duracion,y:67})
     .to("#Rombo2",{duration:duracion,x:310})
     
     .to("#MediumTriangle",{duration:duracion,rotation:0,y:0})  //Triangulo Mediano morado
     .to("#MediumTriangle",{duration:duracion,x:346})  //Triangulo Mediano morado
     .to("#nombre",{duration:0,opacity:1,scale:1});
    
});

document.getElementById("cuadrado").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "cuadrado"
    /* acomodamos las figuras */

    document.getElementById("nombre").innerHTML = "Cuadrado";
   
    acomodar();
    tl.to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
    .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 
     /*
     tl.to("#BigTriangle1",{duration:0,rotation:90,x:120,y:180}) //Triangulo amarillo //Triangulo grande amarillo
        .to("#BigTriangle2",{duration:0,rotation:0,x:0,y:-110}) //Triangulo rosa claro //Triangulo Grande Rosado
        .to("#MediumTriangle",{duration:0,rotation:135,x:0,y:-250}) //Triangulo morado  //Triangulo Mediano morado
        .to("#SmallTriangle1",{duration:0,rotation:90,x:-300,y:-20}) //Triangulo rosado fuerte  //Triangulo  pequeño rosado 
        .to("#SmallTriangle2",{duration:0,rotation:-45,x:40,y:-210}) //triangulo azul  //triangulo pequeño azul
        .to("#Square",{duration:0,rotation:0,x:-70,y:20}) //cuadrado 
        .to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
        .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 
        */

        var duracion = 0.8;
        tl.to("#BigTriangle2",{duration:0.6}) //Triangulo Grande Rosado
        .to("#BigTriangle2",{duration:duracion,x:430}) //Triangulo Grande Rosado
        .to("#BigTriangle2",{duration:duracion,rotation:-45,y:-40}) //Triangulo Grande Rosado
        
        .to("#BigTriangle1",{duration:duracion,x:377,rotation:45}) //Triangulo grande amarillo
        .to("#BigTriangle1",{duration:duracion,y:13}) //Triangulo grande amarillo
       
        .to("#Square",{duration:duracion,rotation:45,x:287})
        .to("#Square",{duration:duracion,y:87})   
        
        .to("#SmallTriangle2",{duration:duracion,x:313,rotation:45,y:-90}) //triangulo pequeño azul
        .to("#SmallTriangle2",{duration:duracion,y:150})  //triangulo pequeño azul
       
        .to("#SmallTriangle1",{duration:duracion,rotation:225,y:-192}) //Triangulo  pequeño rosado 
        .to("#SmallTriangle1",{duration:duracion,x:350})  //Triangulo  pequeño rosado 
        
        .to("#Rombo2",{duration:duracion,rotation:45,y:-7})
        .to("#Rombo2",{duration:duracion,x:468})
        
        .to("#MediumTriangle",{duration:duracion,rotation:135,y:-66})  //Triangulo Mediano morado
        .to("#MediumTriangle",{duration:duracion,x:439})  //Triangulo Mediano morado
        
        .to("#nombre",{duration:0,opacity:1,scale:1}) ;
    
})

document.getElementById("romboide").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Romboide"
    /* acomodamos las figuras */
    document.getElementById("nombre").innerHTML = "Romboide";
   
    acomodar();
    tl.to("#Rombo2",{duration:0, opacity:0 ,scale:0}) //rombo inverso
    .to("#Rombo",{duration:0, opacity:1 ,scale:1, x:180,y:-120}); //rombo
    

     /*
     tl.to("#BigTriangle1",{duration:0,rotation:90,x:120,y:180}) //Triangulo amarillo //Triangulo grande amarillo
        .to("#BigTriangle2",{duration:0,rotation:0,x:0,y:-110}) //Triangulo rosa claro //Triangulo Grande Rosado
        .to("#MediumTriangle",{duration:0,rotation:135,x:0,y:-250}) //Triangulo morado  //Triangulo Mediano morado
        .to("#SmallTriangle1",{duration:0,rotation:90,x:-300,y:-20}) //Triangulo rosado fuerte  //Triangulo  pequeño rosado 
        .to("#SmallTriangle2",{duration:0,rotation:-45,x:40,y:-210}) //triangulo azul  //triangulo pequeño azul
        .to("#Square",{duration:0,rotation:0,x:-70,y:20}) //cuadrado 
        .to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
        .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 
        */

        var duracion = 0.8;
        tl.to("#BigTriangle2",{duration:0.6}) //Triangulo Grande Rosado
        .to("#BigTriangle2",{duration:duracion,x:430}) //Triangulo Grande Rosado
        .to("#BigTriangle2",{duration:duracion,y:-40}) //Triangulo Grande Rosado
   
        .to("#BigTriangle1",{duration:duracion,x:608,rotation:180}) //Triangulo grande amarillo
        .to("#BigTriangle1",{duration:duracion,y:137}) //Triangulo grande amarillo
       
        .to("#Square",{duration:duracion,x:430})
        .to("#Square",{duration:duracion,y:-40})   
        
        .to("#SmallTriangle2",{duration:duracion,x:430,rotation:0,y:-90}) //triangulo pequeño azul
        .to("#SmallTriangle2",{duration:duracion,y:-40})  //triangulo pequeño azul
       
        .to("#SmallTriangle1",{duration:duracion,rotation:0,y:-40}) //Triangulo  pequeño rosado 
        .to("#SmallTriangle1",{duration:duracion,x:431})  //Triangulo  pequeño rosado 
        
        .to("#Rombo",{duration:duracion,y:-40})
        .to("#Rombo",{duration:duracion,x:430})
        
        .to("#MediumTriangle",{duration:duracion,rotation:0,y:-40})  //Triangulo Mediano morado
        .to("#MediumTriangle",{duration:duracion,x:431})  //Triangulo Mediano morado
        .to("#nombre",{duration:0,opacity:1,scale:1}) ;
});

document.getElementById("rectangulo").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "rectangulo"
    
    document.getElementById("nombre").innerHTML = "Rectangulo";
   
    acomodar();
    tl.to("#Rombo2",{duration:0,x:50,y:0}) //rombo inverso
    .to("#Rombo",{duration:0,opacity:0,scale:0}); //rombo 

    var duracion = 0.08;
     tl.to("#BigTriangle2",{duration:0.6}) //Triangulo Grande Rosado
     .to("#BigTriangle2",{duration:duracion,x:550}) //Triangulo Grande Rosado
     .to("#BigTriangle2",{duration:duracion,rotation:180}) //Triangulo Grande Rosado

     .to("#BigTriangle1",{duration:duracion,x:552}) //Triangulo grande amarillo
     .to("#BigTriangle1",{duration:duracion,rotation:-90,y:68}) //Triangulo grande amarillo

     .to("#Square",{duration:duracion,x:463})
     .to("#Square",{duration:duracion,y:-21})   

     .to("#SmallTriangle2",{duration:duracion,x:641})  //triangulo pequeño azul
     .to("#SmallTriangle2",{duration:duracion,y:-111,rotation:-90})  //triangulo pequeño azul

     .to("#SmallTriangle1",{duration:duracion,x:284})   //Triangulo  pequeño rosado 
     .to("#SmallTriangle1",{duration:duracion,y:-110})  //Triangulo  pequeño rosado 

     .to("#Rombo2",{duration:duracion,rotation:90,y:48})
     .to("#Rombo2",{duration:duracion,x:428})
     
     .to("#MediumTriangle",{duration:duracion,rotation:0,y:-199})  //Triangulo Mediano morado
     .to("#MediumTriangle",{duration:duracion,x:462})  //Triangulo Mediano morado
     .to("#nombre",{duration:0,opacity:1,scale:1})
     ;
});

document.getElementById("volver").addEventListener("click",()=>{ //activa una funcion tras precionar el boton "Volver"


    t2.to(".fig",{duration:0,opacity:0,scale:0,rotation:0,x:0,y:0})
    .to(".svg",{duration:0,y:0})
    .to(".botones",{duration:0,opacity:1,scale:1})
    .to("#volver",{duration:0,opacity:0,scale:0})
    .to("#nombre",{duration:0,opacity:0,scale:0});
    t1.stop();
});