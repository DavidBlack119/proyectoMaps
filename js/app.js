// Nuestro código irá aquí
var arregloPines = [];

//Funcion para agregar pines
function agregarMarcador(location) {
  var pin = new google.maps.Marker({
    position: location,
    map: map,
    //animation: google.maps.Animation.DROP
  });

  console.log("Latitud: ", location.lat());
  console.log("Longitud: ", location.lng());

  for (var i in arregloPines) {
    arregloPines[i].setMap(null);
  }
  arregloPines.push(pin);
}

function cargar_mapa() {
  var myOptions = {
    zoom: 15,
    center: new google.maps.LatLng(24.1016125, -110.3175546),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);

  //Agregar Movimiento de mapa
  map.addListener("click", function (event) {
    agregarMarcador(event.latLng);
  });

  //Arreglo de pines
  var pin = new google.maps.Marker({
    position: new google.maps.LatLng(24.1016125, -110.3175546),
    map: map,
    title: "Hola mundo",
  });

  arregloPines.push(pin);
}
