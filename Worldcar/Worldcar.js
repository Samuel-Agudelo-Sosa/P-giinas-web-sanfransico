var botonbuscar = document.getElementById("botonbuscar");
var oficina = document.getElementById("oficinas");
var date1 = document.getElementById("date1");
var date2 = document.getElementById("date2");
var time1 = document.getElementById("time1");
var time2 = document.getElementById("time2");


botonbuscar.addEventListener("click", function(){
if(date1.value == "" || date2.value == "" || time1.value == "" || time2.value == "")
{
    alert("¡Rellene todos los campos por favor!")
}
else if(seleccionado=="carro"){
    alert("Su vehículo seleccionado fue un " + seleccionado + " encontrado en la oficina: " + oficina.value);
    alert("La fecha para recoger su vehículo es: " + date1.value + ".La hora es " + time1.value);
    alert("La fecha para recoger su vehículo es: " + date2.value + ".La hora es " + time2.value);
    var confirmar = parseInt(prompt("Si estos sun datos marque 1, de lo contrario marque 0"));
    if(confirmar == 1)
    {
        window.open("productos.html","_self");
}
else
{
    alert("Si estos no son sus datos actualizelos a continuación")
}
    }


})


var seleccionado = "carro";
var carro = document.getElementById("carroboton");
var camion = document.getElementById("camionboton");
var deportivo = document.getElementById("deportivoboton");

carro.addEventListener("click",function()
{
    carro.style.cssText = 'background-color:green; height: 40px;';
    camion.style.cssText = 'background-color: gray; height: 40px;';
    deportivo.style.cssText = 'background-color: gray; height: 40px;';
    seleccionado = "carro";
})
camion.addEventListener("click",function()
{
    carro.style.cssText = 'background-color: gray; height: 40px;';
    camion.style.cssText = 'background-color:green; height: 40px;';
    deportivo.style.cssText = 'background-color: gray; height: 40px;';
    seleccionado = "camion";

})
deportivo.addEventListener("click",function()
{
    carro.style.cssText = 'background-color: gray; height: 40px;';
    camion.style.cssText = 'background-color: gray; height: 40px;';
    deportivo.style.cssText = 'background-color:green; height: 40px;';
    seleccionado = "deportivo";

 
})




var menuidioma = document.getElementById("paises");
var click = 0;
menuidioma.addEventListener("click",function()
{
    console.log(click,menuidioma.value)
    if(click==1 && menuidioma.value=="Colombia")
    {
 
        click=0;
       window.open("index.html","_self");
       
    }
    else if(click==1 && menuidioma.value=="Argentina")
    {
        click=0;
        window.open("indexarg.html","_self");
    }
    else if(click==1 && menuidioma.value=="Chile")
    {
        click=0;
        window.open("indexch.html","_self");
    }
    else if( click==1 && menuidioma.value=="España")
    {
        click=0;
        window.open("indexesp.html","_self");
    }
    else if( click== 1 &&  menuidioma.value=="Portugal" )
    {
        click=0;
        window.open("indexpo.html","_self");
    }


    else if(click== 1 && menuidioma.value=="Brazil")
    { 
        click=0;
       window.open("indexbr.html","_self");
    }
    else if(click==1 && menuidioma.value=="England")
    { 
        click=0;
       window.open("indexbri.html","_self");
    }
    else if(click==1 && menuidioma.value=="United States" )
    { 
        click=0;
       window.open("indexenglish.html","_self");
    }
    else if(click==1 && menuidioma.value=="Alemania")
    { 
        click=0;
       window.open("indexal.html","_self");
    }
    else if(click==1 && menuidioma.value=="Francia")
    { 
        click=0;
       window.open("indexfr.html","_self");
    }
    else if(click==1 && menuidioma.value=="Italia")
    { 
        click=0;
       window.open("indexit.html","_self");
    }
    else{
        click++;
    }
}
);
