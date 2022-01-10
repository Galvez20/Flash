gsap.to('.fondoGanar',{duration:0, opacity:0 });

var tl = gsap.timeline({repeat: 6, yoyo: true, paused: true});
tl.to(".textoFinal", {duration: 1, scale: 1.5});


// Matrizes que tiene las pociciones de todas las figuras
// [X,Y],
//[Rotacion]

const FigurasPosicionMov = [
    //Primer nivel
    [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
    [0,0,0,0,0,0,0],
    //Seguno nivel
    [[-80,-100],[-80,-160],[-80,-160],[-80,-160],[-80,-160],[-80,-160],[-80,-160]],
    [-90,0,0,0,0,0,0],
    //Terser mivel
    [[-700,-160],[-50,-160],[-50,-160],[-50,-160],[-50,-160],[-50,-160],[-50,-160]],
    [0,0,0,0,0,0,0],
    //cuarto nivel
    [[-250,-250],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
    [180,0,0,0,0,0,0]
];

const FigurasPosicionFondo = [
    //Primer juego
    [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
    [0,0,0,0,0,0,0],
    //Seguno juego
    [[-220,200],[20,-160],[20,-160],[20,-160],[20,-160],[20,-160],[20,-160]],
    [180,0,0,0,0,0,0],
    //Terser juego
    [[160,200],[-200,-160],[-200,-160],[-200,-160],[-200,-160],[-200,-160],[-200,-160]],
    [180,0,0,0,0,0,0],
    //cuarto nivel
    [[50,360],[-300,0],[0,-300],[0,-300],[0,-300],[0,-300],[0,-300]],
    [180,0,0,0,0,0,0]
];

const nBuenasPosicion = [[0,0],[0,-80],[0,-80],[0,-30]]
const FigureName = ['Triángulo','Rectángulo','Romboide','Cuadrado'];
const FigureName2 = ['romboide','trapácio','rectángulo','triángulo'];

//guarda los id de las figuras
const FigurasNombres = [
    ['TriGrande1Mov','TriGrande2Mov','TriMedianoMov','CuadradoMov','TriPeque1Mov','TriPeque2Mov','RomboMov'],
    ['TriGrande1Base','TriGrande2Base','TriMedianoBase','CuadradoBase','TriPeque1Base','TriPeque2Base','RomboBase'],
    ['TriGrande1','TriGrande2','TriMediano','Cuadrado','TriPeque1','TriPeque2','Rombo']
]

//guarda la informacion de las figuras que se van a mover
const figuras = [];
figuras ['TriGrande1Mov'] = ['TriGrande1','#c11919',0];
figuras ['TriGrande2Mov'] = ['TriGrande2','#960000',1];
figuras ['TriMedianoMov'] = ['TriMediano','#02e26e',2];
figuras ['CuadradoMov'] = ['Cuadrado','#6e00e5',3];
figuras ['TriPeque1Mov'] = ['TriPeque1','#bf5c00',4];
figuras ['TriPeque2Mov'] = ['TriPeque2','#ef9700',5];
figuras ['RomboMov'] = ['Rombo','#b6d600',6];   


const colorOriginal = ['#aa00ff','#ffb600','#6100ff','#ff5d00','#2200ff','#ff007b','#10ff00'];
const figRotar = [[180,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
const fondos = [];


var areaAbarcada = '50%';
var idFig;                      //guarda el id de la figura obtenida
var nBuenas = 0;                //Contiene el numero de buenas en cada juego
var nivel = 1;                  //Contiene el nivel
//
var fondo = document.getElementById('youWin');
var Puntaje = document.querySelector('#TextNBuenas');
var FiguraNombre = document.querySelector('#FigureName');
var FiguraNombre2 = document.querySelector('#FigureName2');
var FiguraNombre3 = document.querySelector('#FigureName3');
var FiguraNombre4 = document.querySelector('#FigureName4');

Draggable.create( ".FiguraMov", {                //Asignamos la clase de las fichas para movelos         
    type: "x,y",                                 //tipo de movimiento
    bounds:".svg1",                             //las fichas no pueden salir desde su espacio
                    
    onPress:function(e){                  //funcion que es llamada tras detecta un click del mouse a la figura

        idFig = this.target.attributes['id'].value;     //guardamos el id de la figura obtenida
        gsap.to('#'+idFig,{duration:0, rotation:figRotar[nivel-1] [ figuras[idFig][2] ] });     //rotamos la figura
    },

    onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento 

        let i;
        let fig = '';       //obtendra el ID de la figura
        let x,y,rotacion
        let niv = (nivel - 1)*2;

        i = figuras[idFig][2];
        fig = figuras[idFig][0];

        // Si la figura es colocada en su sitio
        if (this.hitTest("#"+fig, areaAbarcada)){

            //aumentamos las buenas
            nBuenas += 1;
            gsap.to("#"+fig,{duration:0, fill:figuras[idFig][1]});
            gsap.to("#"+idFig,0,{duration:0,scale:0 ,opacity: 0});
            Puntaje.innerHTML="Buenas: " + nBuenas;
        }

        // Obtenemos las pociciones y la rotacion origial de las figuras con respecto al nivel en que estamos
        x = FigurasPosicionMov[niv][i][0];
        y = FigurasPosicionMov[niv][i][1];
        rotacion = FigurasPosicionMov[niv + 1][i];

        //la figura regresa a su sitio
        TweenMax.to(this.target,0.5,{x:x ,y:y, rotation:rotacion}); 

        //si todas las figuras son completadas, aparece la pantalla de felicitaciones
        if (nBuenas >= 7){
            fondo.classList.remove("back");
            fondo.classList.add("front");
            gsap.to('.cuerpo',{duration: 0, opacity: 0});
            gsap.to('.fondoGanar',{duration: 0, opacity: 1});

            tl.restart();

            switch (nivel) {
                case 1:
                    gsap.to('#SigJuego',{duration: 0, opacity:1});
                    gsap.to('#reiniciarJuego',{duration: 0, opacity:0});
                    break;

                case 2:
                    gsap.to('#reiniciarJuego',{duration: 0, opacity:1});
                    break;

                case 4:
                    gsap.to('#SigJuego',{duration: 0, opacity:0});
                    break;

                default:
                    break;
            }

        }

    }
});




//------------------------------------------------------------------------------------
//Botones-----------------------------------------------------------------------------
//------------------------------------------------------------------------------------


function colocarFiguras(niv){
    console.log('Nivel: ' + niv);
    let nivelArreglo = (niv - 1)*2;
    let i = 0;
    let x;
    let y;
    let grados;

    while(i < 7){
            
        x=  FigurasPosicionMov[nivelArreglo][i][0];
        y=  FigurasPosicionMov[nivelArreglo][i][1];
        grados=  FigurasPosicionMov[nivelArreglo + 1][i];
        gsap.to('#'+FigurasNombres[0][i],{duration:0, x:x,y:y, rotation:grados});

        gsap.to('#'+FigurasNombres[1][i],{duration:0, x:x,y:y, rotation:grados});

        x=  FigurasPosicionFondo[nivelArreglo][i][0];
        y=  FigurasPosicionFondo[nivelArreglo][i][1];
            
        grados=  FigurasPosicionFondo[nivelArreglo + 1][i];
        gsap.to('#'+FigurasNombres[2][i],{duration:0, x:x,y:y, rotation:grados});
        i++;
    }

    i = 0;
    while (i<FigurasNombres[0].length)
    {
        gsap.to('#' + FigurasNombres[0][i],{duration:0, fill:colorOriginal[i],scale:1 ,opacity:1});
        gsap.to('#' + figuras[FigurasNombres[0][i]][0], {duration:0, fill:'#007fff'});
        i++;
    }

    FiguraNombre.innerHTML=FigureName[niv-1];
    FiguraNombre2.innerHTML=FigureName[niv-1];
    FiguraNombre3.innerHTML=FigureName2[niv-1];
    FiguraNombre4.innerHTML=FigureName[niv-1].toUpperCase();        //los combierte en mayusculas

    //gsap.to('.nBuenas',{duration:0, x:nBuenasPosicion[niv-1][0], y:nBuenasPosicion[niv-1][1]});

    gsap.to('.cuerpo',{duration: 0, opacity: 1});
    gsap.to('.fondoGanar',{duration:0, opacity:0});

    nBuenas = 0;
    fondo.classList.remove("front");
    fondo.classList.add("back");
    Puntaje.innerHTML="Buenas: "
}


//  Botones
var SigJuego = document.querySelector("#SigJuego");
var reiniciar = document.querySelector('#reiniciarJuego')
var inicio = document.querySelector('#InicioJuego');


SigJuego.onclick = () => {
    if (nivel <= 4){
        fondo.classList.remove("fondoGanarN"+nivel);
        nivel ++;
        fondo.classList.add("fondoGanarN"+nivel);
        colocarFiguras(nivel)
    }   
}


reiniciar.onclick = () => {
    colocarFiguras(nivel)
}


inicio.onclick = () => {
    fondo.classList.remove("fondoGanarN"+nivel);
    nivel=1;
    fondo.classList.add("fondoGanarN"+nivel);
    colocarFiguras(nivel) 
}



//Acento en matemáticas
//Acento en el trpecio
//punto en el titulo