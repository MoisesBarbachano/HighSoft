"use strict";


function goMap () {
  var myLatlng = new google.maps.LatLng(20.9928648,-89.5865904,21);
    var mapOptions = {
        zoom: 16,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "High Soft"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

};


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		goMap()
	})(jQuery);
});