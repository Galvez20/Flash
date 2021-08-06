
//Creamos las variables necesarias

//Las lineas de tiempo que necesitamos para cada figura
var reset = gsap.timeline();
var t1 = gsap.timeline();
var t2 = gsap.timeline();
var t3 = gsap.timeline();
var t4 = gsap.timeline();

var siguiente = document.querySelector("#btnSig");
var anterior = document.querySelector("#btnAnt"); 

var siguienteClass = document.getElementById("btnSig");
var anteriorClass = document.getElementById("btnAnt"); 

var figuraTurno = 0;                //El turno para mostrar las figuras
var banderaFiguras = [0,0,0,0];     //


//Textos que seran escritoss 
const A_romboide = "Área del romboide=bxa";
const A_rectangulo = "Área del rectangulo=bxa";

const A_trapecioRectangulo = " Área del trapecio   (B+b) x a\n          rectangulo =        2";
const A_Rectangulo2 = "Área del\n rectangulo=(B + b) x a";

const A_Rombo = " Área del rombo";
const A_Rombo2 = " = Diagonal menor x Diagonal mayor\n                            2";
const A_Rectangulo3 = "Área del rectangulo=bxa";

const A_Trapecio = " Área del trapecio =  (B+b) x a\n                                         2";
const A_Romboide2 = "Área del romboide =(B + b) x a";

const m = "Puedes cerrar esa ventana sin salir de Mi ayudante";

//Creamos el cuadro en donde estaran las figuras
var canvas = document.getElementById('figuras');
var app = new PIXI.Application({
    view: canvas,
    backgroundColor: 0xffffff,
    width:1366,
    height:700,
    antialias: true,
});

//Creamos los estilos que tendrna las letras
const estiloTexto = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#1522d8', '#1522d8'], 
    stroke: '#1522d8',
    strokeThickness: 0.5,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

const estiloTexto2 = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 20,
    fontStyle: 'italic',
    fill: ['#1522d8', '#1522d8'], 
    stroke: '#1522d8',
    strokeThickness: 0.5,
    wordWrap: true,
    wordWrapWidth: 440,
});

//Estilo de la lectra que tendra el color naranja
const estiloLetraNaranja = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 45,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#d67a00', '#d67a00'], // gradient
    stroke: '#d67a00',
    strokeThickness: 0.5,
});

//Estilo de la lectra que tendra el color Azul
const estiloLetraAzul = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 45,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#111c74', '#111c74'], // gradient
    stroke: '#111c74',
    strokeThickness: 0.5,
});

//Estilo de la lectra que tendra el color verde
const estiloLetraVerde = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 45,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#156f27', '#156f27'], // gradient
    stroke: '#156f27',
    strokeThickness: 0.5,
});

//Estilo de la lectra que tendra el color verde
const estiloLetraRojo = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 45,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#660f1f', '#660f1f'], // gradient
    stroke: '#660f1f',
    strokeThickness: 0.5,
});

//----------------------------------------------------------------
//-------------------Variables que tendra las figura---------------s

//-------------------------------------------Romboide--------------------------------------------
var romboideLine = new PIXI.Graphics();
var rectR = new PIXI.Graphics();
var triangR1 = new PIXI.Graphics();
var triangR2 = new PIXI.Graphics();
var line2 = new PIXI.Graphics();

//-------------------------------------------Trapecio Rectangulo--------------------------------------------
var TraRecLine = new PIXI.Graphics();
var TraRecLine2 = new PIXI.Graphics();
var TraRec1 = new PIXI.Graphics();
var TraRec2 = new PIXI.Graphics();


//-------------------------------------------Rombo--------------------------------------------
var trianngulo1 = new PIXI.Graphics();
var trianngulo2 = new PIXI.Graphics();
var trianngulo3 = new PIXI.Graphics();
var trianngulo4 = new PIXI.Graphics();
var Rombo = new PIXI.Graphics();

var RomboLine1 = new PIXI.Graphics();
var RomboLine2 = new PIXI.Graphics();


//-------------------------------------------Trapecio--------------------------------------------
var Trapecio1 = new PIXI.Graphics();
var Trapecio2 = new PIXI.Graphics();

var TrapecioLinea1 = new PIXI.Graphics();
var TrapecioLinea2 = new PIXI.Graphics();





// Dibujamos las letras y palabras
//--------------------------------Para el romboide--------------------------
var AreaTra = new PIXI.Text(A_romboide,estiloTexto);
AreaTra.x = 170;
AreaTra.y = 80;

var Arearect = new PIXI.Text(A_rectangulo,estiloTexto);
Arearect.x = 150;
Arearect.y = 380;

var a1 = new PIXI.Text("a\n\n                 b",estiloLetraNaranja);
a1.x = 500;
a1.y = 125;

var a2 = new PIXI.Text("a\n\n                 b",estiloLetraNaranja);
a2.x = 500;
a2.y = 425;


//--------------------------------Para el trapecio Rectangulo-------------------------

var AreaTraRect = new PIXI.Text(A_trapecioRectangulo,estiloTexto);
AreaTraRect.x = 100;
AreaTraRect.y = 80;

var Arearect2 = new PIXI.Text(A_Rectangulo2,estiloTexto);
Arearect2.x = 800;
Arearect2.y = 450;

var a3 = new PIXI.Text("     b\n\n             a\n\n\nB",estiloLetraAzul);
a3.x = 640;
a3.y = -10;

var a4 = new PIXI.Text("a\n\n        b              B",estiloLetraAzul);
a4.x = 340;
a4.y = 480;


//--------------------------------Rombo-------------------------

var AreaRombo = new PIXI.Text(A_Rombo,estiloTexto);
AreaRombo.x = 870;
AreaRombo.y = 30;

var AreaRombo2 = new PIXI.Text(A_Rombo2,estiloTexto2);
AreaRombo2.x = 850;
AreaRombo2.y = 70;

var Arearect3 = new PIXI.Text(A_Rectangulo3,estiloTexto);
Arearect3.x = 100;
Arearect3.y = 40;

var a5 = new PIXI.Text("a\n\n\n\n\n         b",estiloLetraVerde);
a5.x = 130;
a5.y = 270;

var a6 = new PIXI.Text("         a\n\n\n\n\nb",estiloLetraVerde);
a6.x = 1000;
a6.y = 270;

//--------------------------------Trapecio-------------------------

var AreaTrapecio = new PIXI.Text(A_Trapecio,estiloTexto);
AreaTrapecio.x = 800;
AreaTrapecio.y = 20;

var AreaRomboide = new PIXI.Text(A_Romboide2,estiloTexto);
AreaRomboide.x = 800;
AreaRomboide.y = 300;

var a7 = new PIXI.Text(" b\n\n                            a\n\n\nB",estiloLetraRojo);
a7.x = 430;
a7.y = 20;

var a8 = new PIXI.Text("b",estiloLetraRojo);
a8.x = 840;
a8.y = 550;

var a9 = new PIXI.Text("a\n\n                           B",estiloLetraRojo);
a9.x = 80;
a9.y = 450;

//Mensaje de abajo
var mensaje = new PIXI.Text(m,estiloTexto2);
mensaje.x = 60;
mensaje.y = 630;
app.stage.addChild(mensaje);


//Dibujamos las figuras
Dibujar();
moverFiguras(); 
anterior.setAttribute("disabled", "");
anterior.classList.add("btnRemove");

//------------------------CLICKS----------------------------------------

siguiente.onclick = () => {
    if (figuraTurno< 3){
        anterior.removeAttribute("disabled");
        anterior.classList.remove("btnRemove");
        ocultarFiguras();
        figuraTurno ++;
        moverFiguras(); 
        if (figuraTurno == 3){
            siguiente.setAttribute("disabled", "");
            siguiente.classList.add("btnRemove");
        }
    }
    
    console.log("click1");
}

anterior.onclick = () => {
    if (figuraTurno > 0){
        siguiente.removeAttribute("disabled");
        siguiente.classList.remove("btnRemove");
        ocultarFiguras();
        figuraTurno --;
        moverFiguras(); 
        if (figuraTurno == 0){
            anterior.setAttribute("disabled", "");
            anterior.classList.add("btnRemove");
        }
    }

    console.log("click2");
}


//-----------------------------------------------------------------------------
//----------------------------Funciones----------------------------------------


// Funcion de mover las figuras
function moverFiguras(){
    console.log("moverFiguras " + figuraTurno);
    switch(figuraTurno){
        case 0:
            if (banderaFiguras[figuraTurno]==0){

                //Fibujamos la figura
                app.stage.addChild(romboideLine);
                app.stage.addChild(triangR1);
                app.stage.addChild(rectR);
                app.stage.addChild(triangR2);
                app.stage.addChild(line2);

                 //Fibujamos las letras
                app.stage.addChild(AreaTra);
                app.stage.addChild(Arearect);
                app.stage.addChild(a1);
                app.stage.addChild(a2);

                t1
                .to(line2,{duration:0, alpha: 0})
                .to(Arearect,{duration:0, alpha:0})
                .to(a2,{duration:0, alpha: 0})
                .to(a1,{duration:0, alpha: 0})
                .to(romboideLine,{duration:0, alpha: 0})
                .to(AreaTra,{duration:0, alpha: 0})
                .to(rectR,{duration:0, alpha: 0})
                .to(triangR1,{duration:0, alpha: 0})
                .to(triangR2,{duration:0, alpha: 0})

                .to(a1,{duration:0, alpha: 1})
                .to(romboideLine,{duration:0, alpha: 1})
                .to(rectR,{duration:0, alpha: 1})
                .to(triangR1,{duration:0, alpha: 1})
                .to(triangR2,{duration:0, alpha: 1})
                .to(AreaTra,{duration:0, alpha: 1})

                .to(rectR,{duration:1.5, y:300, delay:1.5},"romboide")
                .to(triangR1,{duration:1.5, y:300, delay:1.5},"romboide")
                .to(triangR2,{duration:1.5, y:380, delay:1.5},"romboide")
                .to(line2,{duration:0, alpha: 1})
                .to(a2,{duration:0, alpha: 1})
                .to(triangR1,{duration:1.0, pixi:{fillColor:"#45a72d", colorizeAmount:1}},"cambiarColor1")
                .to(triangR2,{duration:1.0, pixi:{fillColor:"#1a641c", colorizeAmount:1}},"cambiarColor1")
                .to(triangR2,{duration:1.3,x:550})
                .to(Arearect,{duration:0, alpha:1});

                banderaFiguras[figuraTurno]=1;
            }else{
                t1.restart();
            }
            
            break;
        case 1:
            if (banderaFiguras[figuraTurno]==0){
                     //Fibujamos las letras
                    app.stage.addChild(AreaTraRect);
                    app.stage.addChild(Arearect2);
                    app.stage.addChild(a3);
                    app.stage.addChild(a4);
                    app.stage.addChild(TraRecLine);
                    app.stage.addChild(TraRecLine2);
                    app.stage.addChild(TraRec2);
                    app.stage.addChild(TraRec1);
                
                    t2
                    .to(AreaTraRect,{duration:0, alpha: 0})
                    .to(Arearect2,{duration:0, alpha:0})
                    .to(a3,{duration:0, alpha: 0})
                    .to(a4,{duration:0, alpha: 0})
                    .to(TraRecLine,{duration:0, alpha: 0})
                    .to(TraRecLine2,{duration:0, alpha: 0})
                    .to(TraRec1,{duration:0,alpha: 0})
                    .to(TraRec2,{duration:0,alpha: 0})
    
                    .to(AreaTraRect,{duration:0, alpha: 1})
                    .to(a3,{duration:0, alpha: 1})
                    .to(TraRecLine,{duration:0, alpha: 1})
                    .to(TraRec1,{duration:0,alpha: 1})
                    .to(TraRec2,{duration:0,alpha: 1})

                    .to(TraRec1,{duration:1.3,y:350,delay:1.5})
                    .to(TraRec2,{duration:1.3,x:800,y:210,rotation:Math.PI})
                    
                    .to(Arearect2,{duration:0, alpha:1,delay:0.2})
                    .to(TraRec2,{duration:1.3,x:650,y:560})

                    .to(a4,{duration:0, alpha: 1})
                    .to(TraRecLine2,{duration:0, alpha: 1});

                banderaFiguras[figuraTurno]=1;
            }else{
                t2.restart();
            }
            break;
        case 2:

            if (banderaFiguras[figuraTurno]==0){
                app.stage.addChild(RomboLine1);
                app.stage.addChild(a5);
                app.stage.addChild(a6);
                app.stage.addChild(AreaRombo);
                app.stage.addChild(AreaRombo2);
                app.stage.addChild(Arearect3);

                app.stage.addChild(trianngulo1);
                app.stage.addChild(trianngulo2);
                app.stage.addChild(trianngulo3);
                app.stage.addChild(trianngulo4);
                app.stage.addChild(Rombo);
                
                app.stage.addChild(RomboLine2);

                t3.to(RomboLine1,{duration:0, alpha: 0})
                .to(RomboLine2,{duration:0, alpha:0})
                .to(a5,{duration:0, alpha: 0})
                .to(a6,{duration:0, alpha: 0})
                .to(AreaRombo,{duration:0, alpha: 0})
                .to(AreaRombo2,{duration:0, alpha: 0})
                .to(Arearect3,{duration:0,alpha: 0})
                .to(trianngulo1,{duration:0,alpha: 0})
                .to(trianngulo2,{duration:0,alpha: 0})
                .to(trianngulo3,{duration:0,alpha: 0})
                .to(trianngulo4,{duration:0,alpha: 0})
                .to(Rombo,{duration:0,alpha: 0})
    
                .to(RomboLine1,{duration:0, alpha: 1})
                .to(a5,{duration:0, alpha: 1})
                .to(Arearect3,{duration:0,alpha: 1})
                .to(trianngulo1,{duration:0,alpha: 1})
                .to(trianngulo2,{duration:0,alpha: 1})
                .to(trianngulo3,{duration:0,alpha: 1})
                .to(trianngulo4,{duration:0,alpha: 1})
                .to(Rombo,{duration:0,alpha: 1})

                .to(Rombo,{duration:1, delay:1 , pixi:{fillColor:"#f0341f", colorizeAmount:1}})
                .to(trianngulo1,{duration:1, x:435},"move")
                .to(trianngulo2,{duration:1, x:435},"move")
                .to(trianngulo3,{duration:1, x:435},"move")
                .to(trianngulo4,{duration:1, x:435,},"move")
                .to(Rombo,{duration:1, x:435},"move")
                .to(RomboLine2,{duration:0.8, alpha:1, delay:0.4})

                .to(trianngulo1,{duration:0.5, x:820 , y: 175})
                .to(trianngulo2,{duration:0.5, x:650 , y: 175})
                .to(trianngulo3,{duration:0.5, x:650 , y: -175})
                .to(trianngulo4,{duration:0.5, x:820 , y: -175})
                .to(a6,{duration:0, alpha: 1})
                .to(RomboLine2,{duration:0, alpha:1})
                .to(AreaRombo,{duration:0, alpha: 1})
                .to(AreaRombo2,{duration:0, alpha: 1})
                banderaFiguras[figuraTurno]=1;
            }else{
                t3.restart();
            }
            break;
        case 3:
            if (banderaFiguras[figuraTurno]==0){        
                app.stage.addChild(Trapecio2);
                app.stage.addChild(Trapecio1);
                app.stage.addChild(TrapecioLinea1);
                app.stage.addChild(TrapecioLinea2);

                app.stage.addChild(a7);
                app.stage.addChild(a8);
                app.stage.addChild(a9);
                app.stage.addChild(AreaTrapecio);
                app.stage.addChild(AreaRomboide);

                
               t4.to(AreaTrapecio,{duration:0, alpha: 0})
                .to(AreaRomboide,{duration:0, alpha:0})
                .to(a7,{duration:0, alpha: 0})
                .to(a8,{duration:0, alpha: 0})
                .to(a9,{duration:0, alpha: 0})
                .to(Trapecio1,{duration:0, alpha: 0})
                .to(Trapecio2,{duration:0, alpha: 0})
                .to(TrapecioLinea1,{duration:0,alpha: 0})
                .to(TrapecioLinea2,{duration:0,alpha: 0})

                .to(AreaTrapecio,{duration:0, alpha: 1})
                .to(a7,{duration:0, alpha: 1})
                .to(Trapecio1,{duration:0, alpha: 1})
                .to(Trapecio2,{duration:0, alpha: 1})
                .to(TrapecioLinea1,{duration:0,alpha: 1})

                .to(Trapecio1,{duration:1.5,y:300,delay:1.5})
                .to(Trapecio2,{duration:1,rotation:Math.PI})
                .to(Trapecio2,{duration:1,x:850,y:450})

                .to(AreaRomboide,{duration:0, alpha:1},"cmbiar")
                .to(a8,{duration:0, alpha: 1},"cmbiar")
                .to(a9,{duration:0, alpha: 1},"cmbiar")
                .to(TrapecioLinea2,{duration:0,alpha: 1},"cmbiar");

               
                
                banderaFiguras[figuraTurno]=1;
             }else{
                t4.restart();
            }
            break;
        default:
            break;
    }
}

//Funcion que oculta todas las fibgras
function ocultarFiguras(){
    console.log("Esconer Figuras " + figuraTurno);
    switch(figuraTurno){
        case 0:
            t1.pause();
            reset.to(romboideLine,{duration:0, alpha: 0})
            .to(line2,{duration:0, alpha: 0})
            .to(Arearect,{duration:0, alpha:0})
            .to(AreaTra,{duration:0, alpha: 0})
            .to(a2,{duration:0, alpha: 0})
            .to(a1,{duration:0, alpha: 0})
            .to(rectR,{duration:0, alpha: 0})
            .to(triangR1,{duration:0, alpha: 0})
            .to(triangR2,{duration:0, alpha: 0});
            break;

        case 1:
            t2.pause();
            reset.to(AreaTraRect,{duration:0, alpha: 0})
            .to(Arearect2,{duration:0, alpha:0})
            .to(a3,{duration:0, alpha: 0})
            .to(a4,{duration:0, alpha: 0})
            .to(TraRecLine,{duration:0, alpha: 0})
            .to(TraRecLine2,{duration:0, alpha: 0})
            .to(TraRec1,{duration:0,alpha: 0})
            .to(TraRec2,{duration:0,alpha: 0});
            break;

        case 2:

        
            t3.pause();
            reset.to(RomboLine1,{duration:0, alpha: 0})
            .to(RomboLine2,{duration:0, alpha:0})
            .to(a5,{duration:0, alpha: 0})
            .to(a6,{duration:0, alpha: 0})
            .to(AreaRombo,{duration:0, alpha: 0})
            .to(AreaRombo2,{duration:0, alpha: 0})
            .to(Arearect3,{duration:0,alpha: 0})
            .to(trianngulo1,{duration:0,alpha: 0})
            .to(trianngulo2,{duration:0,alpha: 0})
            .to(trianngulo3,{duration:0,alpha: 0})
            .to(trianngulo4,{duration:0,alpha: 0})
            .to(Rombo,{duration:0,alpha: 0})


            break;
        case 3:

            t4.pause();
            reset.to(AreaTrapecio,{duration:0, alpha: 0})
            .to(AreaRomboide,{duration:0, alpha:0})
            .to(a7,{duration:0, alpha: 0})
            .to(a8,{duration:0, alpha: 0})
            .to(a9,{duration:0, alpha: 0})

            .to(Trapecio1,{duration:0, alpha: 0})
            .to(Trapecio2,{duration:0, alpha: 0})
            .to(TrapecioLinea1,{duration:0,alpha: 0})
            .to(TrapecioLinea2,{duration:0,alpha: 0});

            break;
        default:
            break;
    }
;
}

//Funcion que dibuja las figuras
function Dibujar(){
    //---------------------------------------------------------------------------------
    //------------------------------------Romboide-------------------------------------

    //LineArt ddel rombo
    romboideLine.lineStyle(2, 0x000000, 1);
    romboideLine.moveTo(700, 80);
    romboideLine.lineTo(1050, 80);
    romboideLine.lineTo(900, 210);
    romboideLine.lineTo(550, 210);
    romboideLine.closePath();
    romboideLine.endFill();

    //lineas de medicion
    romboideLine.lineStyle(2, 0x000000, 1);
    romboideLine.moveTo(530, 80);
    romboideLine.lineTo(530,210);
    romboideLine.moveTo(520, 80);
    romboideLine.lineTo(540, 80);
    romboideLine.moveTo(520,210);
    romboideLine.lineTo(540,210);

    romboideLine.moveTo(550, 235);
    romboideLine.lineTo(900, 235);
    romboideLine.moveTo(550, 220);
    romboideLine.lineTo(550, 250);
    romboideLine.moveTo(900, 220);
    romboideLine.lineTo(900, 250);

    romboideLine.closePath();
    romboideLine.endFill();

    //Lineas de medicion 2
    line2.lineStyle(2, 0x000000, 1);
    line2.moveTo(530, 380);
    line2.lineTo(530,510);
    line2.moveTo(520, 380);
    line2.lineTo(540, 380);
    line2.moveTo(520,510);
    line2.lineTo(540,510);

    line2.moveTo(550, 535);
    line2.lineTo(900, 535);
    line2.moveTo(550, 520);
    line2.lineTo(550, 550);
    line2.moveTo(900, 520);
    line2.lineTo(900, 550);

    for(i = 510;i>370;){
        line2.moveTo(900, i);
        i-=12;
        line2.lineTo(900, i);
        i-=12;
    }

    line2.closePath();
    line2.endFill();

    //Rectangulo
    rectR.beginFill(0x8cca27);
    rectR.moveTo(700,80);
    rectR.lineTo(900,80);
    rectR.lineTo(900,210);
    rectR.lineTo(700,210);
    rectR.closePath();
    rectR.endFill();

    //triangulo1
    triangR1.beginFill(0x8cca27);
    triangR1.moveTo(700,80);
    triangR1.lineTo(700,210);
    triangR1.lineTo(550,210);
    triangR1.closePath();
    triangR1.endFill();

    //triangulo2
    triangR2.beginFill(0x8cca27);
    triangR2.moveTo(150,0);
    triangR2.lineTo(0,130);
    triangR2.lineTo(0,0);
    triangR2.closePath();
    triangR2.endFill();
    triangR2.x = 900;
    triangR2.y = 80;

    //---------------------------------------------------------------------------------
    //------------------------------------Trapecio/Rectangulo-------------------------------------

    //LineAArt de la figura
    TraRecLine.lineStyle(2, 0x000000, 1);
    TraRecLine.moveTo(650, 80);
    TraRecLine.lineTo(780, 80);
    TraRecLine.lineTo(780, 210);
    TraRecLine.lineTo(520, 210);
    TraRecLine.closePath();
    
    //lineas de medicion
    //b
    TraRecLine.moveTo(650, 55);
    TraRecLine.lineTo(780, 55);
    TraRecLine.moveTo(650, 40);
    TraRecLine.lineTo(650, 70);
    TraRecLine.moveTo(780, 40);
    TraRecLine.lineTo(780, 70);

    //a
    TraRecLine.moveTo(800, 80);
    TraRecLine.lineTo(800, 210);
    TraRecLine.moveTo(790, 80);
    TraRecLine.lineTo(810, 80);
    TraRecLine.moveTo(790, 210);
    TraRecLine.lineTo(810, 210);

    //B
    TraRecLine.moveTo(520, 235);
    TraRecLine.lineTo(780, 235);
    TraRecLine.moveTo(520, 220);
    TraRecLine.lineTo(520, 250);
    TraRecLine.moveTo(780, 220);
    TraRecLine.lineTo(780, 250);

    TraRecLine.lineStyle(4, 0x111c74, 1);
    TraRecLine.moveTo(370, 115);
    TraRecLine.lineTo(510, 115);

    TraRecLine.endFill();


    //Figura1 roja
    TraRec1.beginFill(0xd01919);
    TraRec1.moveTo(650, 80);
    TraRec1.lineTo(780, 80);
    TraRec1.lineTo(780, 210);
    TraRec1.lineTo(520, 210);
    TraRec1.closePath();
    TraRec1.endFill();


    //Figura2 naranja
    TraRec2.beginFill(0xf37f54);
    TraRec2.moveTo(130, 0);
    TraRec2.lineTo(260, 0);
    TraRec2.lineTo(260, 130);
    TraRec2.lineTo(0, 130);
    TraRec2.closePath();
    TraRec2.endFill();
    TraRec2.x = 520;
    TraRec2.y = 80;


    //Lineas de medicion 2
    TraRecLine2.lineStyle(2, 0x000000, 1);
    TraRecLine2.moveTo(390, 585);
    TraRecLine2.lineTo(780, 585);

    TraRecLine2.moveTo(390, 570);
    TraRecLine2.lineTo(390, 600);

    TraRecLine2.moveTo(520, 570);
    TraRecLine2.lineTo(520, 600);
    TraRecLine2.moveTo(780, 570);
    TraRecLine2.lineTo(780, 600);

    TraRecLine2.moveTo(380, 430);
    TraRecLine2.lineTo(380, 560);
    TraRecLine2.moveTo(370, 430);
    TraRecLine2.lineTo(390, 430);
    TraRecLine2.moveTo(370, 560);
    TraRecLine2.lineTo(390, 560);

    TraRecLine2.endFill();



    //---------------------------------------------------------------------------------
    //------------------------------------Rombo----------------------------------------
    
    //Lineas 1

    RomboLine1.lineStyle(1, 0x000000, 1);
    RomboLine1.moveTo(180,150);
    RomboLine1.lineTo(350,150);
    RomboLine1.lineTo(350,500);
    RomboLine1.lineTo(180,500);
    RomboLine1.closePath();
    
    RomboLine1.moveTo(265,150);
    RomboLine1.lineTo(350,325);
    RomboLine1.lineTo(265,500);
    RomboLine1.lineTo(180,325);
    RomboLine1.closePath();
    RomboLine1.endFill();

    RomboLine1.lineStyle(2, 0x000000, 1);
    RomboLine1.moveTo(160,150);
    RomboLine1.lineTo(160,500);
    RomboLine1.moveTo(150,150);
    RomboLine1.lineTo(170,150);
    RomboLine1.moveTo(150,500);
    RomboLine1.lineTo(170,500);

    RomboLine1.moveTo(180,520);
    RomboLine1.lineTo(350,520);
    RomboLine1.moveTo(180,510);
    RomboLine1.lineTo(180,530);
    RomboLine1.moveTo(350,510);
    RomboLine1.lineTo(350,530);
    RomboLine1.endFill();

    //Lineas2
    RomboLine2.lineStyle(2, 0x000000, 1);
    for(i = 150;i<500;){
        RomboLine2.moveTo(700, i);
        i+=12;
        RomboLine2.lineTo(700, i);
        i+=12;
    }

    for(i = 150;i<500;){
        RomboLine2.moveTo(1000, i);
        i+=12;
        RomboLine2.lineTo(1000, i);
        i+=12;
    }

    for(i = 615;i<785;){
        RomboLine2.moveTo(i, 325);
        i+=12;
        RomboLine2.lineTo(i, 325);
        i+=12;
    }

    for(i = 915;i<1085;){
        RomboLine2.moveTo(i, 325);
        i+=12;
        RomboLine2.lineTo(i, 325);
        i+=12;
    }

    RomboLine2.moveTo(1110,150);
    RomboLine2.lineTo(1110,500);
    RomboLine2.moveTo(1100,150);
    RomboLine2.lineTo(1120,150);
    RomboLine2.moveTo(1100,500);
    RomboLine2.lineTo(1120,500);

    RomboLine2.moveTo(915,520);
    RomboLine2.lineTo(1085,520);
    RomboLine2.moveTo(915,510);
    RomboLine2.lineTo(915,530);
    RomboLine2.moveTo(1085,510);
    RomboLine2.lineTo(1085,530);
    RomboLine2.endFill();

    RomboLine2.lineStyle(1.3, 0x1522d8, 1);
    RomboLine2.moveTo(870,95);
    RomboLine2.lineTo(1180,95);
    RomboLine2.endFill();

    //Dibujamos los triangulos
    trianngulo1.beginFill(0xeb764b);
    trianngulo1.moveTo(180,150);
    trianngulo1.lineTo(265,150);
    trianngulo1.lineTo(180,325);
    trianngulo1.closePath();

    trianngulo2.beginFill(0xeb764b);
    trianngulo2.moveTo(265,150);
    trianngulo2.lineTo(350,150);
    trianngulo2.lineTo(350,325);
    trianngulo2.closePath();

    trianngulo3.beginFill(0xeb764b);
    trianngulo3.moveTo(350,325);
    trianngulo3.lineTo(350,500);
    trianngulo3.lineTo(265,500);
    trianngulo3.closePath();

    trianngulo4.beginFill(0xeb764b);
    trianngulo4.moveTo(265,500);
    trianngulo4.lineTo(180,500);
    trianngulo4.lineTo(180,325);
    trianngulo4.closePath();
    trianngulo4.endFill();

    //Dibujamos el Rombo
    Rombo.beginFill(0xeb764b);
    Rombo.moveTo(265,150);
    Rombo.lineTo(350,325);
    Rombo.lineTo(265,500);
    Rombo.lineTo(180,325);
    Rombo.closePath();
    Rombo.endFill();

    //---------------------------------------------------------------------------------
    //------------------------------------Trapecio----------------------------------------

    //Lineas 1
    TrapecioLinea1.lineStyle(1.1, 0x000000, 1);
    TrapecioLinea1.moveTo(350,90);
    TrapecioLinea1.lineTo(550,90);
    TrapecioLinea1.lineTo(750,240);
    TrapecioLinea1.lineTo(150,240);
    TrapecioLinea1.closePath();

    TrapecioLinea1.lineStyle(2, 0x000000, 1);
    TrapecioLinea1.moveTo(350,70);
    TrapecioLinea1.lineTo(550,70);
    TrapecioLinea1.moveTo(350,85);
    TrapecioLinea1.lineTo(350,55);
    TrapecioLinea1.moveTo(550,85);
    TrapecioLinea1.lineTo(550,55);
    
    TrapecioLinea1.moveTo(770,90);
    TrapecioLinea1.lineTo(770,240);
    TrapecioLinea1.moveTo(760,90);
    TrapecioLinea1.lineTo(780,90);
    TrapecioLinea1.moveTo(760,240);
    TrapecioLinea1.lineTo(780,240);

    TrapecioLinea1.moveTo(750,260);
    TrapecioLinea1.lineTo(150,260);
    TrapecioLinea1.moveTo(750,275);
    TrapecioLinea1.lineTo(750,245);
    TrapecioLinea1.moveTo(150,275);
    TrapecioLinea1.lineTo(150,245);
    TrapecioLinea1.endFill();

    TrapecioLinea1.lineStyle(1.5, 0x1522d8, 1);
    TrapecioLinea1.moveTo(1090,55);
    TrapecioLinea1.lineTo(1230,55);
    TrapecioLinea1.endFill();

    //Linea 2
    TrapecioLinea2.lineStyle(2, 0x000000, 1);
    TrapecioLinea2.moveTo(950,560);
    TrapecioLinea2.lineTo(150,560);
    TrapecioLinea2.moveTo(750,575);
    TrapecioLinea2.lineTo(750,545);
    TrapecioLinea2.moveTo(950,575);
    TrapecioLinea2.lineTo(950,545);
    TrapecioLinea2.moveTo(150,575);
    TrapecioLinea2.lineTo(150,545);

    TrapecioLinea2.moveTo(130,390);
    TrapecioLinea2.lineTo(130,540);
    TrapecioLinea2.moveTo(120,390);
    TrapecioLinea2.lineTo(140,390);
    TrapecioLinea2.moveTo(120,540);
    TrapecioLinea2.lineTo(140,540);
    TrapecioLinea2.endFill();

    

    //Trapecios

    Trapecio1.beginFill(0x6447aa);
    Trapecio1.moveTo(350,90);
    Trapecio1.lineTo(550,90);
    Trapecio1.lineTo(750,240);
    Trapecio1.lineTo(150,240);
    Trapecio1.closePath();

    Trapecio2.beginFill(0x4798aa);

    Trapecio2.moveTo(-100,-90);
    Trapecio2.lineTo(100,-90);
    Trapecio2.lineTo(300,60);
    Trapecio2.lineTo(-300,60);
    Trapecio2.closePath();
    Trapecio2.x = 450;
    Trapecio2.y = 180;
}



const botonTexture = PIXI.Texture.from('Imagenes/Boton.png');
const boton = new PIXI.Sprite(botonTexture);

// habilitar el boton para que sea interactivo ... esto le permitirá responder a eventos táctiles y del mouse
boton.interactive = true;
// este modo de botón significará que el cursor de la mano aparece cuando pasa el mouse sobre el botón 
boton.buttonMode = true;

// center the boton's anchor point
boton.anchor.set(0.5);
boton.scale.set(3);

boton
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd);


boton.x = 1250;
boton.y = 200;
boton.height = 60;
boton.width = 170;


// add it to the stage
app.stage.addChild(boton);

function onDragStart(event) {
    console.log("click");
    this.alpha = 0.5;
    switch(figuraTurno){
        case 0:
            t1.restart();
            console.log(figuraTurno);
            break;
        case 1:
            t2.restart();
            console.log(figuraTurno);
            break;
        case 2:
            t3.restart();
            console.log(figuraTurno);
            break;
        case 3:
            t4.restart();
            console.log(figuraTurno);
            break;
    }
}

function onDragEnd(event) {
    this.alpha = 1;
}