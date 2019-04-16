function initMap(){
  var el = document.getElementById('container');
  var myLocation = new google.maps.LatLng(21.012613, 105.848855);
  var mapOptions = {
    center: myLocation,
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
  });

var infowindow = new google.maps.InfoWindow({
		content: 'My House'
	});

  google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(myMap, marker);
  });

}

google.maps.event.addDomListener(window, 'load', initMap);