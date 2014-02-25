var map;


$(document).ready(function(){

	var mapOptions = {
      center: new google.maps.LatLng(45.354224, -75.753368),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 12
	};

	map = new google.maps.Map($("#map")[0],
            mapOptions);
});