var map;



$(document).ready(function(){

	
	var mapOptions = {
      center: new google.maps.LatLng(45.354224, -75.753368),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom: 12
	};

	map = new google.maps.Map($("#map")[0],
            mapOptions);


	setTimeout(
		function(){
			addMarker();
		}, 
		1500);
});




function addMarker()
{
	var marker = new google.maps.Marker({
    	position: new google.maps.LatLng(45.354224, -75.753368),
    	map: map,
    	title:"This is my house!",
    	animation: google.maps.Animation.DROP
	});
	google.maps.event.addListener(marker, 'click', function()
		{
			makeInfoWindow(marker);
		});

}


function makeInfoWindow(marker)
{
	  var infowindow = new google.maps.InfoWindow({
	  		map:map,
	      	content: '<p style = "width:150px;height:80px;">This is my house!</p>',
	      	position: marker.position,

	  });

}