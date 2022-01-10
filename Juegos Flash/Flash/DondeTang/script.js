var areaAbarcada = '50%';
var color;
var colorNom;
var puntaje = document.getElementById("PuntajeJuego");
var nbuenas = 0;

const figuras = [];

figuras["verde"] = ["romboVerde",0];
figuras["rosa"] = ["cuadradoRosa",0];
figuras["azul"] = ["triAzul",0];
figuras["rojo"] = ["triRojo1","triRojo2",0,0];
figuras["amarillo"] = ["triAmarillo1",'triAmarillo2',0,0];


gsap.to('.fondoGanar',{duration: 0, opacity: 0});
var fondo = document.getElementById('youWin');

Draggable.create( ".circulo", {                //Asignamos la clase de las fichas para movelos         

    type: "x,y",  
    bounds:".svg1",                             //las fichas no pueden salir desde su espacio
    
    onPress:function(e){                  //funcion que es llamada tras detecta un click del mouse a la figura
        color = this.target.attributes['fill'].value;
        colorNom = this.target.attributes['data-color'].value;
        console.log(colorNom);
    },                
    onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento s
        let i = 0;
        let j = 0;
        let fig = '';

        if ( figuras[colorNom].length > 2 ){
            j = 0;
            while(j<2){
                fig = figuras[colorNom][j];

                if( this.hitTest('.'+fig,areaAbarcada ) && figuras[colorNom][j+2] == 0)
                {
                    nbuenas++;
                    puntaje.innerHTML="Buenas: " + nbuenas;
                    figuras[colorNom][j+2] = 1;
                    gsap.to("."+fig,{duration:0, fill:color});
                }
            j++
            }               
        }
        else{

            fig = figuras[colorNom][0];
 
            if( this.hitTest('.'+fig,areaAbarcada ) && figuras[colorNom][1] == 0)
            {
                nbuenas++;
                puntaje.innerHTML="Buenas: " + nbuenas;
                figuras[colorNom][1] = 1;
                gsap.to("."+fig,{duration:0, fill:color});
            }
        }
        i++
        if (nbuenas>=7){
            fondo.classList.remove("back"); 
            fondo.classList.add("front"); 
            gsap.to('.fondoGanar',{duration: 0, opacity: 1});
        }
        TweenMax.to(this.target,0,{x:0,y:0, rotation:0}); 
    }
});









//------------------------------------------------------------------------------------------------------------------
//Reiniciar el juego
//------------------------------------------------------------------------------------------------------------------

var reiniciarJuego = document.querySelector("#reiniciarJuego");
reiniciarJuego.onclick = () => {
    let listColores = ['verde','rosa','azul','rojo','amarillo'];
    let i=0,j=0;
    while(i<5){
        if (figuras[listColores[i]].length > 2){
            j=0;
            while(j<2){
                gsap.to('.' + figuras[listColores[i]][j],{duration: 0, fill: '#ffffff'});
                figuras[listColores[i]][j+2] = 0;
                j++;
            }
        }else{
            gsap.to('.' + figuras[listColores[i]][0],{duration: 0, fill: '#ffffff'});
            figuras[listColores[i]][1] = 0;
        }
        i++;
    }
    nbuenas = 0;

    fondo.classList.remove("front"); 
    fondo.classList.add("back"); 
    gsap.to('.fondoGanar',{duration: 0, opacity: 0});
    puntaje.innerHTML="Buenas: "
}
