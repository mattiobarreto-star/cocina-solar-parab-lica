const imagenes =
document.querySelectorAll(".galeria img");

const modal =
document.getElementById("modal");

const imagenGrande =
document.getElementById("imagenGrande");

const cerrar =
document.getElementById("cerrar");

imagenes.forEach((img)=>{

    img.addEventListener("click",()=>{

        modal.style.display="flex";

        imagenGrande.src=img.src;

    });

});

cerrar.addEventListener("click",()=>{

    modal.style.display="none";

});

modal.addEventListener("click",()=>{

    modal.style.display="none";

});
const ctx =
document.getElementById("grafico");

new Chart(ctx,{

type:"bar",

data:{

labels:[
"0 min",
"15 min",
"30 min",
"45 min",
"60 min"
],

datasets:[{

label:"Temperatura °C",

data:[
28,
52,
74,
95,
105
]

}]

}

});
document
.getElementById("arriba")
.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});