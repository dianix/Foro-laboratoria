var api = {
    url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
};

var $contenedorTemas = $("#listaTemas");

//var contenidosTemas = [];
//-------------------------------------------------------------------
var cargarPagina = function () {
    cargarTemas();
    $("#formTemaNuevo").submit(agregarTema);
    $("#filtrarTemas").submit(filtrarTemas);
};

var cargarTemas = function () {
    //obteniendo temas de la api
    $.getJSON(api.url, function (temas) {
        //temas.forEach(obtenerContenidos);
        temas.forEach(armarTema);
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
    var $contenidoA = $("<a />").attr("href","verTopic.html?topic_id="+id);
    $contenidoA.text(contenido);
    //console.log($contenidoA)
    var $temaContenido = $("<td />");
    $temaContenido.append($contenidoA);
    $temaContenido.append(" ─ Por: " + autor);
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

var plantillaFiltrados ='<tr data-id="__idTema__">'+
                            '<td><a href="verTopic.html?topic_id=__id__">__contenido__ ─ Por: __autor__</a></td>'+
                            '<td>__respuestas__</td>'+
                        '</tr>';

var filtrarTemas = function (e) {
    e.preventDefault();
    //obtener tema a buscar
    var temaBusqueda = $("#temaBusqueda").val().toLowerCase();
    //obtener temas
    $.getJSON(api.url, function (temas) {
        var temasFiltrados = temas.filter(function (tema) {
            return tema.content.toLowerCase().indexOf(temaBusqueda) >= 0;
        });
        console.log(temasFiltrados);
        mostrarResultados(temasFiltrados);
    });
};

var mostrarResultados = function(resultados){
    //console.log(resultados.id)
    var resultadoBusqueda = $("#modalBusqueda")
    plantillaFinal = "";
    plantillaFinal += plantillaFiltrados.replace("__idTema__",resultados.id)
    .replace("__id__",resultados.id)
    .replace("__contenido__",resultados.content)
    .replace("__autor__",resultados.author_name)
    .replace("__respuestas__",resultados.responses_count);
    resultadoBusqueda.html(plantillaFinal);
};

$(document).ready(cargarPagina);
