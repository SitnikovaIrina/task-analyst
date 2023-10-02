ymaps.ready(init);

geoObjects = [];

function init() {
	let map = new ymaps.Map('yandex-map-container', {
		center: [53.928869, 37.447955],
		zoom: 8
	});

  var myPolyline = new ymaps.Polyline(polylines, {}, {
    balloonCloseButton: false,
    strokeColor: "#000000",
    strokeWidth: 2,
  });

  for (let i = 0; i < myPlacemarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark([myPlacemarks[i].latitude, myPlacemarks[i].longitude], {}, {
      preset: 'islands#governmentCircleIcon'
    });
  }

  let clusterer = new ymaps.Clusterer({});

  map.geoObjects.add(myPolyline);
  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);
}
