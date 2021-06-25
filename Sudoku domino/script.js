/*Ver https://www.greensock.com/draggable/ y https://greensock.com/docs/v3/GSAP para más detalles */


//Declaracion de las variables

let t1 = gsap.timeline();               //Declara una linea de tiempo
var ficha_x=0,ficha_y=0;                //Guardara la pocicion de la ficha seleccionada

var fichas = [];                        //declaramos un arreglo que tendra la informacion de todas las fichas
//[Grados,pocicionX, PocicionY]
//El primer valor tendra los grados que gira la figura, el segundo y el tersero la pocicion inicial en X y en Y

fichas["0_0"] = [0,0,0];
fichas["1_0"] = [0,0,0];
fichas["2_0"] = [0,0,0]; 
fichas["3_0"] = [0,0,0]; 
fichas["4_0"] = [0,0,0]; 
fichas["5_0"] = [0,0,0]; 
fichas["6_0"] = [0,0,0];  

fichas["1_1"] = [0,0,0]; 
fichas["2_1"] = [0,0,0]; 
fichas["3_1"] = [0,0,0]; 
fichas["4_1"] = [0,0,0]; 
fichas["5_1"] = [0,0,0]; 
fichas["6_1"] = [0,0,0]; 

fichas["2_2"] = [0,0,0]; 
fichas["3_2"] = [0,0,0]; 
fichas["4_2"] = [0,0,0]; 
fichas["5_2"] = [0,0,0]; 
fichas["6_2"] = [0,0,0]; 

fichas["3_3"] = [0,0,0]; 
fichas["4_3"] = [0,0,0]; 
fichas["5_3"] = [0,0,0]; 
fichas["6_3"] = [0,0,0]; 

fichas["4_4"] = [0,0,0]; 
fichas["5_4"] = [0,0,0]; 
fichas["6_4"] = [0,0,0]; 

fichas["5_5"] = [0,0,0]; 
fichas["6_5"] = [0,0,0]; 

fichas["6_6"] = [0,0,0]; 

//Arreglo que tendra la informacion de los rectangulos vacios
var espacios = ['rec1','rec2','rec3','rec4','rec5','rec6','rec7','rec8'];

//Arreglo que indica si el cuadro esta ocupado o no
var espaciosOcupados = [[0,""], [0,""], [0,""], [0,""], [0,""], [0,""], [0,""], [0,""]];

/**
 * 1 -> 4,7
 * 2 -> 4,6
 * 3 -> 5,8
 * 4 -> 1,2
 * 5 -> 3,6
 * 6 -> 5,2
 * 7 -> 8,1
 * 8 -> 7,3
 */


var overlapThreshold = "55%";           //Area minima aceptada

//-----------------------------------------------------------------------------------------------------------------
//-------------------------configuracion para que la figura se pueda mover-----------------------------------------

Draggable.create( ".fichas", {                //Asignamos la clase de las fichas para movelos         
    type: "x,y",                              //tipo de movimiento
    bounds:"svg",                             //las fichas no pueden salir desde su espacio
                    
    onPress:function(e){                  //funcion que es llamada tras detecta un click del mouse a la figura
        
        console.log(this.target.attributes['data-num']);                    //Imprime el dato que tiene la ficha en 'data-num'
        let valor = this.target.attributes['data-num'].value;               //asignamos el valor de la ficha

        if ( fichas[valor][1] == 0 && fichas[valor][2] == 0){                //Checamos si las coordenadas ya han sido asignadas al arreglo
            //console.log(this.target.attributes['data-svg-origin']);
            const numString = this.target.attributes['data-svg-origin'].value;//Le asignamos las pocicion X y Y de la ficha en un string

            fichas[valor][1] = getNumero(numString,0) - 32.5;                 //Asignamos la pocicion X a la ficha
            fichas[valor][2] = getNumero(numString,1) - 64;                   //Asignamos la pocicion Y a la ficha
            //console.log("Pocicion de la ficha");
            //console.log(fichas[valor][1]);
            //console.log(fichas[valor][2]);
            
        }
        let i = 0;
        let ban = 0;

        while  ( i < espacios.length && ban == 0)                               //ciclo que recorre los espacios para las fichas
        {
            if( espaciosOcupados[i][1] == valor){                                 //Checa si la ficha esta en un cuadro
                CuadrosOcupados(i,valor,0);                                        // Si esta, llama la funcion con la opcion de poner libre los espacios necesarios
                ban = 1;
            }
            i++;
        }
    },

    onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento 
        
        let valor = this.target.attributes['data-num'].value;       //Lee el dato de la ficha
        let i = 0;                                                  //declaramos algunas variables
        let ban = 0;
        while  ( i < espacios.length  && ban==0)                               //ciclo que recorre los espacios para las fichas
        {

            if (this.hitTest("." + espacios[i] , overlapThreshold) && espaciosOcupados[i][0] == 0 ){    //si detecta que esta sobre su espacio correspondiente dentro de un % de su area
                                                                                                        // y que el espacio este disponible
                //espaciosOcupados[i][0] = 1 ;                                    //Pone quee el rectangulo esta ocupado
                //espaciosOcupados[i][1] = valor;                                 //pone la ficha que esta en el rectanulo
                CuadrosOcupados(i,valor,1);                                   //poner algunos cuadros ocupados para no amontonarze

                var rec = document.querySelector("." + espacios[i]);    //Debuelve el primer elemeno que tenga esa clase
                
                //console.log("Pocicion del cuadro");
                var X1 = rec.attributes["x"].value+0;                 //Asignamos las pociciones X y Y del elemento
                var Y1 = rec.attributes["y"].value+0;
                //console.log(X1);
                //console.log(Y1);
                if (fichas[valor][0] == 90 || fichas[valor][0] == 270)          //Revisa si la ficha esta en horizontal o vertical para acomodarlo bien
                    t1.to(this.target,0,{x: X1 - fichas[valor][1], y: Y1 -fichas[valor][2] });  
                else
                    t1.to(this.target,0,{x: X1 - fichas[valor][1] + 32 , y: Y1 -fichas[valor][2] -32 }); 
                ban = 1;                    //activamos la bandera para avisar que la ficha esta en un cuadro
            }
            
            i++;
        }

        //console.log(espacios);
        console.log(espaciosOcupados);
        
        if ( ban == 0) { //Si no estaa dentro de un cuadro

            fichas[valor][0] += 90;                     //Las fichas giran

            if (fichas[valor][0] == 360){ 
                fichas[valor][0] = 0;
            }

            t1.to(this.target,0,{rotation:fichas[valor][0]}); 
            TweenMax.to(this.target,0.5,{x:0,y:0}); //la ficha regresa a su lugar de origen
        }
    }
});

//-----------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------Funciones-----------------------------------------

function getNumero(cadena, num) {               //Funcion encargada de devolver un numero
    let i = 0;
    let j = 0;

    while (cadena[i] != ' ' ) {
        i++;
    }

    if (num == 1){
        i++;
        j = i;
        while ( i < cadena.length ) {
            i++
        }
        return parseFloat(cadena.slice(j,i));
    }
    return parseFloat(cadena.slice(0,i));
}

/**
 * 0 -> 4,7
 * 1 -> 4,6
 * 2 -> 5,8
 * 3 -> 1,2
 * 4 -> 3,6
 * 5 -> 5,2
 * 6 -> 8,1
 * 7 -> 7,3
 */

function CuadrosOcupados(num,nombre,bar){ 
    console.log(num);
    let num1=0,num2=0;
    switch (num) {
        case 0:
            num1 = 4;
            num2 = 7;
            break;
        case 1:
            num1 = 4;
            num2 = 6;
            break;
        case 2:
            num1 = 5;
            num2 = 8;
            break;
        case 3:
            num1 = 1;
            num2 = 2;
            break;
        case 4:
            num1 = 3;
            num2 = 6;
            break;
        case 5:
            num1 = 5;
            num2 = 2;
            break;
        case 6:
            num1 = 8;
            num2 = 1;
            break;
        case 7:
            num1 = 7;
            num2 = 3;
            break;
        default:
            break;
    }
    num1--;
    num2--;
    console.log(num1,num2,num)
    if (bar == 1){
        espaciosOcupados[num1][0]++;
        espaciosOcupados[num2][0]++;
        espaciosOcupados[num][0]++;
        espaciosOcupados[num1][1] = nombre+"-";
        espaciosOcupados[num2][1] = nombre+"-";
        espaciosOcupados[num][1] = nombre;
    } else{
        espaciosOcupados[num1][0]--;
        espaciosOcupados[num2][0]--;
        espaciosOcupados[num][0]--;
        if (espaciosOcupados[num1][1] == nombre+"-"){
            espaciosOcupados[num1][1] = "";
        }
        if (espaciosOcupados[num2][1] == nombre+"-"){
            espaciosOcupados[num2][1] = "";
        }
        espaciosOcupados[num][1] = "";
    }
}
