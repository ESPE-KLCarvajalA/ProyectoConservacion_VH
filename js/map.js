mapboxgl.accessToken = "pk.eyJ1Ijoia2lhcmFjYXJ2YWphbCIsImEiOiJjbG5xbGNxd28wZ3V1Mmxwa29lNDE1emZmIn0.E1u2oFJt_jApxZONXYx9dg"

const mapa = new mapboxgl.Map({
    container: "contenedor-del-mapa",
    style: "mapbox://styles/kiaracarvajal/clnqmabzq00b501pf038kgija",
    //center: [-79.2803499, -0.085999],
    //center: [-79.24328735974663, -0.07318807638157375],
    center: [-79.23633285860635, -0.07335973761815599],
    zoom: 11
})

mapa.on("load", () => {

    mapa.addSource("puntosDeInteres", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "title": "Recinto 'La Asunción' ",
                        "imageURL": "images/recinto1.webp",
                        "linkURL": "recinto1.html"
                    },
                    "geometry": {
                        "coordinates": [

                            -79.30492534043638,
                            -0.13329601512873765
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto5.webp",
                        "title": "Recinto 'Bella esperanza' ",
                        "linkURL": "recinto5.html"
                    },
                    "geometry": {
                        "coordinates": [
                            /* Bella esperanza*/
                            -79.20953750610353,
                            -0.037679669525238824

                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto4.webp",
                        "title": "Recinto 'Mirador de la Selva' ",
                        "linkURL": "recinto4.html"
                    },
                    "geometry": {
                        "coordinates": [
                            /* Mirador de la Selvae*/
                            -79.21983939041927,
                            -0.019973069024874918
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto-3.webp",
                        "title": "Recinto 'Nueve de octubre' ",
                        "linkURL": "recinto3.html"
                    },
                    "geometry": {
                        "coordinates": [
                            /*Nueve de octubre */
                            -79.20713240068143,
                            -0.0076134502663692035
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto2.webp",
                        "title": "Recinto 'Playas del Río Blanco' ",
                        "linkURL": "recinto2.html"
                    },
                    "geometry": {
                        "coordinates": [
                            /* Playas del Río Blanco*/
                            -79.09603209851402,
                            -0.04160239926988488
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "coordinates": [
                            /* Las palmas*/

                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto7.webp",
                        "title": "Recinto 'Marianitas' ",

                    },
                    "geometry": {
                        "coordinates": [
                            /* Marianitas */
                            -79.15278426214049,
                            -0.055764457720203865
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto8.webp",
                        "title": "Recinto '4 de febrero ' ",

                    },
                    "geometry": {
                        "coordinates": [
                            /*4 de febrero */
                            -79.20112233796759,
                            -0.08091283135372615
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto9.webp",
                        "title": "Recinto 'El Recreo' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /*El recreo */
                            -79.24078103909643,
                            -0.014565735898482389,
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto11.webp",
                        "title": "Recinto 'Cristóbal Colon' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /*Cristóbal Colon */
                            -79.18093798607428,
                            -0.04855468288047567
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto10.webp",
                        "title": "Recinto 'La Primavera' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /* La Primavera*/
                            -79.28130793765965,
                            -0.10738921583375077
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto12.webp",
                        "title": "Recinto 'San Vicente' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /* San Vicente*/
                            -79.14756973704785,
                            -0.03742972122635489
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto13-3.jpeg",
                        "title": "Recinto 'Auténticos Campesinos' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /*Auténticos Campesinos */
                            -79.17685201850148,
                            -0.08271292704364534
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto14.webp",
                        "title": "Recinto 'Los Naranjos' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /*Los Naranjos */
                            -79.15884173692858,
                            -0.03061691153370629
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto15.webp",
                        "title": "Recinto 'San Isidro' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /* San Isidro*/
                            -79.1844478224669,
                            -0.020657367556782744
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto16.webp",
                        "title": "Recinto 'El Triunfo' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /* El Triunfo*/
                            -79.2946801244639,
                            -0.01851478559338126
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto17.webp",
                        "title": "Recinto 'El Descanso' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /* El Descanso */
                            -79.20156422878314,
                            -0.06506719159220584
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto18.webp",
                        "title": "Recinto 'Simón Bolivar' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /*Simón Bolivar */
                            -79.17554859107346,
                            -0.01982051839635518
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto19.webp",
                        "title": "Recinto 'Nuevo Amanecer' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /* Nuevo Amanecer*/
                            -79.20124214489903,
                            -0.05721368807417102
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "imageURL": "images/recinto20.webp",
                        "title": "Recinto 'El Cristal' ",
                    },
                    "geometry": {
                        "coordinates": [
                            /* El Cristal */
                            -79.22514142174772,
                            -0.08030967019847568
                        ],
                        "type": "Point"
                    }
                },

            ]
        }
    })


    mapa.addLayer({
        "id": "puntosDeInteres-layer",
        "type": "circle",
        "source": "puntosDeInteres",
        "paint": {
            "circle-radius": 10,
            "circle-color": "green"
        }
    })

    let popup;

    mapa.on('click', 'puntosDeInteres-layer', function (e) {
        if (popup) {
            popup.remove();
            popup = null;
        }

        mapa.getCanvas().style.cursor = 'pointer';

        const coordinates = e.features[0].geometry.coordinates;
        const title = e.features[0].properties.title;
        const imageUrl = e.features[0].properties.imageURL; // URL de la imagen
        const linkURL = e.features[0].properties.linkURL; // URL para el enlace

        const popupContent = document.createElement('div');
        popupContent.innerHTML = `
        <div class="popup-container">
        <a href="${linkURL}"><img class="popup-image" src="${imageUrl}" alt="${title}"></a>
        <h3 class="popup-title"><a href="${linkURL}">${title}</a></h3>
        </div>
    `;

        popup = new mapboxgl.Popup({
            closeButton: false,
            className: 'custom-popup', // Clase CSS personalizada para el popup
        })
            .setLngLat(coordinates)
            .setDOMContent(popupContent)
            .addTo(mapa);
    });
})

