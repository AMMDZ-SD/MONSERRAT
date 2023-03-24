function ajusta() {
    var horizontales = document.querySelectorAll("#graficos .horizontal"); 
    var arcos = document.querySelectorAll("#graficos .arco"); 
    var torres = document.querySelectorAll("#graficos #vertical .torre"); 
    
    var elem = 0; 
    while(elem < horizontales.length) {
    horizontales[elem].style.transition = "background-size 3s ease-in-out 2s"; 
    horizontales[elem].style.backgroundSize = horizontales[elem].innerHTML+" 100%"; 
    elem++; 
    }; 
    
    elem = 0; 
    while(elem<torres.length) {
    torres[elem].style.transition = "background-size 1s ease-out "+(elem+4)+"s"; 
    torres[elem].style.backgroundSize = "80% "+ torres[elem].innerHTML; 
    elem++; 
    }; 
    
    elem = 0; 
    while(elem<arcos.length) {
    arcos[elem].style.backgroundImage = "radial-gradient(circle at bottom, white 45%, transparent 47%, transparent 67%, white 70%), linear-gradient("
    + (parseInt(arcos[elem].innerHTML) / 100) * 180 +
    "deg, green 50%, transparent 50%)"; 
    elem++; 
    }; 
    
    }
    
    onload = ajusta; 