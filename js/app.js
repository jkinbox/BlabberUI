 var map = L.map('map').locate({setView: true, maxZoom: 16});    
           // add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
      
   
    function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

// Facebook Login


      // Initialize the Facebook JavaScript SDK
      FB.init({
        appId: '582902635081251',
        xfbml: true,
        status: true,
        cookie: true,
      });

      // Check if the current user is logged in and has authorized the app
      FB.getLoginStatus(checkLoginStatus);

      // Login in the current user via Facebook and ask for email permission
      function authUser() {
        FB.login(checkLoginStatus, {scope:'email'});
      }

      // Check the result of the user status and display login button if necessary
      function checkLoginStatus(response) {
        if(response && response.status == 'connected') {
          alert('User is authorized');

          // Hide the login button
          document.getElementById('loginButton').style.display = 'none';

          // Now Personalize the User Experience
          console.log('Access Token: ' + response.authResponse.accessToken);
        } else {
          alert('User is not authorized');

          // Display the login button
          document.getElementById('loginButton').style.display = 'block';
        }
      }