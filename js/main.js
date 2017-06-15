var api = {
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

var $contenedorTemas = $("#listaTemas");

var contenidosTemas = [];

var cargarPagina = function () {
    cargarTemas();
    $("#formTemaNuevo").submit(agregarTema);
    $("#filtrarTemas").submit(filtrarTemas);
};

var cargarTemas = function () {
    //obteniendo temas de la api
    $.getJSON(api.url, function (temas) {
        temas.forEach(armarTema);
        temas.forEach(obtenerContenidos);
    });
};

var armarTema = function (tema) {
    //obteniendo datos de cada tema
    var id = tema.id;
    var autor = tema.author_name;
    var contenido = tema.content;
    var respuestas = tema.responses_count;
    //creando fila para tema
    var $temaFila = $("<tr />").attr("data-id", id);
    //creando celdas para datos
    var $temaContenido = $("<td />");
    $temaContenido.text(contenido + " ─ Por: " + autor);
    var $temaRespuestas = $("<td />");
    $temaRespuestas.text(respuestas);
    //agregando datos a fila de tema y fila a contenedor html
    $temaFila.append($temaContenido).append($temaRespuestas);
    $contenedorTemas.append($temaFila);
};

var agregarTema = function (e) {
    e.preventDefault();
    //obteniendo datos del modal
    var autor = $("#tema-autor").val();
    var contenido = $("#tema-contenido").val();
    console.log(autor, contenido)
    //para enviarlos a la api
    $.post(api.url, {
        author_name: autor,
        content: contenido
    }, function (tema) {
        //para ocultar modal y enviar nuevo tema a html
        $("#modalTemaNuevo").modal("hide");
        armarTema(tema);
    });
};

var filtrarTemas = function (e) {
    e.preventDefault();
    //obtener tema a buscar
    var temaBusqueda = $("#temaBusqueda").val();
    //obtener temas de la api
    
    
};


var obtenerContenidos = function(tema){
    var contenido = tema.content;
    console.log(contenido);
}
________________________________________________________________________
var filtrarRestaurantes = function (e) {
	e.preventDefault();
	var busqueda = $("#buscar").val().toLowerCase();
	var nombreFiltrados = restaurantes.filter(function (restaurante) {
		return restaurante.nombre.toLowerCase().indexOf(busqueda) >= 0;
	});	
	mostrarRestaurantes(nombreFiltrados);	
};
_________________________________________________________________________


$(document).ready(cargarPagina);
