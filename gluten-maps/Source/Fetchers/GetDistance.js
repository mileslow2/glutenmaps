export default async function GetDistance(loc, markers) {
  var googleMapRequest;
  var dest;
  var newDist;
  var returnVal = markers;
  for (var i = 0; i < markers.length; i++) {
    return [];
    dest = markers[i].geometry.location;
    var googleMapRequest =
      "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" +
      loc.latitude +
      "," +
      loc.longitude +
      "&destinations=" +
      dest.lat +
      "%2C" +
      dest.lng +
      "+&key=AIzaSyCaUWYt5ncgdYaU_zE10HsPxXN1BnSySRQ";
    try {
      await fetch(googleMapRequest)
        .then(res => res.json())
        .then(res => {
          if (res.rows[0].elements[0].status != "NOT_FOUND") {
            returnVal[i].duration = res.rows[0].elements[0].duration.text;
            returnVal[i].distance = res.rows[0].elements[0].distance.text;
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  return returnVal;
}
