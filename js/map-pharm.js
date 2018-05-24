
/*-------------------------------------------------*/
/* =  MAP
/*-------------------------------------------------*/

$('#map').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
        var styles = [ { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },{ "featureType": "landscape", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#d9d9d9" } ] },{ "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#d9d9d9" } ] },{ "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "visibility": "on" }, { "color": "#ffffff" } ] },{ "featureType": "road", "elementType": "geometry.stroke", "stylers": [ { "visibility": "off" } ] },{ "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" }, { "color": "#1d282d" } ] },{ "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#00a1b2" } ] },{ } ];

        var styledMap = new google.maps.StyledMapType(styles,
          {name: "Styled Map"});

        var mapOptions = {
          zoom: 15,
          center: new google.maps.LatLng(42.356697, -71.059541),
          scrollwheel: false,

          // disable mapType-top_right corner
          mapTypeControl: true,
          disableDefaultUI: false, 

          mapTypeControlOptions: { 
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map-canvas']
          }
        };
 
        var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(42.359012, -71.059541),
            map: map,
            icon: 'images/pin3.png' // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
        });

        map.mapTypes.set('map-canvas', styledMap);
        map.setMapTypeId('map-canvas');    
      
    }
  });