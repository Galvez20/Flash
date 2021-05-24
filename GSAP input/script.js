var tl = gsap.timeline({repeat: 0, repeatDelay: 0});

var inicio = 2;

function main()
{

    let CordX = document.getElementById('inputX').value == "" ? 0 : document.getElementById('inputX').value ;
    let CordY = document.getElementById('inputY').value == "" ? 0 : document.getElementById('inputY').value ;
    let Size = document.getElementById('inputsize').value == "" ? 5 : document.getElementById('inputsize').value ;
    let Rot = document.getElementById('inputRotation').value == "" ? 0 : document.getElementById('inputRotation').value ;

    
    console.log(CordX);
    console.log(CordY);
    console.log(Size);
    console.log(Rot);
    tl.to(".figura", {duration: 1.5, rotation: Rot,  y: CordY*5, x:CordX*5, scale:Size*.2});
}