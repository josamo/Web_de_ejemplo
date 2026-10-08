function escribir(valor){
     let result = document.getElementById("result");

     if(result.value == "0") {
        result.value = valor;
     }
     else{
        result.value = result.value + valor;
     }
}
function borrar(){
    let result = document.getElementById("result");
    result.value = "0";
}
function resolver(){
    let result = document.getElementById("result");
    result.value = eval(result.value);
}
