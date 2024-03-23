let prodpic = document.getElementById("prodim3");
let inputFile = document.getElementById("inputfile");

inputFile.onchange = function(){
    prodpic.src = URL.createObjectURL(inputFile.files[0])
}