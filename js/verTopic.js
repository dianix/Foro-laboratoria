var topicId = getParameterByName('topic_id');
//Solo por propositos de debug
/*if(topicId){
  alert("El topic ID es:"+topicId);
}*/
var api = {
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics/'
};
var apiTema = api.url + topicId;

var cargarPagina = function () {
    cargarTema();
};

var cargarTema = function () {
    //obteniendo tema de la api    
    $.getJSON(apiTema, function (tema) {
        //console.log(tema)
        var contenido = tema.content;
        var autor = tema.author_name;
        var fecha = tema.created_at;
        $("#contenido").text(tema.content);
        $("#autor").text(tema.author_name);
        $("#fecha").text(tema.created_at);
        obtenerRespuestas()
    });
}


var obtenerRespuestas = function () {
    var apiRespuestas = apiTema + "/responses";
    $.getJSON(apiRespuestas, function (respuestas) {
        mostrarRespuestas(respuestas);
    });
};

var platillaRespuesta = '<h4>__temacontenido__</h4>' +
    '<h6>__temaautor__</h6>' +
    '<h6>__temafecha__</h6>';

var mostrarRespuestas = function (respuestas) {
    var listaRespuestas = $("#listaRespuestas");
    plantillaFinalR = "";
    respuestas.forEach(function (respuesta) {
        plantillaFinalR += platillaRespuesta.replace("__temacontenido__", respuesta.content)
            .replace("__temaautor__", respuesta.author_name)
            .replace("__temafecha__", respuesta.created_at)
    })
        console.log(plantillaFinalR);
    listaRespuestas.html(plantillaFinalR)
}

$(document).ready(cargarPagina);
