var topicId = getParameterByName('topic_id');
//Solo por propositos de debug
/*if(topicId){
  alert("El topic ID es:"+topicId);
}*/
var api = {
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics/'
};
var apiTema = api.url + topicId;

var cargarPagina = function () {
    cargarTema();
};


var cargarTema = function () {
    //obteniendo tema de la api
    //console.log(topicId)
    
    $.getJSON(apiTema, function (tema) {
        console.log(tema)
        var contenido = tema.content;
        var autor = tema.author_name;
        obtenerRespuestas()
    });
}

var obtenerRespuestas = function(){
    var apiRespuestas = apiTema+"/responses";
    $.getJSON(apiRespuestas, function (respuestas) {
        console.log(respuestas)
        
    });
}

$(document).ready(cargarPagina);
