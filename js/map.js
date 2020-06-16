// Green
var greentrash = L.icon({
	iconUrl: 'img/tr_icon_2.svg',
	iconSize:     [40, 41], // size of the icon
	iconAnchor:   [10, 15], // point of the icon which will correspond to marker's location
	popupAnchor:  [8, -16] // point from which the popup should open relative to the iconAnchor
});
var yellowtrash = L.icon({
	iconUrl: 'img/tr_icon_3.svg',
	iconSize:     [40, 41], // size of the icon
	iconAnchor:   [10, 15], // point of the icon which will correspond to marker's location
	popupAnchor:  [8, -16] // point from which the popup should open relative to the iconAnchor
});
var redtrash = L.icon({
	iconUrl: 'img/tr_icon_1.svg',
	iconSize:     [40, 41], // size of the icon
	iconAnchor:   [10, 15], // point of the icon which will correspond to marker's location
	popupAnchor:  [8, -16] // point from which the popup should open relative to the iconAnchor
});
		
var map = L.map('mapid').setView([-32.288048,115.745967], 14);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 20,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11'
}).addTo(map);
var latlngs = [[-31.873311,115.752608],[-31.874204,115.753145],[-31.875981,115.752844],[-31.880409,115.754114],[-31.881092,115.752794],[-31.875826,115.751442],[-31.873466,115.752183],[-31.873311,115.752608]]
var polygon = L.polygon(latlngs, {color: 'grey', weight: 2, fillOpacity: 0.6}).addTo(map);
// zoom the map to the polygon
map.on('zoom', function() {
	window.scrollTo(0,0);
});
map.fitBounds(polygon.getBounds());
var marker1 = L.marker([-31.874906,115.752302], {icon: greentrash});
marker1.bindPopup("<div class='bin-popup'><div class='firstrow'> <div class='row'>  <div class='col-4'><div class='placeforimg'> <div class='line_bin green_color height80'></div> <img src='img/binicon.svg'>  </div> <p>35.39%</p></div><div class='col-4'><div class='placeforimg'><div class='line_temp green_color height_temp30'></div><img class='temp' src='img/temp.svg'></div> <p class='witho'>82<span>o</span></p></div><div class='col-4'><div class='placeforimg'><div class='line_bin green_color height80'></div><img src='img/binicon2.svg' class='binicon2'><img src='img/bintop.svg' class='bintop'></div> <p class='witho'>1.00<span>o<span></p></div> </div> </div><div class='linedown'> </div>  <div class='description'><h1>Sensor Stirling 15</h1> <p>Sensor in Clarko</p> <p>Stirling</p> <p>Position: -31.8755569122643,115.752373210502</p><p>Data current as of: 08-01-2020 22:25:41</p></div> <div class='description2'> <h3>Bin Details<h3></div>  </div>", "{'minWidth':200}");
marker1.bindTooltip("<span>Bin Details</span>", {className: 'myCSSClass'})
marker1.addTo(map);



var marker2 = L.marker([-31.874498,115.752784], {icon: yellowtrash});
marker2.bindPopup("<div class='bin-popup'><div class='firstrow'> <div class='row'>  <div class='col-4'><div class='placeforimg'> <div class='line_bin orange_color height80'></div> <img src='img/binicon.svg'>  </div> <p>35.39%</p></div><div class='col-4'><div class='placeforimg'><div class='line_temp orange_color height_temp30'></div><img class='temp' src='img/temp.svg'></div> <p class='witho'>82<span>o</span></p></div><div class='col-4'><div class='placeforimg'><div class='line_bin orange_color height80'></div><img src='img/binicon2.svg' class='binicon2'><img src='img/bintop.svg' class='bintop'></div> <p class='witho'>1.00<span>o<span></p></div> </div> </div><div class='linedown'> </div>  <div class='description'><h1>Sensor Stirling 15</h1> <p>Sensor in Clarko</p> <p>Stirling</p> <p>Position: -31.8755569122643,115.752373210502</p><p>Data current as of: 08-01-2020 22:25:41</p></div> <div class='description2'> <h3>Bin Details<h3></div>  </div>", "{'minWidth':200}");
marker2.bindTooltip("<span>Bin Details</span>", {className: 'myCSSClass'})
marker2.addTo(map);

var marker3 = L.marker([-31.8755,115.752583], {icon: redtrash});
marker3.bindPopup("<div class='bin-popup'><div class='firstrow'> <div class='row'>  <div class='col-4'><div class='placeforimg'> <div class='line_bin red_color height80'></div> <img src='img/binicon.svg'>  </div> <p>35.39%</p></div><div class='col-4'><div class='placeforimg'><div class='line_temp red_color height_temp30'></div><img class='temp' src='img/temp.svg'></div> <p class='witho'>82<span>o</span></p></div><div class='col-4'><div class='placeforimg'><div class='line_bin red_color height80'></div><img src='img/binicon2.svg' class='binicon2'><img src='img/bintop.svg' class='bintop'></div> <p class='witho'>1.00<span>o<span></p></div> </div> </div><div class='linedown'> </div>  <div class='description'><h1>Sensor Stirling 15</h1> <p>Sensor in Clarko</p> <p>Stirling</p> <p>Position: -31.8755569122643,115.752373210502</p><p>Data current as of: 08-01-2020 22:25:41</p></div> <div class='description2'> <h3>Bin Details<h3></div>  </div>", "{'minWidth':200}");
marker3.bindTooltip("<span>Bin Details</span>", {className: 'myCSSClass'})
marker3.addTo(map);








var map3 = L.map('mapid3').setView([-32.288048,115.745967], 14);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 20,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11'
}).addTo(map3);
var latlngs = [[-31.873311,115.752608],[-31.874204,115.753145],[-31.875981,115.752844],[-31.880409,115.754114],[-31.881092,115.752794],[-31.875826,115.751442],[-31.873466,115.752183],[-31.873311,115.752608]]
var polygon = L.polygon(latlngs, {color: 'grey', weight: 2, fillOpacity: 0.6}).addTo(map);
// zoom the map to the polygon
map3.on('zoom', function() {
	window.scrollTo(0,0);
});
map3.fitBounds(polygon.getBounds());
var marker1 = L.marker([-31.874906,115.752302], {icon: greentrash});
marker1.bindPopup("<div class='bin-popup'><div class='firstrow'> <div class='row'>  <div class='col-4'><div class='placeforimg'> <div class='line_bin green_color height80'></div> <img src='img/binicon.svg'>  </div> <p>35.39%</p></div><div class='col-4'><div class='placeforimg'><div class='line_temp green_color height_temp30'></div><img class='temp' src='img/temp.svg'></div> <p class='witho'>82<span>o</span></p></div><div class='col-4'><div class='placeforimg'><div class='line_bin green_color height80'></div><img src='img/binicon2.svg' class='binicon2'><img src='img/bintop.svg' class='bintop'></div> <p class='witho'>1.00<span>o<span></p></div> </div> </div><div class='linedown'> </div>  <div class='description'><h1>Sensor Stirling 15</h1> <p>Sensor in Clarko</p> <p>Stirling</p> <p>Position: -31.8755569122643,115.752373210502</p><p>Data current as of: 08-01-2020 22:25:41</p></div> <div class='description2'> <h3>Bin Details<h3></div>  </div>", "{'minWidth':200}");
marker1.bindTooltip("<span>Bin Details</span>", {className: 'myCSSClass'})
marker1.addTo(map3);



var marker2 = L.marker([-31.874498,115.752784], {icon: yellowtrash});
marker2.bindPopup("<div class='bin-popup'><div class='firstrow'> <div class='row'>  <div class='col-4'><div class='placeforimg'> <div class='line_bin orange_color height80'></div> <img src='img/binicon.svg'>  </div> <p>35.39%</p></div><div class='col-4'><div class='placeforimg'><div class='line_temp orange_color height_temp30'></div><img class='temp' src='img/temp.svg'></div> <p class='witho'>82<span>o</span></p></div><div class='col-4'><div class='placeforimg'><div class='line_bin orange_color height80'></div><img src='img/binicon2.svg' class='binicon2'><img src='img/bintop.svg' class='bintop'></div> <p class='witho'>1.00<span>o<span></p></div> </div> </div><div class='linedown'> </div>  <div class='description'><h1>Sensor Stirling 15</h1> <p>Sensor in Clarko</p> <p>Stirling</p> <p>Position: -31.8755569122643,115.752373210502</p><p>Data current as of: 08-01-2020 22:25:41</p></div> <div class='description2'> <h3>Bin Details<h3></div>  </div>", "{'minWidth':200}");
marker2.bindTooltip("<span>Bin Details</span>", {className: 'myCSSClass'})
marker2.addTo(map3);

var marker3 = L.marker([-31.8755,115.752583], {icon: redtrash});
marker3.bindPopup("<div class='bin-popup'><div class='firstrow'> <div class='row'>  <div class='col-4'><div class='placeforimg'> <div class='line_bin red_color height80'></div> <img src='img/binicon.svg'>  </div> <p>35.39%</p></div><div class='col-4'><div class='placeforimg'><div class='line_temp red_color height_temp30'></div><img class='temp' src='img/temp.svg'></div> <p class='witho'>82<span>o</span></p></div><div class='col-4'><div class='placeforimg'><div class='line_bin red_color height80'></div><img src='img/binicon2.svg' class='binicon2'><img src='img/bintop.svg' class='bintop'></div> <p class='witho'>1.00<span>o<span></p></div> </div> </div><div class='linedown'> </div>  <div class='description'><h1>Sensor Stirling 15</h1> <p>Sensor in Clarko</p> <p>Stirling</p> <p>Position: -31.8755569122643,115.752373210502</p><p>Data current as of: 08-01-2020 22:25:41</p></div> <div class='description2'> <h3>Bin Details<h3></div>  </div>", "{'minWidth':200}");
marker3.bindTooltip("<span>Bin Details</span>", {className: 'myCSSClass'})
marker3.addTo(map3);












$( ".dashboard .dashboard_bin .leftside .bin_icon_place .btn_c" ).click(function() {
	setInterval(function() {

	    var map2 = L.map('mapid2').setView([-31.874906,0], 20);
	    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	    	maxZoom: 20,
	    	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
	    		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	    		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    	id: 'mapbox/streets-v11'
	    }).addTo(map2);
	    var latlngs = [[-31.873311,115.752608],[-31.874204,115.753145],[-31.875981,115.752844],[-31.880409,115.754114],[-31.881092,115.752794],[-31.875826,115.751442],[-31.873466,115.752183],[-31.873311,115.752608]]
	    var polygon = L.polygon(latlngs, {color: 'grey', weight: 2, fillOpacity: 0.6}).addTo(map2);
	    // zoom the map to the polygon
	    map2.on('zoom', function() {
	    	window.scrollTo(0,0);
	    });
	    map2.fitBounds(polygon.getBounds());
	    var marker1 = L.marker([-31.874906,115.752302], {icon: greentrash});
	    marker1.bindPopup("<div class='bin-popup'><div class='firstrow'> <div class='row'>  <div class='col-4'><div class='placeforimg'> <div class='line_bin green_color height80'></div> <img src='img/binicon.svg'>  </div> <p>35.39%</p></div><div class='col-4'><div class='placeforimg'><div class='line_temp green_color height_temp30'></div><img class='temp' src='img/temp.svg'></div> <p class='witho'>82<span>o</span></p></div><div class='col-4'><div class='placeforimg'><div class='line_bin green_color height80'></div><img src='img/binicon2.svg' class='binicon2'><img src='img/bintop.svg' class='bintop'></div> <p class='witho'>1.00<span>o<span></p></div> </div> </div><div class='linedown'> </div>  <div class='description'><h1>Sensor Stirling 15</h1> <p>Sensor in Clarko</p> <p>Stirling</p> <p>Position: -31.8755569122643,115.752373210502</p><p>Data current as of: 08-01-2020 22:25:41</p></div> <div class='description2'> <h3>Bin Details<h3></div>  </div>", "{'minWidth':200}");
	    marker1.bindTooltip("<span>Bin Details</span>", {className: 'myCSSClass'})
	    marker1.addTo(map2);


	}, 200);
});


