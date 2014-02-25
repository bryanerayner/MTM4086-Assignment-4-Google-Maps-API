var map;



$(document).ready(function(){

	var styles = [
    	{
      		stylers: [
        		{ hue: "#006677" },
        		{ saturation: 30 }
      		]
    	},

    	{
      		featureType: "road",
      		elementType: "geometry",
      		stylers: [
        		{ hue: "#eeaacc",
        			lightness: 50 },
        		{ visibility: "simplified" }
      		]
    	},

    	{
      		featureType: "road",
      		elementType: "labels",
      		stylers: [
        		{ visibility: "off" }
      		]
    	},
    		// Turn off stinking annoying POIs.
    	{
    		featureType: "poi",
    		stylers: [
    			{visibility: "off"}
    		]    		
    	}
  ];

  	var styledMap = new google.maps.StyledMapType(styles, {name:"Styled Map"});

	var mapOptions = {
      center: new google.maps.LatLng(45.354224, -75.753368),
      mapTypeControlOptions:{
	      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      },
      zoom: 12
	};

	map = new google.maps.Map($("#map")[0],
            mapOptions);
	map.mapTypes.set("map_style", styledMap);
	map.setMapTypeId("map_style");
});