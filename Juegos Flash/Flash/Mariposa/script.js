var areaAbarcada = "30%";

Draggable.create( ".figurasMov", {                //Asignamos la clase de las fichas para movelos         
    type: "x,y",                              //tipo de movimiento                         //las fichas no pueden salir desde su espacio
                    
    onPress:function(e){                  //funcion que es llamada tras detecta un click del mouse a la figura
        console.log('press');
    },

    onRelease:function(e){   // funcion que es llamada cuando el mouse deja de precionar el elemento 
        // checa si el numero esta en uno de los cuadros correctos
        if( this.hitTest(".figBase1", areaAbarcada)){
            console.log('Siiii');
        }
        else{
            console.log('Nooo');
        }
        
        
        TweenMax.to(this.target,0.5,{x:0,y:0, rotation:0}); 
        
    }
});