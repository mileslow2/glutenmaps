import GetDistance from './GetDistance'

function makeParam(param, value) {
  return param + "=" + value + "&";
}

async function addDistance(restaurants, location) {
  for (var i = 0; i < restaurants.length; i++) {
    try {
      var dist = await GetDistance(location, restaurants[i].geometry.location);
    } catch (error) {
      console.error(error);
    }
    restaurants[i].dist = dist.rows[0].elements[0].distance.text;
  } 
  return restaurants;

}

export default async function GetPlaces(loc) {
  var returnValue;
  var googleMapRequest =
    "https://maps.googleapis.com/maps/api/place/textsearch/json?";
  googleMapRequest += makeParam(
    "key",
    "AIzaSyCaUWYt5ncgdYaU_zE10HsPxXN1BnSySRQ"
  );
  googleMapRequest += makeParam("input", "gluten-free");
  googleMapRequest += makeParam("location", loc.latitude + "," + loc.longitude);
  googleMapRequest += makeParam("radius", "100");
  googleMapRequest = googleMapRequest.substr(0, googleMapRequest.length - 1); //removes the & from the end
  try {
    await fetch(googleMapRequest)
      .then(res => res.json())
      .then(res => {
        returnValue = addDistance(res.results, loc);
      });
  } catch (error) {
    console.error(error);
  }
  return returnValue;
}

