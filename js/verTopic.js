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

var 
var cargarTema = function () {
    //obteniendo tema de la api
    //console.log(topicId)
    
    $.getJSON(apiTema, function (tema) {
        console.log(tema)
        var contenido = tema.content;
        var autor = tema.author_name;
    });
}

var obtenerRespuestas = function(){
    $.getJSON(, function (tema) {
        console.log(tema)
        var contenido = tema.content;
        var autor = tema.author_name;
    });
}

$(document).ready(cargarPagina);
