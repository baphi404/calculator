var cache;


function addOperation (operation) {
    document.getElementById("result_Area").innerHTML += operation;
}
function calculate_Result () {
    cache =  document.getElementById("result_Area");
    var result = eval(cache.innerHTML); // Berechnung des Ergebnises
    cache.innerHTML = result;   // AUsgabe Ergebnis
}

function delete_Last() {
    cache =  document.getElementById("result_Area");
    if (cache.innerHTML.endsWith(' ')) {  //endet mit Leerzeichen
        cache.innerHTML = cache.innerHTML.slice(0,-3); // Letzte 3 Ziffer löschen
    }    
    else{
        cache.innerHTML = cache.innerHTML.slice(0,-1); // Letzte Zahl löschen
    }
}
function delete_All() {
    cache =  document.getElementById("result_Area");
    cache.innerHTML = cache.innerHTML.slice(0,0); // Alles löschen
}

