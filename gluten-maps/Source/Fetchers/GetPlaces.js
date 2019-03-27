import GetDistance from './GetDistance'
import GetDescriptions from "./GetDescription"
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

function removeClosed(restaurants) { //removes the restaurants that are closed 
  var isOpen;
  for (var i = 0; i < restaurants.length; i++) {
    isOpen = restaurants[i].opening_hours.open_now;
    if(!isOpen) {
      console.log(isOpen)
      delete restaurants[i]; 
    }
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
        returnValue = res.results;
      });
  } catch (error) {
    console.error(error);
  }
  GetDescriptions(returnValue);
  // returnValue = removeClosed(returnValue);
  returnValue = await addDistance(returnValue, loc);
  return returnValue;
}

