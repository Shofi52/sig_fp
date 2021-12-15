mapboxgl.accessToken = "pk.eyJ1Ijoic2hvZmk1MiIsImEiOiJja3czOTczNTUwa3UzMnVtbTJsbDlrMG00In0.lxISyjrJDjrmYjPfRLMsJQ";

var map = new mapboxgl.Map({
    container: "map", 
    style: 'mapbox://styles/mapbox/streets-v11', // Specify which map style to use
    center: [112.738845,-7.260445], // Specify the starting position [lng, lat]
    zoom: 11.5 
});

    // // Menambahkan search bar
    var coordinatesGeocoder = function (query) {

    // match anything which looks like a decimal degrees coordinate pair
    var matches = query.match(
    /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
    );
    if (!matches) {
    return null;
    }
     
    function coordinateFeature(lng, lat) {
    return {
    center: [lng, lat],
    geometry: {
    type: 'Point',
    coordinates: [lng, lat]
    },
    place_name: 'Lat: ' + lat + ' Lng: ' + lng,
    place_type: ['coordinate'],
    properties: {},
    type: 'Feature'
    };
    }
     
    var coord1 = Number(matches[1]);
    var coord2 = Number(matches[2]);
    var geocodes = [];
     
    if (coord1 < -90 || coord1 > 90) {
    // must be lng, lat
    geocodes.push(coordinateFeature(coord1, coord2));
    }
     
    if (coord2 < -90 || coord2 > 90) {
    // must be lat, lng
    geocodes.push(coordinateFeature(coord2, coord1));
    }
     
    if (geocodes.length === 0) {
    // else could be either lng, lat or lat, lng
    geocodes.push(coordinateFeature(coord1, coord2));
    geocodes.push(coordinateFeature(coord2, coord1));
    }
     
    return geocodes;
    };
     
    map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    localGeocoder: coordinatesGeocoder,
    zoom: 13,
    placeholder: '      Search',
    mapboxgl: mapboxgl
    }), 'top-left'
    );

    var places =
{
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [112.737785, -7.245808]
        },
        "properties": {
            "title": "Tugu Pahlawan Surabaya",
            "description": "Monumen Tugu Pahlawan dan Museum Sepuluh Nopember Surabaya.",
            "Accessibility": "Dapat diakses dengan kursi roda",
            "icon": "url(https://upload.wikimedia.org/wikipedia/commons/3/3e/Tugu_Pahlawan_Surabaya.jpg)",
            "filter": "Akses Kursi Roda"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [112.803498, -7.294468]
        },
        "properties": {
            "title": "Hutan Bambu Keputih",
            "description": "Taman lanskap dengan jalan setapak melalui pohon bambu yang menjulang tinggi.",
            "Accessibility": "Tidak dapat diakses dengan kursi roda",
            "icon": "url(https://www.surabayarollcake.com/wp-content/uploads/2018/11/Hutan-Bambu-Sukolilo.jpg)",
            "filter": "Tidak Ada Akses"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [112.750299, -7.265479]
        },
        "properties": {
            "title": "Monumen Kapal Selam Surabaya",
            "description": "Museum di dalam kapal selam perang.",
            "Accessibility": "Tidak dapat diakses dengan kursi roda",
            "icon": "url(https://beritabaik.id/cms/static/upload/content/images/20190822/1566443684492-20190820_120429.jpg)",
            "filter": "Tidak Ada Akses"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [112.737140, -7.296476]
        },
        "properties": {
            "title": "Kebun Binatang Surabaya",
            "description": "Didirikan pada tahun 1918, kebun binatang ini memiliki hewan seperti singa, beruang, komodo, dll.",
            "Accessibility": "Dapat diakses dengan kursi roda",
            "icon": "url(https://i2.wp.com/ngetripkemana.com/wp-content/uploads/2020/01/Kebun-Binatang-Surabaya-monyet-630x380.jpg)",
            "filter": "Akses Kursi Roda"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [112.821857, -7.308165]
        },
        "properties": {
            "title": "Ekowisata Mangrove Wonorejo",
            "description": "Fasilitas yang menawarkan wahana perahu melewati hutan mangrove.",
            "Accessibility": "Tidak dapat diakses dengan kursi roda",
            "icon": "url(https://bappeko.surabaya.go.id/ecobis/upload/wisata/sejarah/detail_42_01.jpg)",
            "filter": "Tidak Ada Akses"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [112.662147, -7.250845]
        },
        "properties": {
            "title": "Food Junction Grand Pakuwon",
            "description": "Dapat menikmati berbagai macam kuliner yang tersedia mulai dari makanan Nusantara hingga mancanegara sambil menikmati pemandangan danau.",
            "Accessibility": "Dapat diakses dengan kursi roda",
            "icon": "url(https://i.vgy.me/2EZX4y.jpg)",
            "filter": "Akses Kursi Roda"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [112.732495, -7.196762]
        },
        "properties": {
            "title": "Surabaya North Quay",
            "description": "Dek atap gedung yang menawarkan pemandangan pelabuhan.",
            "Accessibility": "Dapat diakses dengan kursi roda",
            "icon": "url(https://3.bp.blogspot.com/-8S7kivZ_BM4/V2eZsJm7c6I/AAAAAAAAEQc/_nKdgGdu_ds5tqRGHo1gc2eJlM4ZwW_GgCLcB/s1600/Surabaya%2BNorth%2BQuay%2B-%2BPhoto%2Bby%2BEdowndx.jpg)",
            "filter": "Akses Kursi Roda"
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [112.797104, -7.252104]
        },
        "properties": {
            "title": "Kenjeran Park",
            "description": "Tujuan wisata yang memiliki tempat makan, pagoda, patung, serta wahana-wahana di Atlantis Land.",
            "Accessibility": "Dapat diakses dengan kursi roda",
            "icon": "url(https://www.hargatiket.net/wp-content/uploads/2020/02/kenjeran-park.jpg)",
            "filter": "Akses Kursi Roda"
        }
    }
]};

// filter group
var filterGroup = document.getElementById('filter-group');
var tourTypes = [];
var markerList = []; // stores element for each feature

// add markers to map
places.features.forEach(function(marker) {
    // element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = marker.properties.icon;
    el.style.fontSize = 0;
    el.textContent = marker.properties.filter;

    // popup
    var popup = new mapboxgl.Popup({
                        offset: 50,
                        closeButton: false})
                .setHTML('<strong>' + marker.properties.title + '</strong> <p>' + marker.properties.description + '</p> <strong>Aksesibilitas: </strong> <p>' + marker.properties.Accessibility + '</p>');

    // popup on hover
    el.addEventListener('mouseenter', () => {
        popup.addTo(map);
        el.style.width = '90px';
        el.style.height = '90px';
        el.style.zIndex = '10';    
    });
    el.addEventListener('mouseleave', () => {
        popup.remove();
        el.style.width = '40px';
        el.style.height = '40px';  
        el.style.zIndex = '0';    
    });

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
    
    markerList.push(el);

    if(!(tourTypes.includes(marker.properties.filter))){
        tourTypes.push(marker.properties.filter);

        // add checkbox and label elements 
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = true;
        filterGroup.appendChild(input);

        var label = document.createElement('label');
        label.textContent = marker.properties.filter;
        filterGroup.appendChild(label);

        label.addEventListener('click', (e) => {
            var vis = input.checked? "hidden" : "visible";
            for (let i = 0; i < markerList.length; i++) {
                if(!(label.textContent.localeCompare(markerList[i].textContent))){
                    markerList[i].style.visibility = vis;
                }
            }
            input.checked = !input.checked; 
        });
    }
});



