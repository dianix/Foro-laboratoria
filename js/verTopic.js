var topicId = getParameterByName('topic_id');
//Solo por propositos de debug
/*if(topicId){
  alert("El topic ID es:"+topicId);
}*/
var api = {
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

var cargarPagina = function () {
    cargarTema();
};

var cargarTema = function () {
    //obteniendo tema de la api
    console.log(topicId)
    /*$.getJSON(api.url, function (temas) {
        //temas.forEach(obtenerContenidos);
        temas.forEach(armarTema);
    });*/
}


$(document).ready(cargarPagina);
