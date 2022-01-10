function leerArchivo(cadena)
{
    var archivo = new XMLHttpRequest();
    var texto;
    archivo.open("GET", cadena, false);
    archivo.onreadystatechange = () =>{
        if(archivo.readyState === 4)
        {
            if(archivo.status === 200 || archivo.status == 0)
            {
                texto = archivo.responseText;
            }
        }
    }
    archivo.send(null);
    return texto;
}

//funcion que lee los numeros de la cadena
function leerNumeros(cadena){
    let i = 0;
    let j = 1;
    let NumBar = ['','','','',''];
    let cont = 0;

    while(cadena[i] != '\n'){
        i++;
    }
    i++;

    while(cont != 5){
        //caso 1  numero incial
        //caso 2  numero para el ejercicio
        //caso 3  fin del numeor

        switch(j){
            case 1:
                if(cadena[i] == '|'){
                    j = 2;
                }
                break;
            case 2:
                
                if(cadena[i] == ';'){
                    j = 3;
                }else{
                    NumBar[cont]+=cadena[i];
                }
                break;
            case 3:
                NumBar[cont] = parseInt(NumBar[cont]);
                if (NumBar[cont] > 216000){
                    NumBar[cont] = 215999;
                }
                cont += 1;
                j = 1;
                break;
        }

        i++;
    }
    return NumBar;
}
