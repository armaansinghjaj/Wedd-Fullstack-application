let userlocationlat = null;
      let userlocationlng = null;
      let startlat = null;
      let startlng = null;
      let destlat = null;
      let destlng =null;
      var map = L.map("map").setView([51.0447, -114.0719], 12); //change longitude latitude to the location of the person
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
         maxZoom: 17,
      }).addTo(map);
      L.Control.geocoder().addTo(map);
      if (!navigator.geolocation) {
         console.log("Your browser doesn't support geolocation feature!");
      } else {
         navigator.geolocation.getCurrentPosition(getPosition);
      }
      var marker, circle, lat, long, accuracy;
      function getPosition(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      accuracy = position.coords.accuracy;
      if (marker) {
         map.removeLayer(marker);
      }
      if (circle) {
         map.removeLayer(circle);
      }
      marker = L.marker([lat, long]);
      circle = L.circle([lat, long], { radius: accuracy });
      var featureGroup = L.featureGroup([marker, circle]).addTo(map);
      map.fitBounds(featureGroup.getBounds());
      userlocationlat = lat;
      userlocationlng = long;
      }
      function addRoute(){
         startlat = parseFloat(document.getElementById("startlat").value);
         startlng = parseFloat(document.getElementById("startlng").value);
         destlat = parseFloat(document.getElementById("destlat").value);
         destlng = parseFloat(document.getElementById("destlng").value);
         L.Routing.control({
            waypoints: [L.latLng(startlat, startlng), L.latLng(destlat, destlng)], 
         }).addTo(map);
      }
      function updateLatLng(){
         let pickup = document.getElementById("picks").value;
            pickup = pickup.replace(" ","+");
            var url = "https://nominatim.openstreetmap.org/?q="+pickup+"&format=json";
            var xmldoc = null;
            return fetch(url)
                  .then(response => response.text())
                  .then(str =>{
                     if (JSON.parse(str)[0])
                     {
                        document.getElementById("startlat").value = parseFloat(JSON.parse(str)[0].lat);
                        document.getElementById("startlng").value =  parseFloat(JSON.parse(str)[0].lon);
                     }
                     
                     
                     let destination = document.getElementById("dest").value;
                     destination = destination.replace(" ","+");
                     var url = "https://nominatim.openstreetmap.org/?q="+destination+"&format=json";
                     var xmldoc = null;
                     return fetch(url)
                              .then(response => response.text())
                              .then(str =>{
                                 if (JSON.parse(str)[0]){
                                    document.getElementById("destlat").value = parseFloat(JSON.parse(str)[0].lat);
                                    document.getElementById("destlng").value =  parseFloat(JSON.parse(str)[0].lon);
                                 }
                                 
                                 
                              })
                     
                     })
      }
      
      
      if (document.getElementById("map_state").value=="1"){
         document.getElementById("dest").addEventListener("input", ()=>{
            updateLatLng();
         });
         document.getElementById("picks").addEventListener("input", ()=>{
            updateLatLng();
         });
         document.getElementById("gps").addEventListener("click", ()=>{
         var url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+userlocationlat+"&lon="+userlocationlng;
         var xmldoc = null;
         return fetch(url)
               .then(response => response.text())
               .then(str =>{
                  document.getElementById("picks").value = JSON.parse(str).display_name;
               })
      });
      }
      if (document.getElementById("map_state").value=="2"){
         addRoute();
         document.getElementById("get_map").addEventListener("click",()=>{
            document.getElementById("map_div").style.visibility = "visible";
            document.getElementById("info_div").style.visibility = "hidden";
            document.getElementById("buttons").innerHTML='<form method = "post"> <input type="submit" value="Confirm"> <input type="hidden" value="confirm" name="action"> </form> <br> <form action="ride"><input type="submit" value="Reset"></form>'
         });
         document.getElementById("getquote").addEventListener("click", () => {
            let h3tag;
            h3tag = document.getElementsByTagName("h3")[0].innerHTML;
            let distance = parseFloat(h3tag.slice(0,h3tag.indexOf('km')-1));
            let hours = 0;
            let minutes = 0;
            if (h3tag.indexOf("h")<=0){
               minutes = parseFloat(h3tag.slice(h3tag.indexOf('km')+4,h3tag.indexOf('min')-1));
            }else if (h3tag.indexOf("min")<=0) {
               hours = parseFloat(h3tag.slice(h3tag.indexOf('km')+4,h3tag.indexOf('h')-1));
            }else{
               hours = parseFloat(h3tag.slice(h3tag.indexOf('km')+4,h3tag.indexOf('h')-1));
               minutes = parseFloat(h3tag.slice(h3tag.indexOf('h')+2,h3tag.indexOf('min')-1));
            }
            minutes += (hours*60);
            let price = 28+(distance*1.25)+(minutes*.8)
            document.getElementById("estimate").innerHTML = "Estimate: "+price+"$ (This is just an estimate the price may change)"
            });
            
      }
      if (document.getElementById("map_state").value=="3"){
         addRoute();
      }