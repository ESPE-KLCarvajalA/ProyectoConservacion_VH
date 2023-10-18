  // Configura el token de acceso de Mapbox
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2lhcmFjYXJ2YWphbCIsImEiOiJjbG5xbGNxd28wZ3V1Mmxwa29lNDE1emZmIn0.E1u2oFJt_jApxZONXYx9dg';

  // Crea un mapa en el contenedor con ID 'map'
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/kiaracarvajal/clnqmabzq00b501pf038kgija', // Estilo de mapa predeterminado
      center: [-0.087105, -79.2804], // Coordenadas del centro del mapa (longitud, latitud)
      zoom: 9 // Nivel de zoom inicial
  });

  // Agrega un marcador al mapa
  var marker = new mapboxgl.Marker()
      .setLngLat([-0.13448885726668677, -79.30649694674477]) // Coordenadas del marcador (longitud, latitud)
      .addTo(map);
