function calc(e){

    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var calculo = eval((n1 * n2 * n3.m2)/1000 * n4);
    if(!isNaN(calculo)){
        alert(calculo);
    }else{
        alert("Invalido! use apenas números.")
    }
    function result(){
    var r = document.getElementById("rslt")
    r = alert(calculo)
}

}

function limpar(){
    var f=document.getElementsByClassName("");
    var n1 = f.n1;
    var n2 = f.n2;
    n1.value = "";
    n2.value = "";
}


function calc(e){
    var operacao = e.value;

    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var calculo = eval(n1 * n2);
    if(!isNaN(calculo)){
        alert(calculo);
    }else{
        alert("invalid")
    }
}
function enviar(x){
    var f = document.getElementById("saida")
    var txt = f.txtnome;
    txt.value = xtnome
} 

function limpar(){
    var f=document.getElementById("frm");
    var n1 = f.n1;
    var n2 = f.n2;
    n1.value = "";
    n2.value = "";
}