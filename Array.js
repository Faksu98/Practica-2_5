const imagenesProductos = [
    "https://http2.mlstatic.com/D_NQ_NP_2X_619126-MLA50232132766_062022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_847906-MLA49763193559_042022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_991401-MLA31351342525_072019-O.webp"
];

const nombresPorductos= ["Tele", "Celu", "Compu"];

/*
let nombresProductosMio=["El archivo", "Placa de Video"];
let imagenesProductosMio=[
    "https://http2.mlstatic.com/D_NQ_NP_784446-MLA48152359723_112021-O.jpg",
    "https://mexx-img-2019.s3.amazonaws.com/Placa-De-Video-GeForce-RTX-3090-24Gb-Gigabyte-Oc_43100_1.jpeg",
];
*/

const nombresUsuario = []
const imagenesUsuario = []

for (let i = 0; i < imagenesProductos.length; i++) {
    document.querySelector("#contenedor_base").innerHTML += `
    <center>${nombresPorductos[i]}<p/>
    <img width='400' height='400' src=${imagenesProductos[i]}></center>
    `;
}

function elementosAgregadosPorUsuario(){
    let nombresAgregados = document.querySelector("#nombre_ingresado_usuario").value;
    nombresUsuario.push(nombresAgregados);
    let imagenesAgregadas = document.querySelector("#imagen_ingresada_usuario").value;
    imagenesUsuario.push(imagenesAgregadas);
    for (let i = 0; i < nombresUsuario.length; i++) {
        document.querySelector("#elementos_usuario").innerHTML += `
        <center>${nombresUsuario[i]}<p/>
        <img width='400' height='400' src=${imagenesUsuario[i]}></center>
        `;        
    }
}






