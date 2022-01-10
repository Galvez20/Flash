//numeroB -> Arreglo de enteros
//numeroA -> Arreglo de string
function comparar(numeroB, numeroA){
    let num2Integer=0;
    let num1=0, num2String='', i=0;
    let m=3600;
    while(i < numeroA.length){
        if(i < 3){
            num1 += m * numeroB[i];
            m = m/60;
        }
        num2String+= numeroA[i];
        i++;
    }
    num2Integer = parseInt(num2String);

    console.log('Numero babilonico: ' + num1);
    console.log('Numero Normal: '+ num2Integer);
    if(num1 == num2Integer){
        return true;
    }
    return false;
}