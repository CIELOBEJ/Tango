
//Google Mapp


function initMap() {
        var myLatLng = {lat: 45.5025982, lng:  8.662737399999969
};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'TANGO Abbigliamento'
        });

        /* Marker Tango */
        var contentString =
        '<div class="popup">'+
        '<h2 id="tango">TANGO</h2>'+
        '<p>Abbigliamento donna e uomo</b><br/>'+
        '<small><b>Via di Amicis 13, <b>Cameri(NO)</small></p>'+
        '<a target="_blank" href="https://www.google.it/maps/place/Via+Edmondo+De+Amicis,+13,+28062+Cameri+NO/@45.5025746,8.6605917,17z/data=!3m1!4b1!4m5!3m4!1s0x47865eca768c15b3:0xddd669f916347a38!8m2!3d45.50257!4d8.66278">'+
        'Visualizza su Google Maps &#187;</a> '+
        '</div>';
        var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
        maxHeight: 100,
        });

        google.maps.event.addListener(marker,'click',function() {
          infowindow.open(map,marker);
          map.setCenter(marker.getPosition());
  });
      }

/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}



$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".main-header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".main-header").removeClass("active");
        }
    });
});