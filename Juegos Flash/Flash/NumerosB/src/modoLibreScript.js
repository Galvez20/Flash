//Variables paraa mover las fichas
var id;             //Guardara el ID del numero que esta moviendo
var a;              //Guarda los datos de la etiqueta para agregar o eliminar clases
var convBox;        //Guarda las etiquetas para agregar o eliminar estilos
var TipoNumero;     //Guardd el tipo de numero que fue agarrado

var posicion = 1;

var idBox;
var idBoxB = ["BoxB1","BoxB2","BoxB3"];
var idBoxA = ["BoxA1","BoxA2","BoxA3","BoxA4","BoxA5","BoxA6"];

var idBoxBNum = [];
//valor del numero| clase de la imagen| bandera de aceptacion| hay un numero en ese cuadro
idBoxBNum["BoxB1"] = [0,'',0,0];
idBoxBNum["BoxB2"] = [0,'',0,0];
idBoxBNum["BoxB3"] = [0,'',0,0];

var idBoxANum = [];
//valor string| clase de la imagen| bandera de aceptacion| hay un numero en ese cuadro
idBoxANum["BoxA1"] = ['','',0,0];
idBoxANum["BoxA2"] = ['','',0,0];
idBoxANum["BoxA3"] = ['','',0,0];
idBoxANum["BoxA4"] = ['','',0,0];
idBoxANum["BoxA5"] = ['','',0,0];
idBoxANum["BoxA6"] = ['','',0,0];

var NumBoxBab = [0,0,0];
var NumBoxAra = ['0','0','0','0','0','0'];

var areaOcupada = "50%";


Draggable.create( ".numMov", {                //Asignamos la clase de las fichas para poder movelos         
    type: "x,y",                              //tipo de movimiento
    bounds:".cuerpo",                         //las fichas no pueden salir desde su espacio
                    
    onDrag:function(e){                  //funcion que es llamada cuando una figura es movida

        let i = 0;                      //tendra la posicion del cuadro
        TipoNumero = this.target.attributes['type-num'].value;       //Checa que tipo de numero es la ficha (babilonico o Arabigo)
        id = this.target.attributes['id'].value;                    //Recibimos el Id del la ficha

        //Agregamos la clase de la ficha agarrada
        a = document.getElementById(id);
        a.classList.add("grap");                                    
        
        //checa si es un numero babilonico o no
        if(TipoNumero == "B"){
            //checa si la ficha esta ensima de uno de los cuadro blancos
            while  ( i < idBoxB.length){
                
                idBox = document.getElementById(idBoxB[i]);
                if(this.hitTest("#" + idBoxB[i] , areaOcupada)){ //checa si hay un numero babilonico o no
  
                    //Guardamos los datos
                    posicion = i;                                                      //Guarda la posicio que fue colocado el numero
                    idBoxBNum[idBoxB[i]][0] = parseInt(this.target.attributes['data-num'].value);      //Guardamos el numero de la ficha en entero
                    idBoxBNum[idBoxB[i]][2] = 1;                                                       //Bandera que avisa si una ficha ha sido colodado en un cuadro
                    idBox.classList.add("putImagen");               //Añademos la clase para el cuadro
                }
                else{
                    //pone todo en cero y elimina la clase
                    idBoxBNum[idBoxB[i]][0] = 0;
                    idBoxBNum[idBoxB[i]][2] = 0;
                    idBox.classList.remove("putImagen");
                }
                i++;
            }
        }else{
            while  ( i < idBoxA.length){
                idBox = document.getElementById(idBoxA[i]);
                if(this.hitTest("#" + idBoxA[i] , areaOcupada)){ //checa si hay un numero babilonico o no

                    //Guardamos los datos
                    posicion = i;                                                      //Guarda la posicio que fue colocado el numero
                    idBoxANum[idBoxA[i]][0] = this.target.attributes['data-num'].value;      //Guardamos el numero de la ficha en entero
                    idBoxANum[idBoxA[i]][2] = 1;                                                       //Bandera que avisa si una ficha ha sido colodado en un cuadro
                    idBox.classList.add("putImagen");               //Agrega el estilo para resaltar el cuadro
                }
                else{

                    //pone todo en cero y elimina el estilo
                    idBoxANum[idBoxA[i]][0] = 0;
                    idBoxANum[idBoxA[i]][2] = 0;
                    idBox.classList.remove("putImagen");
                }
                i++;
            }
        }

    },
    onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento

        if (idBoxANum[idBoxA[posicion]][2] == 1)         //checa si la ficha ha sido asignado en su cuardo correspondiente (numero normal)
        {

            idBoxANum[idBoxA[posicion]][2] = 0; 
            NumBoxAra[posicion] = idBoxANum[idBoxA[posicion]][0];       //Guardamos el valor de la ficha asignada en el cuadro correspondiente
            convBox = document.getElementById(idBoxA[posicion]);         //Obtiene la etiqueta del cuadro

            if (idBoxANum[idBoxA[posicion]][3] == 0){                    //checa si no hay un numero en el respectivo cuadro

                idBoxANum[idBoxA[posicion]][3] = 1 ;                     //actiba la banera, diciendo que hay un nuemro en el cuadro
                idBoxANum[idBoxA[posicion]][1] = 'n'+ NumBoxAra[posicion];     //guarda el nombre de la clase con su numero

                convBox.classList.add( idBoxANum[idBoxA[posicion]][1]);          //agregamos las clases para mostrar el numero en el cuadro y poder mover el cuadro
                convBox.classList.add( "movNum");
                crearMov();     //Creamos un Draggable para poer mover el cuadro con su numero

            }else{  //Si hay un numero
                convBox.classList.remove(idBoxANum[idBoxA[posicion]][1]);    //Elimina la imagen del anterior numero
                
                //agregar una clase con el nuevo numero
                idBoxANum[idBoxA[posicion]][1] = 'n'+NumBoxAra[posicion];
                convBox.classList.add(idBoxANum[idBoxA[posicion]][1]);
            }

            console.log('Posiciom: ' + posicion + ' | ' + idBoxANum[idBoxA[posicion]]);
            console.log('Numeros: ' + NumBoxAra);
            
        }
        else if(posicion <= 2){
            if (idBoxBNum[idBoxB[posicion]][2] == 1)         //checa si la ficha con el numero babilonico ha sido asignado en su cuardo correspondiente
            {
                idBoxBNum[idBoxB[posicion]][2] = 0;
                NumBoxBab[posicion] = idBoxBNum[idBoxB[posicion]][0];
                convBox = document.getElementById(idBoxB[posicion]);         //Obtiene la etiqueta del cuadro

                if (idBoxBNum[idBoxB[posicion]][3] == 0){                    //checa si hay un numero en el respectivo cuadro

                    idBoxBNum[idBoxB[posicion]][3] = 1 ;                     //actiba la banera, diciendo que hay un nuemro en el cuadro
                    idBoxBNum[idBoxB[posicion]][1] = 'img'+ NumBoxBab[posicion];     //guarda el nombre de la clase con su numero

                    convBox.classList.add( idBoxBNum[idBoxB[posicion]][1]);          //agregamos las clases para mostrar el numero en el cuadro y habilitar moverlos
                    convBox.classList.add( "movNum");
                    crearMov(); //Creamos un Draggable para poer mover el cuadro con su numero

                }else{
                    convBox.classList.remove(idBoxBNum[idBoxB[posicion]][1]);    //renueve la imagen del anterior numero
                
                    //agregar una clase con el nuevo numero
                    idBoxBNum[idBoxB[posicion]][1] = 'img'+NumBoxBab[posicion];
                    convBox.classList.add(idBoxBNum[idBoxB[posicion]][1]);

                }
                console.log('Posiciom: ' + posicion + ' | ' + idBoxBNum[idBoxB[posicion]]);
                console.log('Numeros: ' + NumBoxBab);
            }
        }
        
        //Esta parrte elimina los estilos que se le dioa las fihcas y a los cuadros
        a.classList.remove("grap");
        
        if(TipoNumero == "B") 
            idBox = document.getElementById(idBoxB[posicion]);
        else 
            idBox = document.getElementById(idBoxA[posicion]);      
        
        idBox.classList.remove("putImagen");
        TweenMax.to(this.target,0,{x:0,y:0}); //la ficha regresa a su lugar de origen
    }
});


var idBoxB2 = ["BoxB11","BoxB12","BoxB13"];
var idBoxA2 = ["BoxA11","BoxA12","BoxA13","BoxA14","BoxA15","BoxA16"];
var estilodId;
var j = 0;

//Funciones

function crearMov(){
    Draggable.create( ".movNum", {                //Asignamos la clase de las fichas para movelos         
        type: "x,y",                              //tipo de movimiento
        bounds:".cuerpo",                         //las fichas no pueden salir desde su espacio
        onDrag:function(e){                  //funcion que es llamada cuano el mouse mueve la figura
            let i = 0;
            let tipoCuadro = 0;
            
            TipoNumero = this.target.attributes['type-num'].value;       //Guarda tipo de numero es la ficha (babilonico o Arabigo)
            
            id = this.target.attributes['id'].value;
            a = document.getElementById(id);
            a.classList.add("grap"); 
            a.classList.add("grapBab");
            
            if(TipoNumero == "B"){                  //Si agarro un numero babilonico
                while  ( i < idBoxB2.length){
                    tipoCuadro = this.target.attributes['type-cuadro'].value ;
                    if(tipoCuadro == i){        //Si esta sobre su cuadro o no, para guardar los valores de la ficha
                        idBox = document.getElementById(idBoxB2[i]);
                    }else{
                        idBox = document.getElementById(idBoxB[i]);
                    }

                    if(this.hitTest("#" + idBoxB2[i] , areaOcupada)){ //checa si hay un numero babilonico o no
      
                        //Guardamos los datos
                        posicion = i;
                        estilodId = idBox;
                        idBoxBNum[idBoxB[i]][0] = NumBoxBab[tipoCuadro];      
                        idBoxBNum[idBoxB[i]][2] = 1;                    //Bandera que avisa si una ficha ha sido colodado en un cuadro
                        idBox.classList.add("putImagen");               //Añademos la clase para el cuadro
                    }
                    else{
                        //pone todo en cero y elimina el estilo
                        idBoxBNum[idBoxB[i]][0] = 0;
                        idBoxBNum[idBoxB[i]][2] = 0;
                        idBox.classList.remove("putImagen");
                    }
                    i++;
                }
            }else{  
                while  ( i < idBoxA2.length){
                    tipoCuadro = this.target.attributes['type-cuadro'].value ;
                    if(tipoCuadro == i){        //Si esta sobre su cuadro
                        idBox = document.getElementById(idBoxA2[i]);
                    }else{
                        idBox = document.getElementById(idBoxA[i]);
                    }

                    if(this.hitTest("#" + idBoxA2[i] , areaOcupada)){ //checa si hy un numero babilonico o no
      
                        //Guardamos los datos
                        posicion = i;
                        estilodId = idBox;
                        idBoxANum[idBoxA[i]][0] = NumBoxBab[tipoCuadro];      
                        idBoxANum[idBoxA[i]][2] = 1;                    //Bandera que avisa si una ficha ha sido colodado en un cuadro
                        idBox.classList.add("putImagen");               //Añademos la clase para el cuadro
                    }
                    else{
                        //pone todo en cero y elimina la clase
                        idBoxANum[idBoxA[i]][0] = 0;
                        idBoxANum[idBoxA[i]][2] = 0;
                        idBox.classList.remove("putImagen");
                    }
                    i++;
                }
            }
        },

        onRelease:function(e){      // funcion que es llamada cuando el mouse deja de precionar el elemento

            let posicionAnterior = this.target.attributes['type-cuadro'].value;  //Guarda la pocicion original del cuadro
            if (TipoNumero == "B")  //si el cuaro que se movio es de un numero Babilonico
            {
                if (idBoxBNum[idBoxB[posicion]][2] == 1){         //checa si la ficha ha sido asignado en su cuardo correspondiente
                    idBoxBNum[idBoxB[posicion]][2] = 0;
                    //checa si el numero fue puesto en un cuadro diferente
                    if(posicionAnterior != posicion){
                        console.log('Entro');
                        convBox = document.getElementById(idBoxB[posicionAnterior]);         //Obtiene la etiqueta del cuadro para eliminar el numero
                        convBox.classList.remove( idBoxBNum[idBoxB[posicionAnterior]][1]);
                        convBox.classList.remove("movNum");
    
                        this.kill();    //Elimina la opcion de eliminar el cuadro
    
                        convBox = document.getElementById(idBoxB[posicion]);              //Obtiene la etiqueta del cuadro para agregar el numero
                        if (NumBoxBab[posicion] != 0){          //Si el cuadro tiene un numero
                            convBox.classList.remove( idBoxBNum[idBoxB[posicion]][1]);
                        }else{
                            convBox.classList.add( "movNum");
                            crearMov();
                        }
                        convBox.classList.add( idBoxBNum[idBoxB[posicionAnterior]][1]);     //Agregamos el numero colocado
                        
                        idBoxBNum[idBoxB[posicion]][1] = idBoxBNum[idBoxB[posicionAnterior]][1];
                        idBoxBNum[idBoxB[posicion]][3] = 1;
    
                        idBoxBNum[idBoxB[posicionAnterior]][1] = '';                 //Eliminamos la clase guardada en el arreglo
                        idBoxBNum[idBoxB[posicionAnterior]][3] = 0;                  //desactivamos la bandera
    
                        NumBoxBab[posicion] = NumBoxBab[posicionAnterior];
                        NumBoxBab[posicionAnterior] = 0;
    
                    }
                }
                else{
                    this.kill();    //Elimina la opcion de eliminar el cuadro
                    convBox.classList.remove("movNum");
                    console.log('No entro');
    
                    //Eliminamos el numero del cuadro
                    convBox = document.getElementById(idBoxB[posicionAnterior]);         //Obtiene la etiqueta del cuadro
                    convBox.classList.remove( idBoxBNum[idBoxB[posicionAnterior]][1]);
                    idBoxBNum[idBoxB[posicionAnterior]][1] = '';                 //Eliminamos la clase guardada en el arreglo
                    idBoxBNum[idBoxB[posicionAnterior]][3] = 0;                  //desactivamos la bandera
                    NumBoxBab[posicionAnterior] = 0;
    
                }  
                console.log('posicion anterior: '+ posicionAnterior +' | ' + idBoxBNum[idBoxB[posicionAnterior]]);
                console.log('Posiciom: ' + posicion + ' | ' + idBoxBNum[idBoxB[posicion]]);
                console.log('Numeros: ' + NumBoxBab);

            } else{

                if (idBoxANum[idBoxA[posicion]][2] == 1){         //checa si la ficha ha sido asignado en su cuardo correspondiente
            
                    idBoxANum[idBoxA[posicion]][2] = 0;
                    //checa si el numero fue puesto en un cuadro diferente
                    if(posicionAnterior != posicion){
                        console.log('Entro');
                        convBox = document.getElementById(idBoxA[posicionAnterior]);         //Obtiene la etiqueta del cuadro para eliminar el numero
                        convBox.classList.remove( idBoxANum[idBoxA[posicionAnterior]][1]);
                        convBox.classList.remove("movNum");
    
                        this.kill();
    
                        convBox = document.getElementById(idBoxA[posicion]);              //Obtiene la etiqueta del cuadro para agregar el numero
                        if (idBoxANum[idBoxA[posicion]][3] != 0){                           //checa si hay un numero en su cuadro
                            convBox.classList.remove( idBoxANum[idBoxA[posicion]][1]);      //Elimina la imagen del numero
                        }else{
                            convBox.classList.add( "movNum");
                        }
                        convBox.classList.add( idBoxANum[idBoxA[posicionAnterior]][1]);
                        
                        crearMov();
    
                        idBoxANum[idBoxA[posicion]][1] = idBoxANum[idBoxA[posicionAnterior]][1];
                        idBoxANum[idBoxA[posicion]][3] = 1;
    
                        idBoxANum[idBoxA[posicionAnterior]][1] = '';                 //Eliminamos la clase guardada en el arreglo
                        idBoxANum[idBoxA[posicionAnterior]][3] = 0;                  //desactivamos la bandera
    
                        NumBoxAra[posicion] = NumBoxAra[posicionAnterior];
                        NumBoxAra[posicionAnterior] = 0;
    
                    }
                }
                else{
                    this.kill();
                    convBox.classList.remove("movNum");
                    console.log('No entro');
    
                    //Eliminamos el numero del cuadro
                    convBox = document.getElementById(idBoxA[posicionAnterior]);         //Obtiene la etiqueta del cuadro
                    convBox.classList.remove( idBoxANum[idBoxA[posicionAnterior]][1]);
                    idBoxANum[idBoxA[posicionAnterior]][1] = '';                 //Eliminamos la clase guardada en el arreglo
                    idBoxANum[idBoxA[posicionAnterior]][3] = 0;                  //desactivamos la bandera
                    NumBoxAra[posicionAnterior] = 0;
    
                }  
    
                console.log('posicion anterior: '+ posicionAnterior +' | ' + idBoxANum[idBoxA[posicionAnterior]]);
                console.log('Posiciom: ' + posicion + ' | ' + idBoxANum[idBoxA[posicion]]);
                console.log('Numeros: ' + NumBoxAra);
            }
            
            TweenMax.to(this.target,0,{x:0,y:0}); //la ficha regresa a su lugar de origen
            a.classList.remove("grap"); 
            a.classList.remove("grapBab");  

            estilodId.classList.remove("putImagen");
                   
        }
    });
}


var banderaCorrecto = 0;
var tl = gsap.timeline({paused: true});

function boton(){
    tl.restart();
    tl.to(".correcto",{duration: 0, opacity: 1});

    let idCorrrecto = document.getElementById('correct');
    console.log("son pares: " + comparar(NumBoxBab, NumBoxAra));

    if(comparar(NumBoxBab, NumBoxAra) == true){
        if ( banderaCorrecto == 2){
            idCorrrecto.classList.remove("incorrecta");
        }else if ( banderaCorrecto == 1){
            idCorrrecto.classList.remove("correcta");
        }
        banderaCorrecto = 1;
        idCorrrecto.classList.add("correcta");
    } else{
        if ( banderaCorrecto == 1){
            idCorrrecto.classList.remove("correcta");
        } else if ( banderaCorrecto == 2){
            idCorrrecto.classList.remove("incorrecta");
        }
        banderaCorrecto = 2;
        idCorrrecto.classList.add("incorrecta");
    }
    tl.to(".correcto",{duration: 1.5, opacity: 0.999})
    .to(".correcto",{duration: 0, opacity: 0});
}

