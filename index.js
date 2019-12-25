
function load(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
    document.getElementById("ip").innerHTML= JSON.parse(this.responseText).ip;
    }
};
xhttp.open("GET","https://jsonip.com/",true);
xhttp.send();
}

load();