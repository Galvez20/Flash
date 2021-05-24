var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
let time = 1;

//Pocicion de las figuras

document.getElementById("boton").addEventListener("click",()=>{ //activa una funcion tras precionar el boton 


    tl.to("#SmallTriangle1", {duration: 0, rotation: 45,  y: -50, x:-270})//triangulo pequeño azul
    .to("#SmallTriangle2", {duration: 0, rotation: -135,  y: -20, x:250})//triangulo pequeño rosado
    .to("#MediumTriangle", {duration: 0, y: 0, x:0})//triangulo mediano morado
    .to("#BigTriangle1", {duration: 0, rotation: -90,  y: -70, x:200})//triangulo grande amarillo
    .to("#BigTriangle2", {duration: 0, rotation: 0,  y: 0, x:-200})//triangulo grande rosado
    .to("#Square",{duration:0, y:-30, x: 50 })//cuadrado naranja
    .to("#Rombo", {duration: 0, rotation: -45,  y: -170, x:-50}) //rombo verde
    .to("#Rombo", {duration: 1, rotation:  -45,  y: -170, x:-50}) //rombo verde

    .to("#SmallTriangle2", {duration: time, rotation: -90,  y: 30, x:90})   //triangulo pequeño rosado
    .to("#SmallTriangle1", {duration: time, rotation: 90})   //triangulo pequeño azul
    .to("#SmallTriangle1", {duration: time, y: 100, x:-89})   //triangulo pequeño azul
    .addLabel("small-1-2")
    .to("#SmallTriangle1", {duration: time, x: 122},("small-1-2"))   //triangulo pequeño azul
    .to("#SmallTriangle2", {duration: time, x: 300},("small-1-2"))   //triangulo pequeño rosado
    .to("#Rombo", {duration: 1, rotation:  -45,  y: -170, x:-50}) //rombo verde

    .to("#SmallTriangle1", {duration: time, x: -39, y:-20})   //triangulo pequeño azul
    .to("#SmallTriangle2", {duration: time, rotation: 0, x: 50, y:-120})   //triangulo pequeño rosado
    .addLabel("Small--1-2")
    .to("#SmallTriangle1", {duration: time, x: -250, y:-50},("Small--1-2"))   //triangulo pequeño azul
    .to("#SmallTriangle2", {duration: time, x: -160, y:-150},("Small--1-2"))   //triangulo pequeño rosado
    .to("#Rombo", {duration: 1, rotation:  -45,  y: -170, x:-50}) //rombo verde

    .to("#SmallTriangle1", {duration: time, rotation:135})   //triangulo pequeño azul
    .to("#SmallTriangle1", {duration: time, x: -87, y:-145})   //triangulo pequeño azul
    .to("#SmallTriangle2", {duration: time, rotation: 45 })   //triangulo pequeño rosado
    .to("#SmallTriangle2", {duration: time, x: 85, y:-189})   //triangulo pequeño rosado
    .addLabel("Small--1--2")
    .to("#SmallTriangle1", {duration: time, x: -237},("Small--1--2"))   //triangulo pequeño azul
    .to("#SmallTriangle2", {duration: time, x: -65},("Small--1--2"))   //triangulo pequeño rosado
    .to("#Rombo", {duration: 1, rotation:  -45,  y: -170, x:-50}) //rombo verde

    .to("#SmallTriangle2", {duration: time, rotation: 180})   //triangulo pequeño rosado
    .to("#SmallTriangle2", {duration: time, x: 220, y: -89})   //triangulo pequeño rosado
    .to("#SmallTriangle1", {duration: time, rotation: -180, y:-110})   //triangulo pequeño azul
    .to("#SmallTriangle1", {duration: time, x: 180, y: -20})   //triangulo pequeño azul
    .to("#MediumTriangle", {duration: time, rotation: 90, x: 119.5, y: -187.5})
    .addLabel("triangle-group")
    .to("#SmallTriangle1", {duration: time, x: 180.5, y: 122.5},("triangle-group"))   //triangulo pequeño azul
    .to("#SmallTriangle2", {duration: time, x: 220.5, y: 52.5},("triangle-group"))   //triangulo pequeño rosado
    .to("#MediumTriangle", {duration: time, x: 120, y: -45.5},("triangle-group"))
    .to("#Rombo", {duration: 1, rotation:  -45,  y: -170, x:-50}) //rombo verde

    
    .to("#MediumTriangle", {duration: time, rotation:0, x:0, y:0})
    .to("#SmallTriangle2", {duration: time, rotation: 0, x: 0, y: 0})   //triangulo pequeño rosado
    .to("#Square",{duration: time, x:0 ,y: 0})
    .to("#Rombo", {duration: time, rotation: 0,  y: 0, x:0})
  
    .to("#SmallTriangle1", {duration: time, rotation: 0})   //triangulo pequeño azul
    .to("#SmallTriangle1", {duration: time, x: 0, y: 0})
  
    .to("#BigTriangle1", {duration: time, rotation: 0,  y: 0, x:-200})
    .addLabel("MediumTriangle-group")

    .to("#BigTriangle2", {duration: time, rotation: 0,  y: 0, x: 0},("MediumTriangle-group"))
    .to("#BigTriangle1", {duration: time, rotation: 0,  y: 0, x:0},("MediumTriangle-group"))
  
    ;
  })

